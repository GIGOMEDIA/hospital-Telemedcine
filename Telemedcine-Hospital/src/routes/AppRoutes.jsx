import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import AuthGuard from '../guards/AuthGuard'
import Login from '../pages/LoginPage'
import Dashboard from '../pages/Dashboard/Dashboard'
import Appointments from '../pages/Appointments/Appointments'
import EHR from '../pages/EHR/EHR'
import Analytics from '../pages/Analytics/Analytics'
import History from '../pages/History/History'

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      element={
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      }
    >
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/ehr" element={<EHR />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/history" element={<History />} />
    </Route>
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
  </Routes>
)

export default AppRoutes
