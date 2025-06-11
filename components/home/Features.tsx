import { Shield, Wifi, Car, Clock, Truck, Users, Zap, Building } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: '24/7 Security',
      description: 'Round-the-clock security with CCTV surveillance and controlled access.',
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'High-Speed Internet',
      description: 'Fiber optic connectivity with redundancy for uninterrupted operations.',
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Ample Parking',
      description: 'Dedicated parking spaces for tenants and visitors.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Terms',
      description: 'Short and long-term leases to suit your business needs.',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Loading Bays',
      description: 'Multiple loading bays with easy access for logistics operations.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Meeting Facilities',
      description: 'Modern meeting rooms and conference facilities available.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Power Backup',
      description: 'Uninterrupted power supply with backup generators.',
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Modern Amenities',
      description: 'Cafeteria, rest areas, and other modern conveniences.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            State-of-the-Art Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything your business needs to thrive, all under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}