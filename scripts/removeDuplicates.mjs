import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});

async function removeDuplicates() {
  try {
    // Fetch all chef documents
    const chefs = await client.fetch('*[_type == "chef"]');

    // Log fetched chefs for debugging
    console.log('Fetched chefs:', chefs);

    // Track duplicates
    const seenNames = new Set();
    const duplicates = [];

    for (const chef of chefs) {
      if (seenNames.has(chef.name)) {
        duplicates.push(chef._id); // Mark as duplicate
      } else {
        seenNames.add(chef.name); // Add to seen names
      }
    }

    // Log duplicates for debugging
    console.log('Chef duplicates:', duplicates);

    // Delete duplicates
    if (duplicates.length > 0) {
      console.log(`Deleting ${duplicates.length} duplicates...`);
      await Promise.all(duplicates.map(id => client.delete(id)));
      console.log('Duplicates removed successfully!');
    } else {
      console.log('No duplicates found.');
    }
  } catch (error) {
    console.error('Error removing duplicates:', error);
  }
}

removeDuplicates();