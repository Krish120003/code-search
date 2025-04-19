import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/react";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata: Metadata = {
  title: "Code Search",
  description: "Fast code search interface",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-[#212121] text-[#EEE]">
        <div className="flex h-screen flex-col">
          <header className="fixed left-0 right-0 top-0 z-10 bg-black/80 p-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <h1 className="font-mono text-2xl font-bold">
                ▲ code<span className="text-[#7AB]">search</span>
              </h1>
            </div>
          </header>
          <div className="mt-16 flex h-[calc(100vh-4rem)] flex-1">
            <aside className="w-1/4 min-w-64 bg-[#111] p-4">
              <nav className="space-y-4">
                <div className="pb-2 text-[#888]">FILTERS</div>
                {/* Filters will be added here */}
              </nav>
            </aside>
            <main className="flex-1 overflow-y-auto p-6">
              <NuqsAdapter>
                <TRPCReactProvider>{children}</TRPCReactProvider>
              </NuqsAdapter>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
