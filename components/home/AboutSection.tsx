import { CheckCircle2 } from 'lucide-react'

export default function AboutSection() {
  const highlights = [
    'Strategic location with excellent connectivity',
    'Modern architecture with functional design',
    'Sustainable and energy-efficient building',
    'Professional on-site management team',
    'Competitive rental rates',
    'Established tenant community',
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Redefining Commercial Spaces in Singapore
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Singapore G Building is more than just a commercial property – it&apos;s a testament to modern architecture 
              and functional design. Our development revolutionises the traditional concept of warehouse and office 
              spaces, offering a perfect blend of aesthetics and functionality.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Located strategically with easy access to major highways and public transportation, we provide 
              businesses with the ideal environment to grow and succeed.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
              <div className="w-full h-96 bg-gray-200" style={{
                backgroundImage: `url('/api/placeholder/800/600')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-600 rounded-full opacity-10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}