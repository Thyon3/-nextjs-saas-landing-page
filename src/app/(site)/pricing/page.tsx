import Breadcrumb from '@/components/Common/Breadcrumb'
import PricingPage from '@/components/PricingPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Plans | NextLanding',
  description: 'Choose the perfect plan for your business needs',
}

export default function Pricing() {
  return (
    <>
      <Breadcrumb pageName='Pricing Plans' />
      <PricingPage />
    </>
  )
}
