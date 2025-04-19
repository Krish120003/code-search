import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function saveIngestionDetails(details: {
  repoUrl: string;
  stats: {
    numberOfFiles: number;
    ingestionTime: number;
    completionTime: string;
  };
  fileTypes: {
    fileType: string;
    count: number;
  }[];
}): Promise<void> {
  try {
    await prisma.ingestionDetails.create({
      data: {
        repoUrl: details.repoUrl,
        numberOfFiles: details.stats.numberOfFiles,
        ingestionTime: details.stats.ingestionTime,
        completionTime: new Date(details.stats.completionTime),
        fileTypes: {
          create: details.fileTypes.map((fileType) => ({
            fileType: fileType.fileType,
            count: fileType.count,
          })),
        },
      },
    });
  } catch (error) {
    console.error("Error saving ingestion details:", error);
    throw new Error("Failed to save ingestion details");
  }
}
