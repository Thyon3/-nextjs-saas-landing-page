import Breadcrumb from '@/components/Common/Breadcrumb'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | NextLanding',
  description: 'Learn how we collect, use, and protect your personal information',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb pageName='Privacy Policy' />
      <PrivacyPolicy />
    </>
  )
}
