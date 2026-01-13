'use client'
import { useState } from 'react'
import { FAQItem } from '@/types/faq'
import { Icon } from '@iconify/react/dist/iconify.js'

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'How does the payment processing work?',
    answer:
      'Our payment processing system is designed to be simple and secure. Once you integrate our API, all transactions are encrypted and processed in real-time. We support multiple payment methods including credit cards, debit cards, and digital wallets.',
  },
  {
    id: 2,
    question: 'What are the transaction fees?',
    answer:
      'Transaction fees vary based on your subscription plan. Our Lite plan starts at 2.9% + $0.30 per transaction, while our Plus plan offers reduced rates of 2.5% + $0.25 per transaction. Enterprise customers can negotiate custom rates.',
  },
  {
    id: 3,
    question: 'Is my data secure?',
    answer:
      'Absolutely! We use bank-level encryption (256-bit SSL) to protect all your data. We are PCI DSS Level 1 compliant, which is the highest level of security certification in the payment industry. Your data is stored in secure data centers with regular backups.',
  },
  {
    id: 4,
    question: 'Can I integrate with my existing software?',
    answer:
      'Yes! We offer comprehensive APIs and SDKs for popular programming languages. We also have pre-built integrations with major e-commerce platforms, accounting software, and CRM systems. Our developer documentation makes integration straightforward.',
  },
  {
    id: 5,
    question: 'What kind of customer support do you offer?',
    answer:
      'We provide 24/7 customer support via email and chat for all plans. Plus and Enterprise plan subscribers also get priority phone support and a dedicated account manager. Our average response time is under 2 hours.',
  },
  {
    id: 6,
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription at any time with no cancellation fees. Your service will continue until the end of your current billing period. We also offer a 14-day money-back guarantee if you are not satisfied with our service.',
  },
]

const FAQAccordionItem = ({ faq }: { faq: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border-b border-black/10 last:border-b-0'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors duration-200'
        aria-expanded={isOpen}>
        <h3 className='text-lg sm:text-xl font-semibold text-midnight_text pr-8'>
          {faq.question}
        </h3>
        <Icon
          icon='tabler:chevron-down'
          className={`text-3xl text-primary transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}>
        <p className='text-base sm:text-lg text-black/70 leading-relaxed'>
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

const FAQ = () => {
  return (
    <section id='faq' className='py-20 bg-gradient-to-b from-header to-white'>
      <div className='container'>
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4'>
            FAQ
          </span>
          <h2 className='text-4xl sm:text-5xl font-semibold text-midnight_text mb-6'>
            Frequently Asked Questions
          </h2>
          <p className='text-lg text-black/60 max-w-2xl mx-auto'>
            Have questions? We have answers. Browse through our most common
            questions below.
          </p>
        </div>
        <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-featureShadow p-8 sm:p-12 hover:shadow-xl transition-shadow duration-300'>
          {faqData.map((faq) => (
            <FAQAccordionItem key={faq.id} faq={faq} />
          ))}
        </div>
        <div className='text-center mt-12'>
          <p className='text-lg text-black/70 mb-4'>
            Still have questions?
          </p>
          <a
            href='#contact'
            className='inline-block bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-colors duration-300'>
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
