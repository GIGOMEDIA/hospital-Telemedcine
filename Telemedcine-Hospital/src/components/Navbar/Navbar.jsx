import { useState, useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  Menu, X, Search, HelpCircle, Maximize2, Minimize2,
  Bell, Settings, CheckCircle, ChevronRight, Share2,
} from 'lucide-react'
import useGlobalSearch from '../../hooks/useGlobalSearch'

const NOTIFICATIONS = [
  { id: 1, title: 'New appointment booked', desc: 'Patient John D. scheduled for 3pm', time: '2 mins ago' },
  { id: 2, title: 'Lab results ready', desc: 'EHR updated for patient #1042', time: '15 mins ago' },
  { id: 3, title: 'Billing invoice generated', desc: 'Invoice #2041 is ready for review', time: '1 hr ago' },
  { id: 4, title: 'System maintenance', desc: 'Scheduled downtime Sunday 2–4am', time: '3 hrs ago' },
  { id: 5, title: 'New patient registered', desc: 'Welcome Sarah M. to the portal', time: '5 hrs ago' },
  { id: 6, title: 'Support ticket resolved', desc: 'Ticket #882 has been closed', time: 'Yesterday' },
]

const IconBtn = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="border border-gray-200 p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors shrink-0"
  >
    {children}
  </button>
)

const useOutsideClick = (ref, onClose) => {
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose() }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [ref, onClose])
}

