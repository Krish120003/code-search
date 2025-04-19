import axios from 'axios';

const INGESTION_API_URL = process.env.INGESTION_API_URL || 'http://localhost:3000/api/ingestion';

interface IngestionDetails {
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
}

export async function sendIngestionDetails(details: IngestionDetails): Promise<void> {
  try {
    const response = await axios.post(INGESTION_API_URL, details);
    console.log('Ingestion details sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending ingestion details:', error);
    throw error;
  }
}
