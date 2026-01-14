import Breadcrumb from '@/components/Common/Breadcrumb'
import About from '@/components/About'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | NextLanding',
  description: 'Learn more about our company, mission, and team',
}

export default function AboutPage() {
  return (
    <>
      <Breadcrumb pageName='About Us' />
      <About />
    </>
  )
}
