import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, MapPin, CheckCircle } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { useLang } from '../context/LangContext'
import { services } from '../data/mockData'
import PaymentModal from '../components/PaymentModal'

export default function CustomerBooking() {
  const navigate = useNavigate()
  const { addBooking, workers } = useApp()
  const { t } = useLang()
  const [form, setForm] = useState({
    name: '', phone: '', service: '', date: '', time: '', address: '', urgency: 'normal'
  })
  const [showPayment, setShowPayment] = useState(false)
  const [bookingId, setBookingId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const service = services.find(s => s.name === form.service)
    const availableWorker = workers.find(w => w.skill.toLowerCase() === form.service.toLowerCase() && w.available)
    const newBooking = addBooking({
      ...form,
      workerId: availableWorker ? availableWorker.id : null,
      customer: form.name
    })
    setBookingId(newBooking.id)
    setShowPayment(true)
  }

  const handlePaymentSuccess = () => {
    alert(t('bookingConfirmed'))
    navigate('/')
  }

  const selectedService = services.find(s => s.name === form.service)
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-cooperative-100 text-cooperative-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Calendar size={32} />
        </div>
        <h1 className="text-3xl font-bold text-navy-900 mb-2">{t('bookService')}</h1>
        <p className="text-navy-600">Fill in the details and we will connect you with the nearest verified worker.</p>
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
            <label className="block text-sm font-medium text-navy-700 mb-1">{t('selectService')}</label>
            <select required className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
              <option value="">Select service</option>
              {services.map(s => <option key={s.id} value={s.name}>{s.name} - ₹{s.basePrice}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">Urgency</label>
            <select className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" value={form.urgency} onChange={e => setForm({...form, urgency: e.target.value})}>
              <option value="normal">Normal (within 24 hrs)</option>
              <option value="urgent">Urgent (within 4 hrs)</option>
              <option value="emergency">Emergency (within 1 hr)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">Preferred Date</label>
            <input required type="date" min={today} className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">Preferred Time</label>
            <input required type="time" className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" value={form.time} onChange={e => setForm({...form, time: e.target.value})} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-navy-700 mb-1">Service Address</label>
            <input required type="text" placeholder="Enter full address" className="w-full rounded-lg border border-navy-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cooperative-500" value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
          </div>
        </div>

        <div className="bg-navy-50 border border-navy-200 rounded-xl p-4 flex items-start gap-3">
          <MapPin className="text-navy-500 mt-0.5" size={20} />
          <div className="text-sm text-navy-600">
            <p className="font-medium text-navy-800">Geo-location Matching</p>
            <p>We will assign the nearest available cooperative worker based on your location.</p>
          </div>
        </div>

        <button type="submit" className="w-full bg-cooperative-600 text-white py-3 rounded-xl font-semibold hover:bg-cooperative-700 transition shadow-md flex items-center justify-center gap-2">
          <CheckCircle size={20} />
          {t('confirmBooking')}
        </button>
      </form>

      <PaymentModal
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        amount={selectedService ? selectedService.basePrice : 0}
        onSuccess={handlePaymentSuccess}
      />
    </div>
  )
}
