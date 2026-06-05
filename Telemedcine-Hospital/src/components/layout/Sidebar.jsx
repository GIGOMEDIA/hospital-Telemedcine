import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  MonitorPlay, ChevronDown,
  CalendarCheck, UserRound, Stethoscope, CalendarDays,
  Receipt, Boxes, BarChart3, Headphones,
} from 'lucide-react'

const CLINIC_LINKS = [
  { to: '/appointments', label: 'Appointments', icon: CalendarCheck },
  { to: '/patients',     label: 'Patients',     icon: UserRound },
  { to: '/ehr',          label: 'EHR',           icon: Stethoscope },
  { to: '/events',       label: 'Events',        icon: CalendarDays },
]

const FINANCE_LINKS = [
  { to: '/billings',        label: 'Billings',            icon: Receipt },
  { to: '/asset-inventory', label: 'Asset and Inventory', icon: Boxes },
]

const BOTTOM_LINKS = [
  { to: '/usage-report', label: 'Usage Report', icon: BarChart3 },
  { to: '/support',      label: 'Support',      icon: Headphones },
]

const NavItem = ({ to, label, icon: Icon, showLabels }) => (
  <NavLink
    to={to}
    title={!showLabels ? label : undefined}
    className={({ isActive }) =>
      `flex items-center w-full text-sm cursor-pointer transition-all duration-300 ease-in-out border-l-4 ${
        showLabels ? 'gap-3 px-4 py-2.5' : 'justify-center px-0 py-3'
      } ${
        isActive
          ? 'border-[#10AD69] bg-[#f0fdf6] text-[#10AD69] font-semibold'
          : 'border-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-800'
      }`
    }
  >
    <Icon size={18} className="shrink-0" />
    {showLabels && <span className="truncate">{label}</span>}
  </NavLink>
)

const Sidebar = ({ isOpen: sidebarOpen }) => {
  const [navExpanded, setNavExpanded] = useState(true)

  // showLabels: true when sidebar is open (both desktop and mobile off-canvas)
  const showLabels = sidebarOpen

  return (
    <aside
      className={`
        fixed left-0 top-16 h-[calc(100vh-4rem)]
        bg-white border-r border-gray-200
        flex flex-col overflow-x-hidden
        transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'w-[260px] z-50' : 'w-14 z-30'}
      `}
    >
      {/* 1. AI DIAGNOSIS CARD */}
      <Link
        to="/ai-diagnosis"
        title={!showLabels ? 'AI Diagnosis' : undefined}
        className={`flex items-center gap-3 my-4 p-2 rounded-xl bg-rose-100 hover:bg-rose-200 shrink-0 overflow-hidden transition-all duration-300 cursor-pointer ${
          showLabels ? 'mx-3 justify-start' : 'mx-auto w-10 justify-center'
        }`}
      >
        <MonitorPlay size={20} className="text-rose-500 shrink-0" />
        {showLabels && <span className="font-bold text-gray-800 text-sm truncate">AI Diagnosis</span>}
      </Link>

      {/* SCROLLABLE NAV */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">

        {/* 2. Dashboard heading — Link + chevron toggle */}
        {showLabels ? (
          <div className="flex items-center justify-between px-4 py-2">
            <Link
              to="/dashboard"
              className="font-semibold text-gray-800 text-base hover:text-[#10AD69] transition-colors"
            >
              Dashboard
            </Link>
            <button
              onClick={() => setNavExpanded(e => !e)}
              className="text-gray-500 hover:text-gray-700 p-0.5 rounded cursor-pointer shrink-0"
            >
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${navExpanded ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
          </div>
        ) : (
          /* Icon-strip: show dashboard icon centered */
          <NavLink
            to="/dashboard"
            title="Dashboard"
            className={({ isActive }) =>
              `flex justify-center w-full py-3 text-sm cursor-pointer border-l-4 transition-all duration-300 ${
                isActive
                  ? 'border-[#10AD69] bg-[#f0fdf6] text-[#10AD69]'
                  : 'border-transparent text-gray-500 hover:bg-gray-100'
              }`
            }
          >
            <CalendarCheck size={18} className="shrink-0" />
          </NavLink>
        )}

        {/* 3+4. CLINIC + FINANCE — collapsible via chevron, always shown on icon strip */}
        {(navExpanded || !showLabels) && (
          <>
            {/* CLINIC label */}
            {showLabels && (
              <div className="flex items-center gap-2 px-4 pt-3 pb-1">
                <span className="w-2 h-2 rounded-full bg-[#10AD69] shrink-0" />
                <span className="text-xs uppercase text-gray-400 font-semibold tracking-wider">Clinic</span>
              </div>
            )}
            {CLINIC_LINKS.map(link => (
              <NavItem key={link.to} {...link} showLabels={showLabels} />
            ))}

            {/* FINANCE label */}
            {showLabels && (
              <div className="px-4 pt-4 pb-1">
                <span className="text-xs uppercase text-gray-400 font-semibold tracking-wider">Finance</span>
              </div>
            )}
            {FINANCE_LINKS.map(link => (
              <NavItem key={link.to} {...link} showLabels={showLabels} />
            ))}
          </>
        )}

        {/* 5. Divider */}
        <hr className="border-t border-gray-200 mx-3 my-2" />

        {/* 6. Bottom nav items */}
        {BOTTOM_LINKS.map(link => (
          <NavItem key={link.to} {...link} showLabels={showLabels} />
        ))}
      </div>

      {/* 7. PROMOTIONAL CARD — only when labels visible */}
      {showLabels && (
        <Link
          to="/appointments"
          className="mx-3 mb-1 rounded-xl overflow-hidden hover:shadow-md transition-shadow block shrink-0"
        >
          <div className="bg-[#FFF5F5] rounded-xl min-h-[110px] flex items-end justify-center px-3 pb-3">
            <div className="text-3xl">🩺👨‍⚕️👩‍⚕️</div>
          </div>
          <div className="px-3 pt-2 pb-1 bg-white">
            <p className="font-bold text-[#10AD69] text-sm truncate">Make an Appointment</p>
            <p className="text-xs text-[#10AD69] truncate">Book healthcare here →</p>
          </div>
        </Link>
      )}

      {/* 8. ADMIN label */}
      {showLabels && (
        <p className="text-xs text-gray-400 text-center py-3 shrink-0">ADMIN</p>
      )}
    </aside>
  )
}

export default Sidebar
