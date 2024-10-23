import { ReactNode } from 'react'
import NavBar from './components/NavBar'

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-accent/5 min-h-screen">
      <NavBar />
      <div className="container py-6">{children}</div>
    </div>
  )
}

export default DashboardLayout
