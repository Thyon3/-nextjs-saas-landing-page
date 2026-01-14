import ResetPassword from '@/components/Auth/ResetPassword'
import Breadcrumb from '@/components/Common/Breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset Password | NextLanding',
  description: 'Create a new password for your account',
}

interface Props {
  searchParams: Promise<{
    token?: string
  }>
}

export default async function ResetPasswordPage({ searchParams }: Props) {
  const params = await searchParams
  const token = params.token || 'default-token'
  
  return (
    <>
      <Breadcrumb pageName='Reset Password' />
      <ResetPassword token={token} />
    </>
  )
}
