import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { useApp } from '../context/AppContext'

export default function Layout() {
  const { notification } = useApp()

  return (
    <div className="min-h-screen bg-navy-50">
      <Navbar />
      {notification && (
        <div className="bg-cooperative-600 text-white px-4 py-3 text-center text-sm font-medium animate-fade-in">
          {notification}
        </div>
      )}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <footer className="bg-navy-900 text-navy-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm"> Cooperative Gig Services Platform. Empowering workers, serving communities.</p>
        </div>
      </footer>
    </div>
  )
}
