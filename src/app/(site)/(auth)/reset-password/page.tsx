import ResetPassword from '@/components/Auth/ResetPassword'
import Breadcrumb from '@/components/Common/Breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset Password | NextLanding',
  description: 'Create a new password for your account',
}

export default function ResetPasswordPage() {
  return (
    <>
      <Breadcrumb pageName='Reset Password' />
      <ResetPassword />
    </>
  )
}
