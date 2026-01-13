'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10 Tips to Optimize Your Payment Processing',
    excerpt:
      'Learn how to reduce transaction fees, improve checkout speed, and increase conversion rates with these proven strategies.',
    author: 'John Smith',
    date: 'Jan 10, 2026',
    readTime: '5 min read',
    category: 'Tips & Tricks',
    image: '/images/business/business.png',
  },
  {
    id: 2,
    title: 'Understanding PCI DSS Compliance',
    excerpt:
      'A comprehensive guide to payment security standards and how to ensure your business stays compliant with industry regulations.',
    author: 'Sarah Williams',
    date: 'Jan 08, 2026',
    readTime: '8 min read',
    category: 'Security',
    image: '/images/payment/payment.png',
  },
  {
    id: 3,
    title: 'The Future of Digital Payments in 2026',
    excerpt:
      'Explore emerging trends in fintech, from cryptocurrency integration to AI-powered fraud detection and beyond.',
    author: 'Michael Chen',
    date: 'Jan 05, 2026',
    readTime: '6 min read',
    category: 'Industry News',
    image: '/images/hero/banner.png',
  },
]

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className='bg-white rounded-2xl overflow-hidden shadow-featureShadow hover:shadow-xl transition-all duration-300 group h-full flex flex-col'>
      <div className='relative h-56 overflow-hidden'>
        <Image
          src={post.image}
          alt={post.title}
          width={600}
          height={400}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />
        <div className='absolute top-4 left-4'>
          <span className='bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold'>
            {post.category}
          </span>
        </div>
      </div>

      <div className='p-6 flex flex-col flex-grow'>
        <div className='flex items-center gap-4 text-sm text-black/60 mb-4'>
          <div className='flex items-center gap-2'>
            <Icon icon='tabler:calendar' className='text-lg' />
            <span>{post.date}</span>
          </div>
          <div className='flex items-center gap-2'>
            <Icon icon='tabler:clock' className='text-lg' />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className='text-xl sm:text-2xl font-semibold text-midnight_text mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2'>
          {post.title}
        </h3>

        <p className='text-base text-black/70 mb-6 line-clamp-3 flex-grow'>
          {post.excerpt}
        </p>

        <div className='flex items-center justify-between pt-4 border-t border-black/10'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
              <Icon icon='tabler:user' className='text-xl text-primary' />
            </div>
            <span className='text-sm font-medium text-black/80'>
              {post.author}
            </span>
          </div>
          <Link
            href='#'
            className='text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300'>
            Read More
            <Icon icon='tabler:arrow-right' className='text-xl' />
          </Link>
        </div>
      </div>
    </article>
  )
}

const Blog = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-white to-header'>
      <div className='container'>
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4'>
            Blog
          </span>
          <h2 className='text-4xl sm:text-5xl font-semibold text-midnight_text mb-6'>
            Latest Insights & Updates
          </h2>
          <p className='text-lg text-black/60 max-w-2xl mx-auto'>
            Stay informed with our latest articles, guides, and industry news to
            help you make better payment decisions.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link
            href='#'
            className='inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:gap-4'>
            View All Articles
            <Icon icon='tabler:arrow-right' className='text-2xl' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog
