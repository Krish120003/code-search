"use client";

import { useState } from "react";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowLeft, Github } from "lucide-react";

// Schema for GitHub repository URL validation
const repoFormSchema = z.object({
  repoUrl: z
    .string()
    .min(1, { message: "Repository URL is required" })
    .url({ message: "Must be a valid URL" })
    .refine(
      (url) => {
        // Check if it's a GitHub URL format
        return /^https?:\/\/(www\.)?github\.com\/[^\/]+\/[^\/]+\/?.*$/.test(
          url
        );
      },
      { message: "Must be a valid GitHub repository URL" }
    ),
});

type RepoFormValues = z.infer<typeof repoFormSchema>;

export default function IngestPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with Zod validation
  const form = useForm<RepoFormValues>({
    resolver: zodResolver(repoFormSchema),
    defaultValues: {
      repoUrl: "",
    },
  });

  // Set up tRPC mutation for adding to the queue
  const addToQueue = api.ingest.addToQueue.useMutation({
    onSuccess: () => {
      setIsSubmitting(false);
      form.reset();
      // Optionally redirect or show success message
      router.push("/");
    },
    onError: (error) => {
      setIsSubmitting(false);
      console.error("Error adding repository to queue:", error);
    },
  });

  // Form submission handler
  const onSubmit = (data: RepoFormValues) => {
    setIsSubmitting(true);
    addToQueue.mutate({ url: data.repoUrl });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Ingest GitHub Repository</h1>
        <Button variant="outline" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Search
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="h-5 w-5" />
            Add GitHub Repository
          </CardTitle>
          <CardDescription>
            Enter a GitHub repository URL to ingest its code for searching
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="repoUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GitHub Repository URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://github.com/username/repository"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the full URL to a public GitHub repository
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Processing..." : "Add Repository to Queue"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
