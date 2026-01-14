import Breadcrumb from '@/components/Common/Breadcrumb'
import Dashboard from '@/components/Dashboard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | NextLanding',
  description: 'User dashboard and profile management',
}

export default function DashboardPage() {
  return (
    <>
      <Breadcrumb pageName='Dashboard' />
      <Dashboard />
    </>
  )
}
