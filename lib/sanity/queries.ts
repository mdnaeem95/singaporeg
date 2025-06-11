import { groq } from 'next-sanity'

// Property queries
export const allPropertiesQuery = groq`
  *[_type == "property" && available == true] | order(featured desc, _createdAt desc) {
    _id,
    title,
    slug,
    propertyType,
    floor,
    size,
    pricePerSqft,
    "mainImage": images[0],
    available,
    featured,
    minimumLease
  }
`

export const propertyBySlugQuery = groq`
  *[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    propertyType,
    floor,
    size,
    pricePerSqft,
    description,
    features,
    images,
    floorPlan,
    amenities[]->{
      _id,
      name,
      icon,
      category
    },
    available,
    availableFrom,
    minimumLease
  }
`

export const featuredPropertiesQuery = groq`
  *[_type == "property" && featured == true && available == true] | order(_createdAt desc) [0...3] {
    _id,
    title,
    slug,
    propertyType,
    size,
    pricePerSqft,
    "mainImage": images[0]
  }
`

// Building info query
export const buildingInfoQuery = groq`
  *[_type == "buildingInfo"][0] {
    title,
    address,
    contact,
    description,
    yearBuilt,
    totalFloors,
    images,
    facilities
  }
`

// News queries
export const latestNewsQuery = groq`
  *[_type == "news"] | order(date desc) [0...5] {
    _id,
    title,
    slug,
    category,
    date,
    excerpt
  }
`

// Amenities query
export const allAmenitiesQuery = groq`
  *[_type == "amenity"] | order(category asc, name asc) {
    _id,
    name,
    icon,
    category,
    description
  }
`