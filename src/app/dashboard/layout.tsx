import { ReactNode } from 'react'

interface DashboardLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: {
    default: 'Dashboard',
    template: '%s | Dashboard',
  },
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      {children}
    </div>
  )
}
