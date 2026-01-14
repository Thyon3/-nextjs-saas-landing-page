import Breadcrumb from '@/components/Common/Breadcrumb'
import BlogList from '@/components/Blog/BlogList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | NextLanding',
  description: 'Read our latest articles, tips, and industry insights',
}

export default function BlogPage() {
  return (
    <>
      <Breadcrumb pageName='Blog' />
      <BlogList />
    </>
  )
}
