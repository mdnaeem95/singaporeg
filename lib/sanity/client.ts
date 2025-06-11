/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Client for server-side operations
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
})

// Client for client-side operations (no token)
export const publicClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: true,
  perspective: 'published',
})

// Image URL builder
const builder = imageUrlBuilder(publicClient)

export const urlFor = (source: any) => {
  return builder.image(source)
}