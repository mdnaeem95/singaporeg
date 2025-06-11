import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Briefcase, Users, Heart, TrendingUp, Home, Coffee, Calendar, Award, ArrowRight, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import '../globals.css'

export default function CareersPage() {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and wellness programs for you and your family',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and generous leave policies',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Career Growth',
      description: 'Professional development programs and clear advancement paths',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Great Team',
      description: 'Work with passionate professionals in a collaborative environment',
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Modern Workplace',
      description: 'State-of-the-art facilities in our award-winning building',
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Perks & Benefits',
      description: 'Competitive salary, bonuses, and employee discounts',
    },
  ]

  const openPositions = [
    {
      title: 'Senior Property Manager',
      department: 'Operations',
      type: 'Full-time',
      location: 'On-site',
      description: 'Lead our property management team in maintaining excellence across all facilities.',
      requirements: [
        '5+ years property management experience',
        'Strong leadership and communication skills',
        'Knowledge of building systems and regulations',
        'Bachelor\'s degree in relevant field',
      ],
    },
    {
      title: 'Marketing Executive',
      department: 'Marketing',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'Drive marketing initiatives to attract and retain premium tenants.',
      requirements: [
        '3+ years marketing experience',
        'Digital marketing expertise',
        'Creative and analytical mindset',
        'Experience in real estate marketing preferred',
      ],
    },
    {
      title: 'Facilities Technician',
      department: 'Facilities',
      type: 'Full-time',
      location: 'On-site',
      description: 'Ensure smooth operation of building systems and tenant satisfaction.',
      requirements: [
        'Technical diploma or equivalent',
        'Experience with HVAC, electrical systems',
        'Problem-solving abilities',
        'Available for shift work',
      ],
    },
    {
      title: 'Customer Service Officer',
      department: 'Operations',
      type: 'Full-time',
      location: 'On-site',
      description: 'Be the first point of contact for our valued tenants and visitors.',
      requirements: [
        '2+ years customer service experience',
        'Excellent communication skills',
        'Proficient in MS Office',
        'Positive and professional attitude',
      ],
    },
  ]

  const values = [
    { title: 'Excellence', description: 'We strive for the highest standards in everything we do' },
    { title: 'Innovation', description: 'We embrace new ideas and technologies' },
    { title: 'Integrity', description: 'We conduct business with honesty and transparency' },
    { title: 'Teamwork', description: 'We succeed together through collaboration' },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80" />
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
            Build Your Career With Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8">
            Join Singapore G Building and be part of a team that&apos;s revolutionizing 
            the industrial real estate landscape.
          </p>
          <Link
            href="#openings"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg"
          >
            View Open Positions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Singapore G Building?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Singapore G Building, we&apos;re more than just a workplace – we&apos;re a community 
                of passionate professionals dedicated to excellence. Our team manages one of Singapore&apos;s 
                most innovative industrial developments, setting new standards in the industry.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe in nurturing talent, fostering innovation, and creating an environment where 
                every team member can thrive and contribute to our collective success. When you join us, 
                you&apos;re not just taking a job – you&apos;re building a career.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
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
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We take care of our team so they can take care of our tenants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="md:flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center text-sm text-gray-600">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {position.department}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-700 mb-4">{position.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <span className="text-blue-600 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don&apos;t see a position that fits? We&apos;re always looking for talented individuals.
            </p>
            <a
              href="mailto:careers@singaporeg.sg"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send us your resume
            </a>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Life at Singapore G Building
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join a workplace where innovation meets community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Employee Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">4.8</div>
              <div className="text-blue-200">Glassdoor Rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">85%</div>
              <div className="text-blue-200">Internal Promotions</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to Join Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple and transparent application process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Apply Online</h3>
                <p className="text-sm text-gray-600">Submit your application through our careers portal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Initial Screening</h3>
                <p className="text-sm text-gray-600">Our HR team reviews your application</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Interview</h3>
                <p className="text-sm text-gray-600">Meet with our team to discuss the role</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Welcome Aboard</h3>
                <p className="text-sm text-gray-600">Join our team and start your journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}