import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Award, Target, Users, Building, Trophy, Shield, Leaf, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import '../globals.css'

export default function AboutPage() {
  const milestones = [
    { year: '2017', event: 'Land acquisition and development planning begins' },
    { year: '2018', event: 'Groundbreaking ceremony and construction commences' },
    { year: '2019', event: 'Building completion and TOP obtained' },
    { year: '2020', event: 'First tenants move in, 60% occupancy achieved' },
    { year: '2021', event: 'BCA Green Mark Gold certification awarded' },
    { year: '2022', event: 'Full occupancy reached, expansion plans initiated' },
    { year: '2023', event: 'Excellence in Industrial Development Award' },
    { year: '2024', event: 'Smart Building certification achieved' },
  ]

  const coreValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Pioneering modern industrial spaces that challenge traditional warehousing concepts.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Building a thriving ecosystem where businesses support and grow together.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliability',
      description: 'Providing dependable infrastructure and services our tenants can count on.',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainability',
      description: 'Committed to environmental responsibility and green building practices.',
    },
  ]

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'BCA Green Mark Gold',
      year: '2021',
      description: 'Recognized for environmental sustainability and energy efficiency',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence in Industrial Development',
      year: '2023',
      description: 'Awarded by Singapore Industrial & Services Real Estate Association',
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Best New Industrial Building',
      year: '2020',
      description: 'PropertyGuru Asia Property Awards Singapore',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Smart Building Certification',
      year: '2024',
      description: 'Certified for IoT integration and intelligent building management',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
          <div 
            className="h-full w-full bg-gray-300"
            style={{
              backgroundImage: `url('/api/placeholder/1920/1080')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Singapore G Building
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Revolutionizing the industrial real estate landscape with innovation, 
            sustainability, and a commitment to excellence.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Making First Impressions Count
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Singapore G Building represents a paradigm shift in industrial real estate. 
                We&apos;ve reimagined what a modern industrial facility should be – combining 
                stunning aesthetics with uncompromising functionality to create spaces that 
                inspire success.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Since our establishment, we&apos;ve been dedicated to providing businesses with 
                more than just four walls and a roof. We offer a complete ecosystem designed 
                to support growth, foster innovation, and build lasting partnerships.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to excellence has made us the preferred choice for forward-thinking 
                companies seeking a competitive edge through superior infrastructure and strategic location.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Occupancy Rate</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Tenant Companies</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
                <div className="w-full h-[500px] bg-gray-200" style={{
                  backgroundImage: `url('/api/placeholder/800/600')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }} />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600 rounded-full opacity-10"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-600 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be Singapore&apos;s premier industrial real estate development, setting new 
                  standards for design, functionality, and tenant satisfaction in the industry.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide innovative, sustainable, and flexible industrial spaces that empower 
                  businesses to thrive, while fostering a vibrant community of success-driven enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From vision to reality: Building Singapore&apos;s most innovative industrial space
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 ring-4 ring-white"></div>
                  <div className="ml-20">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {milestone.year}
                      </span>
                    </div>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry recognition for our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                      <span className="text-sm text-gray-500">{achievement.year}</span>
                    </div>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Singapore G Building?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experience the difference of a truly modern industrial facility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Infrastructure</h3>
              <p className="text-blue-100">
                State-of-the-art facilities designed for 21st-century business needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vibrant Community</h3>
              <p className="text-blue-100">
                Join a thriving ecosystem of successful businesses and entrepreneurs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Award-Winning</h3>
              <p className="text-blue-100">
                Recognized excellence in design, sustainability, and management
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg"
            >
              Discover Your Space
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}