import Link from 'next/link'
import { Phone, Calendar } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Find Your Perfect Space?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          Join our community of successful businesses. Schedule a tour today and see why Singapore G 
          Building is the preferred choice for modern enterprises.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Schedule a Tour
          </Link>
          <a
            href="tel:+6561234567"
            className="inline-flex items-center justify-center bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all font-semibold text-lg"
          >
            <Phone className="mr-2 w-5 h-5" />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}