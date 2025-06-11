import Link from 'next/link'
import { Building2, Warehouse, Layers } from 'lucide-react'

export default function PropertyTypes() {
  const propertyTypes = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Office Spaces',
      description: 'Modern, air-conditioned office spaces with high-speed internet and meeting facilities.',
      features: ['High-speed Internet', 'Meeting Rooms', 'Pantry Areas', '24/7 Access'],
      link: '/properties?type=office',
    },
    {
      icon: <Warehouse className="w-12 h-12" />,
      title: 'Warehouse Units',
      description: 'Spacious warehouse units with high ceilings, loading bays, and easy access.',
      features: ['High Ceilings', 'Loading Bays', 'Cargo Lifts', 'Ample Parking'],
      link: '/properties?type=warehouse',
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: 'Mixed-Use Spaces',
      description: 'Flexible spaces that combine office and warehouse functionality for versatile operations.',
      features: ['Showroom Ready', 'Office + Storage', 'Street Frontage', 'Customizable'],
      link: '/properties?type=mixed',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Spaces Designed for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you need an office, warehouse, or both, we have the perfect space for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={type.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  View Available Units
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}