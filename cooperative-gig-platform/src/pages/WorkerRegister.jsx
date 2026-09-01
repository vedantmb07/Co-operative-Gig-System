import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserPlus, Shield, Award, MapPin, Phone } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function WorkerRegister() {
  const navigate = useNavigate()
  const { addBooking } = useApp()
  const [form, setForm] = useState({
    name: '', skill: '', experience: '', cooperative: '', phone: '', location: '',
    certifications: '', aadhaar: '', pan: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addBooking({ ...form, service: 'Worker Registration', date: new Date().toISOString().split('T')[0], time: 'Pending', customer: form.name, address: form.location })
    alert('Registration submitted for verification!')
    navigate('/workers')
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-cooperative-100 text-cooperative-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <UserPlus size={32} />
        </div>
        <h1 className="text-3xl font-bold text-navy-900 mb-2">Worker Registration</h1>
        <p className="text-navy-600">Join our cooperative network. Get verified and start receiving bookings.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-navy-200 p-8 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">Full Name</label>
            <input required type="text" className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">Phone Number</label>
            <input required type="tel" className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">Primary Skill</label>
            <select required className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" value={form.skill} onChange={e => setForm({...form, skill: e.target.value})}>
              <option value="">Select skill</option>
              <option>Electrician</option><option>Plumber</option><option>Carpenter</option><option>Painter</option><option>Domestic Helper</option><option>Caregiver</option><option>Driver</option><option>Gardener</option><option>Cleaner</option><option>Technician</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">Years of Experience</label>
            <input required type="number" min="0" className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" value={form.experience} onChange={e => setForm({...form, experience: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">Cooperative Society</label>
            <input required type="text" className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" value={form.cooperative} onChange={e => setForm({...form, cooperative: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">Location / Area</label>
            <input required type="text" className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" value={form.location} onChange={e => setForm({...form, location: e.target.value})} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-navy-700 mb-1">Certifications (comma separated)</label>
            <input type="text" placeholder="e.g. ITI Electrician, Wireman License" className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" value={form.certifications} onChange={e => setForm({...form, certifications: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">Aadhaar Number</label>
            <input type="text" className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" value={form.aadhaar} onChange={e => setForm({...form, aadhaar: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">PAN Number</label>
            <input type="text" className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" value={form.pan} onChange={e => setForm({...form, pan: e.target.value})} />
          </div>
        </div>

        <div className="bg-cooperative-50 border border-cooperative-200 rounded-xl p-4 flex items-start gap-3">
          <Shield className="text-cooperative-600 mt-0.5" size={20} />
          <div className="text-sm text-cooperative-800">
            <p className="font-medium">Verification Process</p>
            <p className="text-cooperative-700">Your details will be verified by the cooperative federation within 24-48 hours. You will receive a digital worker ID upon approval.</p>
          </div>
        </div>

        <button type="submit" className="w-full bg-cooperative-600 text-white py-3 rounded-xl font-semibold hover:bg-cooperative-700 transition shadow-md">
          Submit Registration
        </button>
      </form>
    </div>
  )
}
