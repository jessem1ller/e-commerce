import { config } from 'dotenv';
import { db } from '../src/lib/db';
import { products } from '../src/lib/db/schema';

config({ path: '.env.local' });

const nikeProducts = [
  {
    name: 'Nike Air Max 90',
    description: 'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.',
    price: '119.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/air-max-90-mens-shoes-6n7J06.png',
    category: 'Shoes',
    brand: 'Nike'
  },
  {
    name: 'Nike Air Force 1',
    description: 'The radiance lives on in the Nike Air Force 1, the basketball original that puts a fresh spin on what you know best.',
    price: '109.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png',
    category: 'Shoes',
    brand: 'Nike'
  },
  {
    name: 'Nike Dri-FIT T-Shirt',
    description: 'Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable.',
    price: '29.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16a4b0a9-3c7e-4e6b-9b4a-7b8b8b8b8b8b/dri-fit-mens-fitness-t-shirt-2QjSZv.png',
    category: 'Apparel',
    brand: 'Nike'
  },
  {
    name: 'Nike React Infinity Run',
    description: 'The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run.',
    price: '159.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8439f823-86cf-4086-81d2-4f9ff9a66866/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.png',
    category: 'Shoes',
    brand: 'Nike'
  },
  {
    name: 'Nike Tech Fleece Hoodie',
    description: 'The Nike Sportswear Tech Fleece Windrunner Hoodie updates our original running windbreaker with premium materials.',
    price: '89.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7b8b8b8b-8b8b-8b8b-8b8b-8b8b8b8b8b8b/tech-fleece-mens-full-zip-hoodie-2QjSZv.png',
    category: 'Apparel',
    brand: 'Nike'
  },
  {
    name: 'Nike Zoom Pegasus 40',
    description: 'The Nike Air Zoom Pegasus 40 is a responsive running shoe with a comfortable, secure fit.',
    price: '129.99',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8b8b8b8b-8b8b-8b8b-8b8b-8b8b8b8b8b8b/air-zoom-pegasus-40-mens-road-running-shoes-2QjSZv.png',
    category: 'Shoes',
    brand: 'Nike'
  }
];

async function seed() {
  try {
    console.log('Seeding database...');
    
    await db.insert(products).values(nikeProducts);
    
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seed();