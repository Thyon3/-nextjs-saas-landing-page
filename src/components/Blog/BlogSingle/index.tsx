'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  slug: string
}

const blogData: Record<string, any> = {
  'optimize-payment-processing': {
    title: '10 Tips to Optimize Your Payment Processing',
    author: 'John Smith',
    date: 'Jan 10, 2026',
    readTime: '5 min read',
    category: 'Tips & Tricks',
    image: '/images/business/business.png',
    content: `
      <h2>Introduction</h2>
      <p>Payment processing is a critical component of any online business. Optimizing your payment workflow can lead to reduced costs, faster transactions, and higher conversion rates. In this guide, we'll explore ten proven strategies to enhance your payment processing efficiency.</p>
      
      <h3>1. Choose the Right Payment Gateway</h3>
      <p>Selecting the appropriate payment gateway is crucial. Consider factors like transaction fees, supported payment methods, security features, and integration ease. Popular options include Stripe, PayPal, and Square.</p>
      
      <h3>2. Implement Multiple Payment Methods</h3>
      <p>Offering various payment options increases conversion rates. Include credit cards, debit cards, digital wallets (Apple Pay, Google Pay), and buy-now-pay-later services.</p>
      
      <h3>3. Optimize Checkout Flow</h3>
      <p>A streamlined checkout process reduces cart abandonment. Minimize form fields, enable guest checkout, and provide clear progress indicators.</p>
      
      <h3>4. Ensure Mobile Optimization</h3>
      <p>With mobile commerce growing rapidly, ensure your payment forms are mobile-friendly with large buttons, auto-fill support, and responsive design.</p>
      
      <h3>5. Implement Strong Security Measures</h3>
      <p>Security builds trust. Use SSL certificates, PCI DSS compliance, tokenization, and fraud detection tools to protect customer data.</p>
      
      <h3>6. Enable Automated Recurring Billing</h3>
      <p>For subscription businesses, automated billing reduces churn and administrative overhead while improving customer experience.</p>
      
      <h3>7. Provide Transparent Pricing</h3>
      <p>Display all costs upfront including taxes and fees. Hidden costs are a major reason for cart abandonment.</p>
      
      <h3>8. Use Analytics and Reporting</h3>
      <p>Monitor transaction success rates, identify failed payments, and analyze customer behavior to continuously improve your process.</p>
      
      <h3>9. Offer One-Click Payments</h3>
      <p>For returning customers, implement one-click payment options by securely storing payment information with their consent.</p>
      
      <h3>10. Test and Optimize Regularly</h3>
      <p>Continuously A/B test different aspects of your payment flow, from button colors to form layouts, to maximize conversions.</p>
      
      <h2>Conclusion</h2>
      <p>Implementing these optimization strategies can significantly improve your payment processing efficiency, reduce costs, and enhance customer satisfaction. Start with the tips most relevant to your business and iterate based on results.</p>
    `,
  },
}

const relatedPosts = [
  {
    id: 1,
    slug: 'pci-dss-compliance-guide',
    title: 'Understanding PCI DSS Compliance',
    image: '/images/payment/payment.png',
  },
  {
    id: 2,
    slug: 'reduce-cart-abandonment',
    title: 'How to Reduce Shopping Cart Abandonment',
    image: '/images/business/business.png',
  },
  {
    id: 3,
    slug: 'future-of-digital-payments',
    title: 'The Future of Digital Payments',
    image: '/images/hero/banner.png',
  },
]

const BlogSingle = ({ slug }: Props) => {
  const post = blogData[slug] || blogData['optimize-payment-processing']

  return (
    <section className='py-20 bg-white'>
      <div className='container'>
        <div className='max-w-4xl mx-auto'>
          {/* Article Header */}
          <div className='mb-8'>
            <Link
              href='/blog'
              className='inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 mb-6'>
              <Icon icon='tabler:arrow-left' className='text-xl' />
              Back to Blog
            </Link>
            <div className='mb-6'>
              <span className='inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4'>
                {post.category}
              </span>
            </div>
            <h1 className='text-4xl sm:text-5xl font-bold text-midnight_text mb-6'>
              {post.title}
            </h1>
            <div className='flex flex-wrap items-center gap-6 text-black/60'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
                  <Icon icon='tabler:user' className='text-2xl text-primary' />
                </div>
                <div>
                  <p className='font-semibold text-midnight_text'>{post.author}</p>
                  <p className='text-sm'>Author</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <Icon icon='tabler:calendar' className='text-xl' />
                <span>{post.date}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Icon icon='tabler:clock' className='text-xl' />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className='relative h-96 rounded-2xl overflow-hidden mb-12 shadow-xl'>
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className='w-full h-full object-cover'
            />
          </div>

          {/* Article Content */}
          <div
            className='prose prose-lg max-w-none mb-12'
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: '1.8',
            }}
          />

          {/* Share Section */}
          <div className='border-t border-b border-black/10 py-8 mb-12'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
              <h3 className='text-xl font-bold text-midnight_text'>
                Share this article
              </h3>
              <div className='flex gap-3'>
                <button className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'>
                  <Icon icon='mdi:twitter' className='text-2xl' />
                </button>
                <button className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'>
                  <Icon icon='mdi:facebook' className='text-2xl' />
                </button>
                <button className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'>
                  <Icon icon='mdi:linkedin' className='text-2xl' />
                </button>
                <button className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'>
                  <Icon icon='tabler:link' className='text-2xl' />
                </button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className='bg-gradient-to-br from-header to-white rounded-2xl p-8 mb-12'>
            <div className='flex flex-col sm:flex-row gap-6'>
              <div className='w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
                <Icon icon='tabler:user' className='text-5xl text-primary' />
              </div>
              <div>
                <h4 className='text-2xl font-bold text-midnight_text mb-2'>
                  About {post.author}
                </h4>
                <p className='text-base text-black/70 mb-4'>
                  {post.author} is a fintech expert with over 10 years of experience
                  in payment processing and e-commerce optimization. He regularly
                  writes about payment trends and best practices.
                </p>
                <div className='flex gap-3'>
                  <a
                    href='#'
                    className='text-primary hover:text-primary/80 transition-colors duration-300'>
                    <Icon icon='mdi:twitter' className='text-2xl' />
                  </a>
                  <a
                    href='#'
                    className='text-primary hover:text-primary/80 transition-colors duration-300'>
                    <Icon icon='mdi:linkedin' className='text-2xl' />
                  </a>
                  <a
                    href='#'
                    className='text-primary hover:text-primary/80 transition-colors duration-300'>
                    <Icon icon='mdi:email' className='text-2xl' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className='max-w-6xl mx-auto'>
          <h3 className='text-3xl font-bold text-midnight_text mb-8'>
            Related Articles
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className='group bg-white rounded-2xl overflow-hidden shadow-featureShadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
                <div className='relative h-48 overflow-hidden'>
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    width={400}
                    height={300}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                </div>
                <div className='p-6'>
                  <h4 className='text-lg font-semibold text-midnight_text group-hover:text-primary transition-colors duration-300 line-clamp-2'>
                    {relatedPost.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSingle
