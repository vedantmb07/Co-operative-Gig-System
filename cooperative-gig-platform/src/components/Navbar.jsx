import { Link, useLocation } from 'react-router-dom'
import { Home, Users, CalendarCheck, LayoutDashboard, Star, Wrench, Globe } from 'lucide-react'
import Logo from './Logo'
import { useLang } from '../context/LangContext'

const navItems = [
  { path: '/', label: 'home', icon: Home },
  { path: '/services', label: 'services', icon: Wrench },
  { path: '/book', label: 'bookService', icon: CalendarCheck },
  { path: '/workers', label: 'workers', icon: Users },
  { path: '/ratings', label: 'ratings', icon: Star },
  { path: '/admin', label: 'adminDash', icon: LayoutDashboard },
]

export default function Navbar() {
  const location = useLocation()
  const { lang, setLang, t } = useLang()

  return (
    <nav className="bg-white border-b border-navy-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <Logo size={32} />
            <span className="font-bold text-xl text-navy-900">CoopGig</span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cooperative-50 text-cooperative-700'
                      : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'
                  }`}
                >
                  <Icon size={16} />
                  {t(item.label)}
                </Link>
              )
            })}
          </div>
          <button
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-navy-600 hover:bg-navy-50 transition"
          >
            <Globe size={16} />
            {lang === 'en' ? 'हिंदी' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  )
}
