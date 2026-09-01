import { useApp } from '../context/AppContext'
import { Star, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Workers() {
  const { workers, liveStatus } = useApp()

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-navy-900 mb-3">Verified Cooperative Workers</h1>
        <p className="text-navy-600 max-w-xl mx-auto">Skilled professionals registered under Labour Cooperative Federations, ready to serve your community.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workers.map(worker => (
          <div key={worker.id} className="bg-white rounded-2xl border border-navy-200 p-6 hover:border-cooperative-300 hover:shadow-md transition flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <img src={worker.image} alt={worker.name} className="w-14 h-14 rounded-xl object-cover" />
              <div>
                <h3 className="font-semibold text-navy-900">{worker.name}</h3>
                <p className="text-sm text-cooperative-700">{worker.skill}</p>
              </div>
            </div>
            <div className="space-y-2 mb-4 flex-1">
              <div className="flex items-center gap-2 text-sm text-navy-600">
                <MapPin size={16} className="text-cooperative-600" />
                {worker.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-600">
                <Star size={16} className="text-amber-400 fill-amber-400" />
                {worker.rating} • {worker.jobs} jobs
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-600">
                <span className={`w-2 h-2 rounded-full ${worker.available ? 'bg-emerald-500' : 'bg-navy-400'}`}></span>
                {worker.available ? 'Available' : 'On Job'}
                {liveStatus[worker.id] && <span className="text-xs text-cooperative-600 ml-2">({liveStatus[worker.id]})</span>}
              </div>
            </div>
            <div className="flex gap-2">
              <Link to={`/worker/${worker.id}`} className="flex-1 text-center bg-cooperative-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-cooperative-700 transition">
                View Profile
              </Link>
              <Link to={`/book?service=${worker.skill}`} className="flex-1 text-center border border-cooperative-600 text-cooperative-700 py-2 rounded-xl text-sm font-medium hover:bg-cooperative-50 transition">
                Book
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
