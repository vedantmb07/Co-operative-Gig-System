import { useParams } from 'react-router-dom'
import { workers, ratings } from '../data/mockData'
import { Star, MapPin, Phone, Award, Briefcase, ShieldCheck } from 'lucide-react'

export default function WorkerProfile() {
  const { id } = useParams()
  const worker = workers.find(w => w.id === parseInt(id))
  const workerRatings = ratings.filter(r => r.workerId === parseInt(id))

  if (!worker) {
    return <div className="text-center py-20 text-navy-600">Worker not found.</div>
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-2xl border border-navy-200 p-8 flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <img src={worker.image} alt={worker.name} className="w-32 h-32 rounded-2xl object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between flex-wrap gap-2">
            <div>
              <h1 className="text-3xl font-bold text-navy-900">{worker.name}</h1>
              <p className="text-cooperative-700 font-medium text-lg">{worker.skill}</p>
            </div>
            <span className="flex items-center gap-1 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
              <Star size={16} fill="currentColor" />
              {worker.rating} ({worker.jobs} jobs)
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3 text-navy-600">
              <MapPin size={18} className="text-cooperative-600" />
              <span>{worker.location}</span>
            </div>
            <div className="flex items-center gap-3 text-navy-600">
              <Briefcase size={18} className="text-cooperative-600" />
              <span>{worker.experience} years experience</span>
            </div>
            <div className="flex items-center gap-3 text-navy-600">
              <ShieldCheck size={18} className="text-cooperative-600" />
              <span>{worker.verified ? 'Verified Worker' : 'Pending Verification'}</span>
            </div>
            <div className="flex items-center gap-3 text-navy-600">
              <Award size={18} className="text-cooperative-600" />
              <span>{worker.cooperative}</span>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button className="bg-cooperative-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-cooperative-700 transition">
              Book Now
            </button>
            <button className="border border-navy-300 text-navy-700 px-6 py-2.5 rounded-xl font-medium hover:bg-navy-50 transition flex items-center gap-2">
              <Phone size={18} />
              Contact
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-navy-200 p-8">
        <h2 className="text-2xl font-bold text-navy-900 mb-6">Certifications & Skills</h2>
        <div className="flex flex-wrap gap-3">
          {['ITI Certified', 'Safety Training', 'First Aid', 'Cooperative Member', 'Background Verified'].map((cert, i) => (
            <span key={i} className="bg-cooperative-50 text-cooperative-800 border border-cooperative-200 px-4 py-2 rounded-full text-sm font-medium">
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-navy-200 p-8">
        <h2 className="text-2xl font-bold text-navy-900 mb-6">Reviews & Ratings</h2>
        {workerRatings.length === 0 ? (
          <p className="text-navy-500 text-center py-8">No reviews yet.</p>
        ) : (
          <div className="space-y-6">
            {workerRatings.map(r => (
              <div key={r.id} className="border-b border-navy-100 last:border-0 pb-6 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-navy-900">{r.customer}</p>
                  <span className="text-xs text-navy-500">{r.date}</span>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < r.rating ? 'text-amber-400 fill-amber-400' : 'text-navy-300'} />
                  ))}
                </div>
                <p className="text-navy-600">{r.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
