import { createClient } from '@sanity/client';
import axios from 'axios';
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

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function checkIfFoodExists(name) {
  const query = `*[_type == "food" && name == $name][0]`;
  const params = { name };
  const existingFood = await client.fetch(query, params);
  return existingFood ? existingFood._id : null;
}

async function importData() {
  try {
    console.log('Fetching food data from API...');

    // API endpoint containing food data
    const foodsResponse = await axios.get('https://sanity-nextjs-rouge.vercel.app/api/foods');
    const foods = foodsResponse.data;

    for (const food of foods) {
      console.log(`Processing food: ${food.name}`);

      // Check if food already exists
      const existingFoodId = await checkIfFoodExists(food.name);

      let imageRef = null;
      if (food.image) {
        imageRef = await uploadImageToSanity(food.image);
      }

      const sanityFood = {
        _type: 'food',
        _id: existingFoodId || undefined, // Use existing ID if available
        name: food.name,
        category: food.category || null,
        price: food.price,
        originalPrice: food.originalPrice || null,
        tags: food.tags || [],
        description: food.description || '',
        available: food.available !== undefined ? food.available : true,
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
      };

      console.log('Uploading food to Sanity:', sanityFood.name);
      const result = await client.createOrReplace(sanityFood);
      console.log(`Food processed successfully: ${result._id}`);
    }

    console.log('Food data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

importData();