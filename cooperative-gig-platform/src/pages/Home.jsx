import { Link } from 'react-router-dom'
import { Users, CalendarCheck, ShieldCheck, MapPin, TrendingUp } from 'lucide-react'
import { services } from '../data/mockData'

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-cooperative-500 to-cooperative-700 rounded-3xl text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Trusted Services from<br />Verified Cooperatives
        </h1>
        <p className="text-lg md:text-xl text-cooperative-100 mb-8 max-w-2xl mx-auto">
          Connect with skilled electricians, plumbers, caregivers, and more through our cooperative-owned marketplace. Fair wages, verified workers, community-first.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/book" className="bg-white text-cooperative-700 px-8 py-3 rounded-xl font-semibold hover:bg-cooperative-50 transition shadow-lg">
            Book a Service
          </Link>
          <Link to="/services" className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
            Explore Services
          </Link>
        </div>
      </section>

      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-navy-900 mb-3">How It Works</h2>
          <p className="text-navy-600 max-w-xl mx-auto">A simple, transparent process connecting you with verified cooperative workers.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: 'Choose Service', desc: 'Browse verified professionals across 10+ categories.' },
            { icon: CalendarCheck, title: 'Book Instantly', desc: 'Select a time slot that works for you with real-time availability.' },
            { icon: ShieldCheck, title: 'Get It Done', desc: 'Worker arrives, completes the job, and you pay securely.' },
          ].map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-navy-200 text-center hover:shadow-md transition">
              <div className="w-14 h-14 bg-cooperative-100 text-cooperative-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <step.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">{step.title}</h3>
              <p className="text-navy-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-navy-900 mb-3">Popular Services</h2>
          <p className="text-navy-600">Top-rated professionals ready to help.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 8).map(service => (
            <Link key={service.id} to={`/book?service=${service.name}`} className="bg-white p-6 rounded-2xl border border-navy-200 hover:border-cooperative-300 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-cooperative-50 text-cooperative-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cooperative-100 transition">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-semibold text-navy-900 mb-1">{service.name}</h3>
              <p className="text-sm text-navy-500 mb-3">{service.category}</p>
              <p className="text-cooperative-700 font-medium">From ₹{service.basePrice}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 md:p-12 border border-navy-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Real-Time Workforce Allocation</h2>
            <p className="text-navy-600 mb-6">Our AI-powered system matches you with the nearest available worker, ensuring faster response times and optimal resource utilization across cooperative federations.</p>
            <div className="flex items-center gap-2 text-cooperative-700 font-medium">
              <MapPin size={20} />
              <span>Geo-location based matching active in 50+ areas</span>
            </div>
          </div>
          <div className="bg-navy-50 rounded-2xl p-6 border border-navy-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-navy-900">Live Worker Availability</h3>
              <span className="flex items-center gap-1.5 text-sm text-cooperative-600">
                <span className="w-2 h-2 bg-cooperative-500 rounded-full animate-pulse-ring"></span>
                Live
              </span>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Ramesh Kumar', skill: 'Electrician', dist: '0.8 km', status: 'Available' },
                { name: 'Suresh Patel', skill: 'Plumber', dist: '1.2 km', status: 'On job' },
                { name: 'Anita Devi', skill: 'Helper', dist: '2.1 km', status: 'Available' },
              ].map((w, i) => (
                <div key={i} className="flex items-center justify-between bg-white p-3 rounded-xl border border-navy-200">
                  <div>
                    <p className="font-medium text-navy-900 text-sm">{w.name}</p>
                    <p className="text-xs text-navy-500">{w.skill} • {w.dist}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${w.status === 'Available' ? 'bg-cooperative-100 text-cooperative-700' : 'bg-navy-100 text-navy-600'}`}>
                    {w.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
