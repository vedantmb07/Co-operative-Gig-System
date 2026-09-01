import { useApp } from '../context/AppContext'
import { TrendingUp, Users, CheckCircle, Clock, AlertCircle } from 'lucide-react'

export default function AdminDashboard() {
  const { bookings, workers, demandForecast } = useApp()

  const stats = [
    { label: 'Total Bookings', value: bookings.length, icon: Clock, color: 'bg-blue-100 text-blue-700' },
    { label: 'Active Workers', value: workers.filter(w => w.available).length, icon: Users, color: 'bg-cooperative-100 text-cooperative-700' },
    { label: 'Completed Today', value: bookings.filter(b => b.status === 'completed').length, icon: CheckCircle, color: 'bg-emerald-100 text-emerald-700' },
    { label: 'Pending', value: bookings.filter(b => b.status === 'pending').length, icon: AlertCircle, color: 'bg-amber-100 text-amber-700' },
  ]

  const maxVal = Math.max(...demandForecast.map(d => Math.max(d.electricians, d.plumbers, d.cleaners)))

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-navy-900 mb-2">Federation Admin Dashboard</h1>
        <p className="text-navy-600">Monitor workforce allocation, bookings, and cooperative performance.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-navy-200 shadow-sm">
            <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
              <stat.icon size={20} />
            </div>
            <p className="text-2xl font-bold text-navy-900">{stat.value}</p>
            <p className="text-sm text-navy-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-navy-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="text-cooperative-600" size={20} />
            <h3 className="font-semibold text-navy-900">AI Demand Forecast</h3>
          </div>
          <div className="space-y-4">
            {demandForecast.map(day => (
              <div key={day.day} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-navy-700">{day.day}</span>
                  <span className="text-navy-500">{day.electricians + day.plumbers + day.cleaners} jobs expected</span>
                </div>
                <div className="flex gap-1 h-2">
                  <div className="bg-blue-400 rounded-full" style={{ width: `${(day.electricians / maxVal) * 100}%` }} title="Electricians" />
                  <div className="bg-cooperative-500 rounded-full" style={{ width: `${(day.plumbers / maxVal) * 100}%` }} title="Plumbers" />
                  <div className="bg-amber-400 rounded-full" style={{ width: `${(day.cleaners / maxVal) * 100}%` }} title="Cleaners" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4 text-xs text-navy-600">
            <span className="flex items-center gap-1"><span className="w-3 h-2 bg-blue-400 rounded-full inline-block"></span> Electricians</span>
            <span className="flex items-center gap-1"><span className="w-3 h-2 bg-cooperative-500 rounded-full inline-block"></span> Plumbers</span>
            <span className="flex items-center gap-1"><span className="w-3 h-2 bg-amber-400 rounded-full inline-block"></span> Cleaners</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-navy-200 p-6">
          <h3 className="font-semibold text-navy-900 mb-6">Recent Bookings</h3>
          <div className="space-y-3">
            {bookings.slice(0, 6).map(booking => (
              <div key={booking.id} className="flex items-center justify-between p-3 rounded-xl border border-navy-200 hover:border-cooperative-300 transition">
                <div>
                  <p className="font-medium text-navy-900 text-sm">{booking.service}</p>
                  <p className="text-xs text-navy-500">{booking.customer} • {booking.date}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  booking.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                  booking.status === 'confirmed' ? 'bg-blue-100 text-blue-700' :
                  booking.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                  'bg-navy-100 text-navy-700'
                }`}>
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-navy-200 p-6">
        <h3 className="font-semibold text-navy-900 mb-6">Worker Welfare Overview</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-cooperative-50 rounded-xl">
            <p className="text-2xl font-bold text-cooperative-700">{workers.length}</p>
            <p className="text-sm text-navy-600">Registered Workers</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <p className="text-2xl font-bold text-blue-700">{workers.filter(w => w.verified).length}</p>
            <p className="text-sm text-navy-600">Verified Workers</p>
          </div>
          <div className="text-center p-4 bg-emerald-50 rounded-xl">
            <p className="text-2xl font-bold text-emerald-700">98%</p>
            <p className="text-sm text-navy-600">Insurance Coverage</p>
          </div>
        </div>
      </div>
    </div>
  )
}
