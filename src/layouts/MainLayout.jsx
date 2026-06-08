import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'

const MainLayout = () => {
  const { pathname } = useLocation()
  const hideNavbar = pathname === '/appointments'

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        {!hideNavbar && <Navbar />}
        <main className={`flex-1 overflow-y-auto ${hideNavbar ? 'p-0' : 'p-6'}`}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
