import { useApp } from '../context/AppContext'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Ratings() {
  const { ratings, workers } = useApp()

  const getWorker = (workerId) => workers.find(w => w.id === workerId)

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-navy-900 mb-3">Ratings & Feedback</h1>
        <p className="text-navy-600">Transparent reviews from customers to help you choose the best cooperative workers.</p>
      </div>

      <div className="grid gap-6">
        {ratings.map(r => {
          const worker = getWorker(r.workerId)
          return (
            <div key={r.id} className="bg-white rounded-2xl border border-navy-200 p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {worker && <img src={worker.image} alt={worker.name} className="w-12 h-12 rounded-xl object-cover" />}
                  <div>
                    <p className="font-semibold text-navy-900">{worker ? worker.name : 'Unknown Worker'}</p>
                    <p className="text-sm text-navy-500">{worker ? worker.skill : ''} • {r.customer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < r.rating ? 'text-amber-400 fill-amber-400' : 'text-navy-300'} />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-navy-700">{r.comment}</p>
              <p className="mt-2 text-xs text-navy-400">{r.date}</p>
            </div>
          )
        })}
      </div>

      <div className="bg-white rounded-2xl border border-navy-200 p-8 text-center">
        <h3 className="text-xl font-semibold text-navy-900 mb-2">Worker of the Month</h3>
        <div className="flex items-center justify-center gap-4 mt-4">
          <img src="https://i.pravatar.cc/150?u=2" alt="Worker" className="w-20 h-20 rounded-2xl object-cover" />
          <div className="text-left">
            <p className="font-bold text-navy-900 text-lg">Suresh Patel</p>
            <p className="text-navy-600">Plumber • 4.9 Rating • 210 jobs</p>
            <div className="flex items-center gap-1 mt-1 text-amber-500">
              <Star size={16} fill="currentColor" />
              <span className="font-medium">Top Rated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
