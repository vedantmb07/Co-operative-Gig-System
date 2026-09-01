import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { LangProvider } from './context/LangContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import WorkerRegister from './pages/WorkerRegister'
import CustomerBooking from './pages/CustomerBooking'
import AdminDashboard from './pages/AdminDashboard'
import WorkerProfile from './pages/WorkerProfile'
import Services from './pages/Services'
import Ratings from './pages/Ratings'
import Workers from './pages/Workers'

export default function App() {
  return (
    <AppProvider>
      <LangProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="register" element={<WorkerRegister />} />
              <Route path="book" element={<CustomerBooking />} />
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="worker/:id" element={<WorkerProfile />} />
              <Route path="services" element={<Services />} />
              <Route path="ratings" element={<Ratings />} />
              <Route path="workers" element={<Workers />} />
            </Route>
          </Routes>
        </Router>
      </LangProvider>
    </AppProvider>
  )
}
