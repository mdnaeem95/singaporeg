import Navigation from '@/components/layout/Navigation'
import HeroSection from '@/components/home/HeroSection'
import PropertyTypes from '@/components/home/PropertyTypes'
import Features from '@/components/home/Features'
import AboutSection from '@/components/home/AboutSection'
import CTASection from '@/components/home/CTASection'
import Footer from '@/components/layout/Footer'
import './globals.css'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PropertyTypes />
      <Features />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  )
}