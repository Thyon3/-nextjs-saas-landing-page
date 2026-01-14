'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'
import Link from 'next/link'

const pricingPlans = [
  {
    name: 'Lite',
    description: 'Perfect for startups and small businesses',
    price: {
      monthly: 29,
      yearly: 290,
    },
    features: [
      'Up to 1,000 transactions/month',
      '2.9% + $0.30 per transaction',
      'Basic reporting',
      'Email support',
      'Standard security',
      'API access',
      '2 team members',
    ],
    popular: false,
  },
  {
    name: 'Plus',
    description: 'Great for growing businesses',
    price: {
      monthly: 99,
      yearly: 990,
    },
    features: [
      'Up to 10,000 transactions/month',
      '2.5% + $0.25 per transaction',
      'Advanced reporting & analytics',
      'Priority email & chat support',
      'Enhanced security features',
      'Full API access',
      '10 team members',
      'Custom branding',
      'Fraud detection',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large-scale operations',
    price: {
      monthly: 299,
      yearly: 2990,
    },
    features: [
      'Unlimited transactions',
      'Custom pricing per transaction',
      'Premium analytics & insights',
      '24/7 phone & email support',
      'Enterprise-grade security',
      'Dedicated API',
      'Unlimited team members',
      'White-label solution',
      'Advanced fraud protection',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    popular: false,
  },
]

const faqs = [
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, debit cards, and ACH transfers for enterprise customers.',
  },
  {
    question: 'Is there a setup fee?',
    answer:
      'No, there are no setup fees. You only pay the monthly subscription and transaction fees.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Yes, we offer a 14-day money-back guarantee if you\'re not satisfied with our service.',
  },
]

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section className='py-20 bg-gradient-to-b from-white to-header'>
      <div className='container'>
        {/* Header */}
        <div className='text-center mb-12 max-w-3xl mx-auto'>
          <h1 className='text-4xl sm:text-5xl font-bold text-midnight_text mb-6'>
            Choose Your Perfect Plan
          </h1>
          <p className='text-lg text-black/70 mb-8'>
            Start with a 14-day free trial. No credit card required. Cancel
            anytime.
          </p>

          {/* Billing Toggle */}
          <div className='inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-featureShadow'>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-midnight_text hover:text-primary'
              }`}>
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-midnight_text hover:text-primary'
              }`}>
              Yearly
              <span className='absolute -top-2 -right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full'>
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'shadow-2xl border-2 border-primary'
                  : 'shadow-featureShadow hover:shadow-xl'
              }`}>
              {plan.popular && (
                <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                  <span className='bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg'>
                    Most Popular
                  </span>
                </div>
              )}

              <div className='text-center mb-8'>
                <h3 className='text-2xl font-bold text-midnight_text mb-2'>
                  {plan.name}
                </h3>
                <p className='text-sm text-black/60 mb-6'>{plan.description}</p>
                <div className='mb-6'>
                  <span className='text-5xl font-bold text-primary'>
                    ${plan.price[billingCycle]}
                  </span>
                  <span className='text-lg text-black/60'>
                    /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                  </span>
                </div>
                <Link
                  href='/signup'
                  className={`block w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary/90 shadow-lg'
                      : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}>
                  Start Free Trial
                </Link>
              </div>

              <div className='space-y-4'>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className='flex items-start gap-3'>
                    <Icon
                      icon='tabler:circle-check'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    <span className='text-sm text-black/70'>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-midnight_text text-center mb-12'>
            Compare All Features
          </h2>
          <div className='bg-white rounded-3xl shadow-featureShadow overflow-hidden'>
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead className='bg-gradient-to-r from-primary to-deepSlate text-white'>
                  <tr>
                    <th className='px-6 py-4 text-left font-semibold'>Feature</th>
                    <th className='px-6 py-4 text-center font-semibold'>Lite</th>
                    <th className='px-6 py-4 text-center font-semibold'>Plus</th>
                    <th className='px-6 py-4 text-center font-semibold'>
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-black/10'>
                  <tr className='hover:bg-header/50 transition-colors duration-200'>
                    <td className='px-6 py-4 font-medium'>Monthly Transactions</td>
                    <td className='px-6 py-4 text-center'>1,000</td>
                    <td className='px-6 py-4 text-center'>10,000</td>
                    <td className='px-6 py-4 text-center'>Unlimited</td>
                  </tr>
                  <tr className='hover:bg-header/50 transition-colors duration-200'>
                    <td className='px-6 py-4 font-medium'>Transaction Fee</td>
                    <td className='px-6 py-4 text-center'>2.9% + $0.30</td>
                    <td className='px-6 py-4 text-center'>2.5% + $0.25</td>
                    <td className='px-6 py-4 text-center'>Custom</td>
                  </tr>
                  <tr className='hover:bg-header/50 transition-colors duration-200'>
                    <td className='px-6 py-4 font-medium'>Team Members</td>
                    <td className='px-6 py-4 text-center'>2</td>
                    <td className='px-6 py-4 text-center'>10</td>
                    <td className='px-6 py-4 text-center'>Unlimited</td>
                  </tr>
                  <tr className='hover:bg-header/50 transition-colors duration-200'>
                    <td className='px-6 py-4 font-medium'>24/7 Support</td>
                    <td className='px-6 py-4 text-center'>
                      <Icon icon='tabler:x' className='text-red-500 text-xl mx-auto' />
                    </td>
                    <td className='px-6 py-4 text-center'>
                      <Icon icon='tabler:x' className='text-red-500 text-xl mx-auto' />
                    </td>
                    <td className='px-6 py-4 text-center'>
                      <Icon
                        icon='tabler:check'
                        className='text-emerald-500 text-xl mx-auto'
                      />
                    </td>
                  </tr>
                  <tr className='hover:bg-header/50 transition-colors duration-200'>
                    <td className='px-6 py-4 font-medium'>Advanced Analytics</td>
                    <td className='px-6 py-4 text-center'>
                      <Icon icon='tabler:x' className='text-red-500 text-xl mx-auto' />
                    </td>
                    <td className='px-6 py-4 text-center'>
                      <Icon
                        icon='tabler:check'
                        className='text-emerald-500 text-xl mx-auto'
                      />
                    </td>
                    <td className='px-6 py-4 text-center'>
                      <Icon
                        icon='tabler:check'
                        className='text-emerald-500 text-xl mx-auto'
                      />
                    </td>
                  </tr>
                  <tr className='hover:bg-header/50 transition-colors duration-200'>
                    <td className='px-6 py-4 font-medium'>Custom Branding</td>
                    <td className='px-6 py-4 text-center'>
                      <Icon icon='tabler:x' className='text-red-500 text-xl mx-auto' />
                    </td>
                    <td className='px-6 py-4 text-center'>
                      <Icon
                        icon='tabler:check'
                        className='text-emerald-500 text-xl mx-auto'
                      />
                    </td>
                    <td className='px-6 py-4 text-center'>
                      <Icon
                        icon='tabler:check'
                        className='text-emerald-500 text-xl mx-auto'
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl font-bold text-midnight_text text-center mb-12'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-6 shadow-featureShadow'>
                <h3 className='text-lg font-semibold text-midnight_text mb-3'>
                  {faq.question}
                </h3>
                <p className='text-base text-black/70'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className='mt-20 text-center bg-gradient-to-r from-primary to-deepSlate rounded-3xl p-12'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Still Have Questions?
          </h2>
          <p className='text-lg text-white/90 mb-8 max-w-2xl mx-auto'>
            Our team is here to help you choose the right plan for your business.
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300'>
            Contact Sales
            <Icon icon='tabler:arrow-right' className='text-2xl' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PricingPage
