import { createContext, useContext, useState, useEffect } from 'react'
import { initialBookings, workers, services, ratings, demandForecast } from '../data/mockData'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [bookings, setBookings] = useState(initialBookings)
  const [notification, setNotification] = useState(null)
  const [liveStatus, setLiveStatus] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      const workerId = Math.floor(Math.random() * workers.length) + 1
      const statuses = ['En route', 'Arriving soon', 'On-site', 'Break']
      const newStatus = statuses[Math.floor(Math.random() * statuses.length)]
      setLiveStatus(prev => ({ ...prev, [workerId]: newStatus }))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const addBooking = (booking) => {
    const newBooking = { ...booking, id: Date.now(), status: 'pending' }
    setBookings(prev => [newBooking, ...prev])
    showNotification(`Booking confirmed for ${booking.service} on ${booking.date}`)
    return newBooking
  }

  const updateBookingStatus = (id, status) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b))
    showNotification(`Booking #${id} updated to ${status}`)
  }

  const showNotification = (msg) => {
    setNotification(msg)
    setTimeout(() => setNotification(null), 3000)
  }

  return (
    <AppContext.Provider value={{ bookings, addBooking, updateBookingStatus, notification, liveStatus, workers, services, ratings, demandForecast }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
