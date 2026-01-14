import Breadcrumb from '@/components/Common/Breadcrumb'
import BlogSingle from '@/components/Blog/BlogSingle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Post | NextLanding',
  description: 'Read our blog post',
}

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogSinglePage({ params }: Props) {
  const { slug } = await params
  
  return (
    <>
      <Breadcrumb pageName='Blog Post' />
      <BlogSingle slug={slug} />
    </>
  )
}
