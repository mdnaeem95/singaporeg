/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Property {
  _id: string
  title: string
  slug: { current: string }
  propertyType: 'office' | 'warehouse' | 'mixed'
  size: number
  pricePerSqft: number
  floor: string
  images: any[]
  description: string
  amenities: Amenity[]
  available: boolean
  featured: boolean
}

export interface Amenity {
  _id: string
  name: string
  icon: string
}

export interface User {
  id: string
  email: string
  name: string
  role: 'tenant' | 'admin'
  tenantId?: string
}