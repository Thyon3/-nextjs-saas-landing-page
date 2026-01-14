import Breadcrumb from '@/components/Common/Breadcrumb'
import FeaturesPage from '@/components/FeaturesPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features | NextLanding',
  description: 'Explore all the powerful features of our payment platform',
}

export default function Features() {
  return (
    <>
      <Breadcrumb pageName='Features' />
      <FeaturesPage />
    </>
  )
}
