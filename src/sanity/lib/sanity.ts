import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID, // from your sanity.json
    dataset: 'production',
    useCdn: true,
    token: process.env.SANITY_API_TOKEN, // Add your token here if needed
    apiVersion: '2025-01-17', // Always use the latest version
  });