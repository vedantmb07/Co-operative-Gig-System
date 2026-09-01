import { useApp } from '../context/AppContext'
import { Star, MapPin, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Services() {
  const { services, workers } = useApp()

  const getWorker = (skill) => workers.find(w => w.skill.toLowerCase() === skill.toLowerCase())

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-navy-900 mb-3">All Services</h1>
        <p className="text-navy-600 max-w-xl mx-auto">Browse our complete range of household and community services provided by verified cooperative workers.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => {
          const worker = getWorker(service.name)
          return (
            <div key={service.id} className="bg-white rounded-2xl border border-navy-200 p-6 hover:border-cooperative-300 hover:shadow-md transition flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-cooperative-50 text-cooperative-700 text-xs font-medium px-3 py-1 rounded-full">{service.category}</span>
                <span className="text-cooperative-700 font-bold">From ₹{service.basePrice}</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">{service.name}</h3>
              <p className="text-navy-600 text-sm mb-6 flex-1">{service.description}</p>
              {worker && (
                <div className="flex items-center gap-3 mb-4 p-3 bg-navy-50 rounded-xl">
                  <img src={worker.image} alt={worker.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-navy-900 text-sm truncate">{worker.name}</p>
                    <div className="flex items-center gap-1 text-xs text-navy-500">
                      <Star size={12} className="text-amber-400 fill-amber-400" />
                      {worker.rating} • {worker.location}
                    </div>
                  </div>
                </div>
              )}
              <Link to={`/book?service=${service.name}`} className="block text-center bg-cooperative-600 text-white py-2.5 rounded-xl font-medium hover:bg-cooperative-700 transition">
                Book {service.name}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
