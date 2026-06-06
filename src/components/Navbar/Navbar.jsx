import { useLocation } from 'react-router-dom'
import { Bell } from 'lucide-react'

const pageTitles = {
  '/dashboard': 'Dashboard',
  '/appointments': 'Appointments',
  '/ehr': 'Electronic Health Records',
  '/analytics': 'Analytics',
  '/history': 'History',
}

const Navbar = () => {
  const { pathname } = useLocation()
  const title = pageTitles[pathname] ?? 'Dashboard'

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
      <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
      <div className="flex items-center gap-4">
        <button className="relative text-gray-500 hover:text-gray-700">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-medium">
            DR
          </div>
          <span className="text-sm font-medium text-gray-700">Dr. Reynolds</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
