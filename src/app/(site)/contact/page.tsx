import Breadcrumb from '@/components/Common/Breadcrumb'
import Contact from '@/components/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | NextLanding',
  description: 'Get in touch with our team. We\'re here to help!',
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumb pageName='Contact Us' />
      <Contact />
    </>
  )
}
