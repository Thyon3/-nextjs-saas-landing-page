'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'

const mainFeatures = [
  {
    icon: 'tabler:bolt',
    title: 'Lightning-Fast Processing',
    description:
      'Process transactions in milliseconds with our optimized infrastructure. Experience industry-leading speed that keeps your customers happy and your business moving.',
    benefits: [
      'Sub-second transaction processing',
      '99.99% uptime guarantee',
      'Global CDN for reduced latency',
      'Real-time transaction updates',
    ],
  },
  {
    icon: 'tabler:shield-check',
    title: 'Bank-Level Security',
    description:
      'Your data is protected with enterprise-grade encryption and security measures. We\'re PCI DSS Level 1 certified, the highest level of security in the payment industry.',
    benefits: [
      '256-bit SSL encryption',
      'PCI DSS Level 1 compliant',
      'Advanced fraud detection',
      '3D Secure authentication',
    ],
  },
  {
    icon: 'tabler:world',
    title: 'Global Coverage',
    description:
      'Accept payments from customers worldwide with support for 150+ countries and 135+ currencies. Expand your business globally without limitations.',
    benefits: [
      '150+ countries supported',
      '135+ currencies',
      'Multi-language support',
      'Local payment methods',
    ],
  },
  {
    icon: 'tabler:api',
    title: 'Developer-Friendly API',
    description:
      'Integrate seamlessly with our RESTful API and comprehensive SDKs. Get started in minutes with our detailed documentation and code examples.',
    benefits: [
      'RESTful API design',
      'SDKs for popular languages',
      'Webhooks for real-time updates',
      'Sandbox environment for testing',
    ],
  },
  {
    icon: 'tabler:chart-line',
    title: 'Advanced Analytics',
    description:
      'Make data-driven decisions with comprehensive reporting and analytics. Track sales, identify trends, and optimize your payment strategy.',
    benefits: [
      'Real-time dashboards',
      'Custom report generation',
      'Revenue forecasting',
      'Customer insights',
    ],
  },
  {
    icon: 'tabler:headset',
    title: '24/7 Expert Support',
    description:
      'Get help when you need it with our dedicated support team. Premium customers receive priority support and a dedicated account manager.',
    benefits: [
      '24/7 email & chat support',
      'Phone support for Pro plans',
      'Dedicated account managers',
      '2-hour average response time',
    ],
  },
]

const additionalFeatures = [
  {
    icon: 'tabler:refresh',
    title: 'Recurring Billing',
    description: 'Automate subscription payments and reduce churn',
  },
  {
    icon: 'tabler:file-invoice',
    title: 'Smart Invoicing',
    description: 'Create and send professional invoices automatically',
  },
  {
    icon: 'tabler:device-mobile',
    title: 'Mobile Optimized',
    description: 'Perfect payment experience on any device',
  },
  {
    icon: 'tabler:users',
    title: 'Team Management',
    description: 'Collaborate with role-based access control',
  },
  {
    icon: 'tabler:webhook',
    title: 'Webhooks',
    description: 'Real-time notifications for all events',
  },
  {
    icon: 'tabler:brand-apple',
    title: 'Apple Pay',
    description: 'Accept Apple Pay for faster checkouts',
  },
  {
    icon: 'tabler:brand-google',
    title: 'Google Pay',
    description: 'Support Google Pay transactions',
  },
  {
    icon: 'tabler:file-export',
    title: 'Data Export',
    description: 'Export transaction data in multiple formats',
  },
  {
    icon: 'tabler:palette',
    title: 'Custom Branding',
    description: 'White-label solution for your brand',
  },
  {
    icon: 'tabler:lock',
    title: 'Two-Factor Auth',
    description: 'Enhanced security with 2FA',
  },
  {
    icon: 'tabler:cloud',
    title: 'Cloud Backup',
    description: 'Automatic data backup and recovery',
  },
  {
    icon: 'tabler:currency-dollar',
    title: 'Multi-Currency',
    description: 'Accept payments in 135+ currencies',
  },
]

const integrations = [
  { name: 'Shopify', icon: 'simple-icons:shopify' },
  { name: 'WooCommerce', icon: 'simple-icons:woocommerce' },
  { name: 'Stripe', icon: 'simple-icons:stripe' },
  { name: 'PayPal', icon: 'simple-icons:paypal' },
  { name: 'Square', icon: 'simple-icons:square' },
  { name: 'Magento', icon: 'simple-icons:magento' },
]

const FeaturesPage = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='container'>
        {/* Header */}
        <div className='text-center mb-20 max-w-3xl mx-auto'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-midnight_text mb-6'>
            Everything You Need to Process Payments
          </h1>
          <p className='text-lg sm:text-xl text-black/70 leading-relaxed'>
            Our comprehensive payment platform provides all the tools and features
            you need to accept payments, manage transactions, and grow your
            business.
          </p>
        </div>

        {/* Main Features */}
        <div className='space-y-20 mb-20'>
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className='w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6'>
                  <Icon icon={feature.icon} className='text-5xl text-primary' />
                </div>
                <h2 className='text-3xl sm:text-4xl font-bold text-midnight_text mb-4'>
                  {feature.title}
                </h2>
                <p className='text-lg text-black/70 leading-relaxed mb-6'>
                  {feature.description}
                </p>
                <ul className='space-y-3'>
                  {feature.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className='flex items-start gap-3 text-base text-black/70'>
                      <Icon
                        icon='tabler:circle-check'
                        className='text-emerald-500 text-2xl flex-shrink-0 mt-0.5'
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`relative ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                <div className='relative h-96 bg-gradient-to-br from-primary/10 to-deepSlate/10 rounded-3xl overflow-hidden shadow-2xl'>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <Icon
                      icon={feature.icon}
                      className='text-9xl text-primary/20'
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className='mb-20'>
          <h2 className='text-4xl font-bold text-midnight_text text-center mb-12'>
            And Many More Features
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-white to-header p-6 rounded-2xl shadow-featureShadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group'>
                <div className='w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300'>
                  <Icon icon={feature.icon} className='text-3xl text-primary' />
                </div>
                <h3 className='text-lg font-bold text-midnight_text mb-2'>
                  {feature.title}
                </h3>
                <p className='text-sm text-black/70'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className='mb-20 bg-gradient-to-br from-header to-white py-16 -mx-4 px-4 sm:mx-0 sm:px-8 rounded-3xl'>
          <h2 className='text-4xl font-bold text-midnight_text text-center mb-6'>
            Seamless Integrations
          </h2>
          <p className='text-lg text-black/60 text-center mb-12 max-w-2xl mx-auto'>
            Connect with your favorite platforms and tools. We integrate with 100+
            popular services.
          </p>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center max-w-4xl mx-auto'>
            {integrations.map((integration, index) => (
              <div
                key={index}
                className='w-full h-24 bg-white rounded-xl shadow-featureShadow hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group cursor-pointer'>
                <Icon
                  icon={integration.icon}
                  className='text-5xl text-black/40 group-hover:text-primary transition-colors duration-300'
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className='bg-gradient-to-r from-primary to-deepSlate rounded-3xl p-12 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Ready to Get Started?
          </h2>
          <p className='text-lg text-white/90 mb-8 max-w-2xl mx-auto'>
            Join thousands of businesses already using NextLanding to process
            payments faster, safer, and smarter.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/signup'
              className='bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center gap-3'>
              Start Free Trial
              <Icon icon='tabler:arrow-right' className='text-2xl' />
            </Link>
            <Link
              href='/contact'
              className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center gap-3'>
              Contact Sales
              <Icon icon='tabler:phone' className='text-2xl' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesPage
