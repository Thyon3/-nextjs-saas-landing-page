import Breadcrumb from '@/components/Common/Breadcrumb'
import Terms from '@/components/Terms'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | NextLanding',
  description: 'Read our terms of service and conditions for using our platform',
}

export default function TermsPage() {
  return (
    <>
      <Breadcrumb pageName='Terms & Conditions' />
      <Terms />
    </>
  )
}
