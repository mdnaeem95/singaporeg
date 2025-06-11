import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold">Singapore G</span>
            </div>
            <p className="text-gray-400">
              Modern commercial spaces designed for businesses that aspire to grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="text-gray-400 hover:text-white transition-colors">
                  Available Spaces
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-gray-400 hover:text-white transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portal" className="text-gray-400 hover:text-white transition-colors">
                  Tenant Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                <span>50 Gambas Crescent<br />Singapore 757022</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:+6561234567" className="hover:text-white transition-colors">
                  +65 6123 4567
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:info@singaporeg.sg" className="hover:text-white transition-colors">
                  info@singaporeg.sg
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
              <li className="ml-8">Sat: 9:00 AM - 1:00 PM</li>
              <li className="ml-8">Sun & PH: Closed</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              *24/7 access for tenants
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Singapore G Building. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}