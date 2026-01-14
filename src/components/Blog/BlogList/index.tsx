'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'optimize-payment-processing',
    title: '10 Tips to Optimize Your Payment Processing',
    excerpt:
      'Learn how to reduce transaction fees, improve checkout speed, and increase conversion rates with these proven strategies for optimizing your payment processing workflow.',
    author: 'John Smith',
    date: 'Jan 10, 2026',
    readTime: '5 min read',
    category: 'Tips & Tricks',
    image: '/images/business/business.png',
    featured: true,
  },
  {
    id: 2,
    slug: 'pci-dss-compliance-guide',
    title: 'Understanding PCI DSS Compliance',
    excerpt:
      'A comprehensive guide to payment security standards and how to ensure your business stays compliant with industry regulations and best practices.',
    author: 'Sarah Williams',
    date: 'Jan 08, 2026',
    readTime: '8 min read',
    category: 'Security',
    image: '/images/payment/payment.png',
    featured: true,
  },
  {
    id: 3,
    slug: 'future-of-digital-payments',
    title: 'The Future of Digital Payments in 2026',
    excerpt:
      'Explore emerging trends in fintech, from cryptocurrency integration to AI-powered fraud detection and the evolution of contactless payments.',
    author: 'Michael Chen',
    date: 'Jan 05, 2026',
    readTime: '6 min read',
    category: 'Industry News',
    image: '/images/hero/banner.png',
    featured: true,
  },
  {
    id: 4,
    slug: 'reduce-cart-abandonment',
    title: 'How to Reduce Shopping Cart Abandonment',
    excerpt:
      'Discover effective strategies to minimize cart abandonment rates and improve your checkout conversion with seamless payment experiences.',
    author: 'Emily Rodriguez',
    date: 'Jan 03, 2026',
    readTime: '4 min read',
    category: 'E-commerce',
    image: '/images/business/business.png',
    featured: false,
  },
  {
    id: 5,
    slug: 'subscription-billing-best-practices',
    title: 'Subscription Billing Best Practices',
    excerpt:
      'Everything you need to know about setting up and managing subscription billing for your SaaS or membership business.',
    author: 'David Thompson',
    date: 'Dec 28, 2025',
    readTime: '7 min read',
    category: 'Billing',
    image: '/images/payment/payment.png',
    featured: false,
  },
  {
    id: 6,
    slug: 'mobile-payment-trends',
    title: 'Mobile Payment Trends to Watch',
    excerpt:
      'Explore the latest mobile payment innovations and how they\'re reshaping the way consumers and businesses transact.',
    author: 'Lisa Anderson',
    date: 'Dec 25, 2025',
    readTime: '5 min read',
    category: 'Mobile',
    image: '/images/hero/banner.png',
    featured: false,
  },
]

const categories = ['All', 'Tips & Tricks', 'Security', 'Industry News', 'E-commerce', 'Billing', 'Mobile']

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory)

  const featuredPost = blogPosts.find((post) => post.featured)

  return (
    <section className='py-20 bg-gradient-to-b from-white to-header'>
      <div className='container'>
        {/* Featured Post */}
        {featuredPost && (
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-midnight_text mb-8'>
              Featured Article
            </h2>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className='group block bg-white rounded-3xl overflow-hidden shadow-featureShadow hover:shadow-2xl transition-all duration-300'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='relative h-80 lg:h-auto overflow-hidden'>
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={800}
                    height={600}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute top-6 left-6'>
                    <span className='bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg'>
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className='p-8 lg:p-12 flex flex-col justify-center'>
                  <div className='flex items-center gap-4 text-sm text-black/60 mb-4'>
                    <div className='flex items-center gap-2'>
                      <Icon icon='tabler:calendar' className='text-lg' />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Icon icon='tabler:clock' className='text-lg' />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h3 className='text-3xl lg:text-4xl font-bold text-midnight_text mb-4 group-hover:text-primary transition-colors duration-300'>
                    {featuredPost.title}
                  </h3>
                  <p className='text-lg text-black/70 mb-6 leading-relaxed'>
                    {featuredPost.excerpt}
                  </p>
                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
                      <Icon icon='tabler:user' className='text-xl text-primary' />
                    </div>
                    <div>
                      <p className='font-semibold text-midnight_text'>
                        {featuredPost.author}
                      </p>
                      <p className='text-sm text-black/60'>Author</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Category Filter */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold text-midnight_text mb-6'>
            All Articles
          </h2>
          <div className='flex flex-wrap gap-3'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-midnight_text border-2 border-black/10 hover:border-primary hover:text-primary'
                }`}>
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className='group bg-white rounded-2xl overflow-hidden shadow-featureShadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full'>
              <div className='relative h-56 overflow-hidden'>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 left-4'>
                  <span className='bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg'>
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
                  <Icon
                    icon='tabler:arrow-right'
                    className='text-2xl text-primary group-hover:translate-x-2 transition-transform duration-300'
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className='text-center mt-12'>
          <button className='bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-3'>
            Load More Articles
            <Icon icon='tabler:refresh' className='text-2xl' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogList
