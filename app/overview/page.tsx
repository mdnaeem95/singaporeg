import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { MapPin, Building, Ruler, Calendar, Shield, Award, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import '../globals.css'

export default function OverviewPage() {
  const specifications = {
    general: [
      { label: 'Building Name', value: 'Singapore G Building' },
      { label: 'Address', value: '2 Tagore Lane, Singapore 787049' },
      { label: 'Land Area', value: '22,894 sqm' },
      { label: 'Gross Floor Area', value: '45,788 sqm' },
      { label: 'Year of Completion', value: '2019' },
      { label: 'Tenure', value: '30 + 30 years' },
    ],
    building: [
      { label: 'Building Type', value: '5-storey Ramp-up Industrial Building' },
      { label: 'Floor Loading', value: '15 kN/m² (1st to 5th Floor)' },
      { label: 'Ceiling Height', value: '9.0m (1st Floor), 6.0m (2nd-5th Floor)' },
      { label: 'Column Grid', value: '12m x 16m' },
      { label: 'Cargo Lifts', value: '4 units (5,000kg capacity each)' },
      { label: 'Passenger Lifts', value: '2 units' },
    ],
    facilities: [
      { label: 'Power Supply', value: '12.5 MVA' },
      { label: 'Loading Bays', value: '20 loading/unloading bays' },
      { label: 'Parking', value: '238 car park lots, 60 lorry park lots' },
      { label: 'Security', value: '24/7 CCTV & Access Control' },
      { label: 'Amenities', value: 'Canteen, Meeting Rooms, Rest Areas' },
      { label: 'Green Features', value: 'BCA Green Mark Gold' },
    ]
  }

  const keyHighlights = [
    'Strategic location with direct access to PIE and CTE',
    'Modern ramp-up design for seamless logistics',
    'High floor loading capacity for heavy industries',
    'Ample parking and loading facilities',
    'Green building with energy-efficient features',
    'Professional on-site management',
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Building Image */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
          <div 
            className="h-full w-full bg-gray-300"
            style={{
              backgroundImage: `url('/api/placeholder/1920/1080')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Singapore G Building
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              A revolutionary approach to industrial real estate, where modern design meets 
              functional excellence at Tagore Lane.
            </p>
            <div className="flex items-center gap-2 text-lg">
              <MapPin className="w-5 h-5" />
              <span>2 Tagore Lane, Singapore 787049</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">45,788</div>
              <div className="text-sm text-gray-400 mt-1">Total GFA (sqm)</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">5</div>
              <div className="text-sm text-gray-400 mt-1">Floors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">238+</div>
              <div className="text-sm text-gray-400 mt-1">Parking Lots</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">2019</div>
              <div className="text-sm text-gray-400 mt-1">Year Built</div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Redefining Industrial Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Singapore G Building represents a new paradigm in industrial real estate development. 
                This state-of-the-art facility combines cutting-edge design with practical functionality, 
                offering businesses a premium environment to operate and grow.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Strategically located at Tagore Lane with excellent connectivity to major expressways, 
                the building provides seamless access to all parts of Singapore, making it ideal for 
                businesses with extensive logistics requirements.
              </p>
              
              <div className="space-y-3">
                {keyHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/properties" 
                className="inline-flex items-center mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                View Available Units
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
                <div className="w-full h-[500px] bg-gray-200" style={{
                  backgroundImage: `url('/api/placeholder/800/600')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }} />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-600 rounded-full opacity-10 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Building Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Purpose-built with the highest standards to meet diverse industrial needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* General Specifications */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">General Info</h3>
              </div>
              <div className="space-y-4">
                {specifications.general.map((spec, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3">
                    <div className="text-sm text-gray-500">{spec.label}</div>
                    <div className="text-lg font-medium text-gray-900">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Building Specifications */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Ruler className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Building Specs</h3>
              </div>
              <div className="space-y-4">
                {specifications.building.map((spec, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3">
                    <div className="text-sm text-gray-500">{spec.label}</div>
                    <div className="text-lg font-medium text-gray-900">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Facilities</h3>
              </div>
              <div className="space-y-4">
                {specifications.facilities.map((spec, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3">
                    <div className="text-sm text-gray-500">{spec.label}</div>
                    <div className="text-lg font-medium text-gray-900">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Strategic Location
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Perfectly positioned for businesses requiring excellent connectivity and accessibility
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Prime Accessibility
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Direct Expressway Access</h4>
                    <p className="text-gray-600">
                      Connected to PIE and CTE, providing quick access to all parts of Singapore. 
                      Just 15 minutes to the CBD and 20 minutes to Changi Airport.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Building className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Industrial Hub</h4>
                    <p className="text-gray-600">
                      Located in the heart of Singapore&apos;s industrial corridor, surrounded by 
                      established businesses and logistics operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Nearby Amenities</h4>
                    <p className="text-gray-600">
                      Close to dining options, banks, and business services. MRT stations 
                      within a 10-minute drive for staff convenience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Key Distances:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• CBD: 15 minutes via PIE</li>
                  <li>• Changi Airport: 20 minutes</li>
                  <li>• Jurong Port: 25 minutes</li>
                  <li>• Tuas Checkpoint: 30 minutes</li>
                </ul>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-[500px]">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Google Maps integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Experience Singapore G Building
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Discover how our state-of-the-art facilities can elevate your business operations. 
            Schedule a visit today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg"
            >
              Schedule a Tour
              <Calendar className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/multimedia"
              className="inline-flex items-center justify-center bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all font-semibold text-lg"
            >
              View Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}