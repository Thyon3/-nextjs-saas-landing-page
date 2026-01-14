import Breadcrumb from '@/components/Common/Breadcrumb'
import BlogSingle from '@/components/Blog/BlogSingle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Post | NextLanding',
  description: 'Read our blog post',
}

interface Props {
  params: {
    slug: string
  }
}

export default function BlogSinglePage({ params }: Props) {
  return (
    <>
      <Breadcrumb pageName='Blog Post' />
      <BlogSingle slug={params.slug} />
    </>
  )
}
