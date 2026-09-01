import { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    bookService: 'Book a Service',
    workerReg: 'Worker Registration',
    adminDash: 'Admin Dashboard',
    services: 'Services',
    workers: 'Workers',
    ratings: 'Ratings',
    home: 'Home',
    selectService: 'Select service',
    confirmBooking: 'Confirm Booking',
    payment: 'Payment',
    payNow: 'Pay Now',
    amount: 'Amount',
    processing: 'Processing...',
    success: 'Payment Successful!',
    bookingConfirmed: 'Booking confirmed successfully.',
    close: 'Close',
  },
  hi: {
    bookService: 'सेवा बुक करें',
    workerReg: 'कार्यकर्ता पंजीकरण',
    adminDash: 'प्रशासन डैशबोर्ड',
    services: 'सेवाएं',
    workers: 'कार्यकर्ता',
    ratings: 'रेटिंग',
    home: 'होम',
    selectService: 'सेवा चुनें',
    confirmBooking: 'बुकिंग पुष्टि करें',
    payment: 'भुगतान',
    payNow: 'अभी भुगतान करें',
    amount: 'राशि',
    processing: 'प्रोसेसिंग...',
    success: 'भुगतान सफल!',
    bookingConfirmed: 'बुकिंग सफलतापूर्वक की गई।',
    close: 'बंद करें',
  }
}

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')

  const t = (key) => translations[lang]?.[key] || translations.en[key] || key

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LangContext)
  if (!context) throw new Error('useLang must be used within LangProvider')
  return context
}