const Navbar = ({ isOpen, onToggle }) => {
  const navigate = useNavigate()

  const [query, setQuery] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const searchRef = useRef(null)
  const mobileSearchRef = useRef(null)
  const results = useGlobalSearch(query)

  const [openPanel, setOpenPanel] = useState(null)
  const toggle = (panel) => setOpenPanel(p => p === panel ? null : panel)

  const [isFullscreen, setIsFullscreen] = useState(false)
  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])
  const handleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen()
    else document.exitFullscreen()
  }

  const helpRef    = useRef(null)
  const notifRef   = useRef(null)
  const profileRef = useRef(null)

  useOutsideClick(helpRef,         () => openPanel === 'help'    && setOpenPanel(null))
  useOutsideClick(notifRef,        () => openPanel === 'notif'   && setOpenPanel(null))
  useOutsideClick(profileRef,      () => openPanel === 'profile' && setOpenPanel(null))
  useOutsideClick(searchRef,       () => setSearchFocused(false))
  useOutsideClick(mobileSearchRef, () => { setMobileSearchOpen(false); setQuery('') })

  const handleSearchSelect = (path) => {
    navigate(path); setQuery(''); setSearchFocused(false); setMobileSearchOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setOpenPanel(null)
    navigate('/login', { replace: true })
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center z-40 overflow-x-hidden w-full max-w-[100vw]">

        {/* ── LOGO SECTION — matches sidebar width ── */}
        <Link
          to="/dashboard"
          className="flex items-center gap-2 px-4 w-[260px] min-w-[260px] h-full border-r border-gray-200 shrink-0"
        >
          <Share2 size={22} color="#10AD69" className="shrink-0" />
          <span className="text-lg font-bold whitespace-nowrap">
            <span className="text-gray-900">Medi</span>
            <span className="text-[#10AD69]">Care</span>
          </span>
        </Link>

        {/* ── CENTER — toggle + search ── */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 px-3 sm:px-4">
          {/* Menu toggle */}
          <button
            onClick={onToggle}
            className="p-2 rounded-md hover:bg-gray-100 cursor-pointer text-gray-600 transition-colors shrink-0"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop + tablet search */}
          <div ref={searchRef} className="relative hidden md:block flex-1 max-w-sm">
            <div className={`flex items-center gap-2 bg-[#f1f5f3] rounded-full px-4 py-2 w-full transition-all ${searchFocused ? 'ring-1 ring-[#10AD69]' : ''}`}>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                placeholder="Search for anything here..."
                className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 flex-1 min-w-0"
              />
              <Search size={16} color="#10AD69" className="shrink-0" />
            </div>
            {searchFocused && query.trim() && (
              <div className="absolute top-full mt-2 left-0 w-full min-w-[240px] bg-white rounded-xl shadow-lg border border-gray-100 z-30 overflow-x-hidden overflow-y-auto max-h-64">
                {results.length > 0 ? results.map(({ label, path }) => (
                  <button
                    key={path}
                    onMouseDown={() => handleSearchSelect(path)}
                    className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-left overflow-hidden"
                  >
                    <Search size={14} className="text-gray-400 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{label}</p>
                      <p className="text-xs text-gray-400 truncate">{path}</p>
                    </div>
                  </button>
                )) : (
                  <p className="text-sm text-gray-400 text-center py-4 px-2">
                    No results for &ldquo;{query}&rdquo;
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Mobile search icon */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 cursor-pointer text-gray-600 transition-colors shrink-0"
            onClick={() => setMobileSearchOpen(o => !o)}
          >
            <Search size={20} />
          </button>
        </div>

        {/* ── RIGHT ICONS ── */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0 pr-3 sm:pr-4">

          {/* Help — hidden on mobile */}
          <div ref={helpRef} className="relative hidden md:block">
            <IconBtn onClick={() => toggle('help')}>
              <HelpCircle size={18} color="#6B7280" />
            </IconBtn>
            {openPanel === 'help' && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-xl border border-gray-100 z-30 min-w-[170px] max-w-[calc(100vw-2rem)] py-1 overflow-hidden">
                <a
                  href="https://docs.example.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Documentation <ChevronRight size={14} />
                </a>
                <button
                  onClick={() => { navigate('/support'); setOpenPanel(null) }}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Contact Support <ChevronRight size={14} />
                </button>
              </div>
            )}
          </div>

          {/* Fullscreen — hidden on mobile */}
          <div className="hidden md:block">
            <IconBtn onClick={handleFullscreen}>
              {isFullscreen
                ? <Minimize2 size={18} color="#F59E0B" />
                : <Maximize2 size={18} color="#F59E0B" />}
            </IconBtn>
          </div>

          {/* Notifications */}
          <div ref={notifRef} className="relative">
            <div className="relative">
              <IconBtn onClick={() => toggle('notif')}>
                <Bell size={18} color="#10AD69" />
              </IconBtn>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center pointer-events-none">
                3
              </span>
            </div>
            {openPanel === 'notif' && (
              <div className="absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] max-w-[320px] max-h-96 bg-white rounded-2xl shadow-xl border border-gray-100 z-30 flex flex-col overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shrink-0">
                  <span className="font-bold text-gray-800 text-sm">Notifications</span>
                  <button className="text-xs text-[#10AD69] hover:underline cursor-pointer shrink-0">Mark all as read</button>
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-1">
                  {NOTIFICATIONS.map(({ id, title, desc, time }) => (
                    <div key={id} className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-[#f0fdf6] flex items-center justify-center shrink-0">
                        <CheckCircle size={15} color="#10AD69" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate">{title}</p>
                        <p className="text-xs text-gray-500 truncate">{desc}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => { navigate('/notifications'); setOpenPanel(null) }}
                  className="text-xs text-[#10AD69] text-center py-3 hover:underline cursor-pointer border-t border-gray-100 shrink-0"
                >
                  View all notifications
                </button>
              </div>
            )}
          </div>

          {/* Settings */}
          <IconBtn onClick={() => navigate('/settings')}>
            <Settings size={18} color="#EF4444" />
          </IconBtn>

          {/* Profile */}
          <div ref={profileRef} className="relative">
            <button
              onClick={() => toggle('profile')}
              className="flex items-center gap-2 pl-1 sm:pl-2 cursor-pointer hover:bg-gray-50 rounded-xl py-1 pr-1 sm:pr-2 transition-colors"
            >
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-800 leading-tight whitespace-nowrap">Ade Josephine</p>
                <p className="text-[10px] uppercase text-gray-400 tracking-wide">Admin</p>
              </div>
              <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                className="w-9 h-9 rounded-full object-cover border-2 border-gray-200 shrink-0"
              />
            </button>
            {openPanel === 'profile' && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-xl border border-gray-100 z-30 min-w-[180px] max-w-[calc(100vw-2rem)] py-1 overflow-hidden">
                <button
                  onClick={() => { navigate('/profile'); setOpenPanel(null) }}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  My Profile <ChevronRight size={14} />
                </button>
                <button
                  onClick={() => { navigate('/settings'); setOpenPanel(null) }}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Account Settings <ChevronRight size={14} />
                </button>
                <hr className="border-gray-100 my-1" />
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2.5 text-sm text-red-500 hover:bg-gray-50 cursor-pointer text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

        </div>
      </header>

      {/* Mobile search overlay */}
      {mobileSearchOpen && (
        <div
          ref={mobileSearchRef}
          className="fixed top-16 left-0 w-full max-w-[100vw] bg-white shadow-md px-4 py-3 z-40 overflow-x-hidden md:hidden"
        >
          <div className={`flex items-center gap-2 bg-[#f1f5f3] rounded-full px-4 py-2 w-full ${query ? 'ring-1 ring-[#10AD69]' : ''}`}>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search for anything here..."
              autoFocus
              className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 flex-1 min-w-0"
            />
            <Search size={16} color="#10AD69" className="shrink-0" />
          </div>
          {query.trim() && (
            <div className="mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-x-hidden overflow-y-auto max-h-60">
              {results.length > 0 ? results.map(({ label, path }) => (
                <button
                  key={path}
                  onMouseDown={() => handleSearchSelect(path)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-left overflow-hidden"
                >
                  <Search size={14} className="text-gray-400 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{label}</p>
                    <p className="text-xs text-gray-400 truncate">{path}</p>
                  </div>
                </button>
              )) : (
                <p className="text-sm text-gray-400 text-center py-4 px-2">
                  No results for &ldquo;{query}&rdquo;
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Navbar
