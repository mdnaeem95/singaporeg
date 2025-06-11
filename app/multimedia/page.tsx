/* eslint-disable @typescript-eslint/no-explicit-any */
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { sanityClient } from '@/lib/sanity/client'
import SanityImage from '@/components/ui/SanityImage'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import '../globals.css'

// Query to get all images
const multimediaQuery = `{
  "buildingImages": *[_type == "buildingInfo"][0]{
    "hero": heroImage{
      asset->{_id, url, metadata{dimensions}},
      alt
    },
    "gallery": galleryImages[]{
      asset->{_id, url, metadata{dimensions}},
      alt,
      caption
    }
  },
  "propertyImages": *[_type == "property" && available == true]{
    title,
    propertyType,
    "images": images[]{
      asset->{_id, url, metadata{dimensions}},
      alt,
      caption
    }
  }
}`

async function getMultimediaContent() {
  try {
    const data = await sanityClient.fetch(multimediaQuery)
    return data
  } catch (error) {
    console.error('Error fetching multimedia:', error)
    return null
  }
}

export default async function MultimediaPage() {
  const content = await getMultimediaContent()
  
  const allBuildingImages = [
    ...(content?.buildingImages?.hero ? [content.buildingImages.hero] : []),
    ...(content?.buildingImages?.gallery || [])
  ]

  const officeImages = content?.propertyImages
    ?.filter((p: any) => p.propertyType === 'office')
    ?.flatMap((p: any) => p.images) || []

  const warehouseImages = content?.propertyImages
    ?.filter((p: any) => p.propertyType === 'warehouse')
    ?.flatMap((p: any) => p.images) || []

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
          {content?.buildingImages?.hero ? (
            <SanityImage
              image={content.buildingImages.hero}
              alt="Singapore G Building Gallery"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="h-full w-full bg-gray-300" />
          )}
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Gallery & Virtual Tour
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
            Explore our state-of-the-art facilities through our comprehensive image gallery
          </p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="building" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="building">Building</TabsTrigger>
              <TabsTrigger value="offices">Offices</TabsTrigger>
              <TabsTrigger value="warehouses">Warehouses</TabsTrigger>
            </TabsList>
            
            <TabsContent value="building" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allBuildingImages.map((image, index) => (
                  <div key={index} className="group relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <SanityImage
                      image={image}
                      alt={image.alt || 'Singapore G Building'}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white text-sm">{image.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="offices" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {officeImages.length > 0 ? (
                  officeImages.map((image: any, index: number) => (
                    <div key={index} className="group relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <SanityImage
                        image={image}
                        alt={image.alt || 'Office Space'}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12 text-gray-500">
                    <p>No office images available at the moment.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="warehouses" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {warehouseImages.length > 0 ? (
                  warehouseImages.map((image: any, index: number) => (
                    <div key={index} className="group relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <SanityImage
                        image={image}
                        alt={image.alt || 'Warehouse Space'}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12 text-gray-500">
                    <p>No warehouse images available at the moment.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to See More?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience Singapore G Building in person. Schedule a guided tour with our leasing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg"
            >
              Schedule a Tour
            </a>
            <a
              href="/properties"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg border border-gray-300"
            >
              View Available Spaces
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}