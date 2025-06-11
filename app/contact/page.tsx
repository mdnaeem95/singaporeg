import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'
import '../globals.css'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
          <div 
            className="h-full w-full bg-gray-300"
            style={{
              backgroundImage: `url('/api/placeholder/1920/800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
            We&apos;re here to help you find the perfect space for your business
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Singapore G Building<br />
                      2 Tagore Lane<br />
                      Singapore 787049
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      General Enquiries: <a href="tel:+6561234567" className="text-blue-600 hover:text-blue-700">+65 6123 4567</a><br />
                      Leasing Hotline: <a href="tel:+6561234568" className="text-blue-600 hover:text-blue-700">+65 6123 4568</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      General: <a href="mailto:info@singaporeg.sg" className="text-blue-600 hover:text-blue-700">info@singaporeg.sg</a><br />
                      Leasing: <a href="mailto:leasing@singaporeg.sg" className="text-blue-600 hover:text-blue-700">leasing@singaporeg.sg</a><br />
                      Careers: <a href="mailto:careers@singaporeg.sg" className="text-blue-600 hover:text-blue-700">careers@singaporeg.sg</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday & Public Holidays: Closed
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      *24/7 access available for all tenants
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/overview"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Tour
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-[500px] lg:h-auto">
              <div className="w-full h-full min-h-[500px] flex items-center justify-center text-gray-500">
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

      <Footer />
    </main>
  )
}