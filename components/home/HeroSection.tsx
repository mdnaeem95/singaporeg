'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function HeroSection() {
  const [imageIndex, setImageIndex] = useState(0)
  
  const images = [
    '/images/hero-1.jpg', // You'll need to add these
    '/images/hero-2.jpg',
    '/images/hero-3.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {images.map((_, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === imageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
            <div 
              className="h-full w-full bg-gray-200"
              style={{
                backgroundImage: `url('/api/placeholder/1920/1080')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Making First Impressions Count!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Singapore G Building revolutionises the warehousing tradition in both aesthetics and function. 
            Discover modern facilities that go beyond ordinary spaces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold text-lg"
            >
              View Available Spaces
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg"
            >
              Schedule a Tour
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">50,000+</div>
              <div className="text-sm text-gray-300">Total Sqft</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">5</div>
              <div className="text-sm text-gray-300">Floors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-gray-300">Security</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}