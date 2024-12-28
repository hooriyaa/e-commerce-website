import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

interface Source {
  _ref: string;
  _type: string;
}

export const urlFor = (source: Source) => {
  return builder.image(source);
}