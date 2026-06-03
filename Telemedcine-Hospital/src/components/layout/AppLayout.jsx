import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from '../Navbar/Navbar'

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(() => window.innerWidth >= 768)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const handler = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // when crossing into desktop, open the sidebar
      if (!mobile) setIsOpen(true)
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  // sidebar width: 260px when open, 56px (w-14) when collapsed
  const sidebarWidth = isOpen ? 'ml-[260px]' : 'ml-14'

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isOpen={isOpen} onToggle={() => setIsOpen(o => !o)} />

      {/* Backdrop — mobile only when sidebar open as off-canvas */}
      {isMobile && isOpen && (
        <div
          className="fixed top-16 inset-x-0 bottom-0 bg-black/40 z-[45]"
          onClick={() => setIsOpen(false)}
        />
      )}

      <Sidebar isOpen={isOpen} />

      <main
        className={`pt-16 min-h-screen overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out ${
          isMobile ? 'ml-14' : sidebarWidth
        }`}
      >
        <div className="p-4 sm:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AppLayout
