'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

const Terms = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='container'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12'>
            <div className='w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Icon icon='tabler:file-text' className='text-5xl text-primary' />
            </div>
            <h1 className='text-4xl sm:text-5xl font-bold text-midnight_text mb-6'>
              Terms & Conditions
            </h1>
            <p className='text-lg text-black/60'>
              Last Updated: January 13, 2026
            </p>
          </div>

          {/* Content */}
          <div className='prose prose-lg max-w-none'>
            <div className='bg-gradient-to-br from-header to-white p-8 rounded-2xl shadow-featureShadow mb-8'>
              <p className='text-base text-black/80 leading-relaxed m-0'>
                Welcome to NextLanding. By accessing or using our payment
                processing platform and services, you agree to be bound by these
                Terms and Conditions. Please read them carefully.
              </p>
            </div>

            <div className='space-y-8'>
              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:checkbox' className='text-primary' />
                  1. Acceptance of Terms
                </h2>
                <p className='text-base text-black/70 leading-relaxed mb-4'>
                  By creating an account, accessing, or using NextLanding's
                  services, you acknowledge that you have read, understood, and
                  agree to be bound by these Terms and Conditions, as well as our
                  Privacy Policy.
                </p>
                <p className='text-base text-black/70 leading-relaxed'>
                  If you do not agree with any part of these terms, you must not
                  use our services.
                </p>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:user-check' className='text-primary' />
                  2. Eligibility
                </h2>
                <p className='text-base text-black/70 leading-relaxed mb-4'>
                  To use our services, you must:
                </p>
                <ul className='space-y-3 ml-6'>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:circle-check'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Be at least 18 years old or the age of majority in your
                    jurisdiction
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:circle-check'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Have the legal authority to enter into binding contracts
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:circle-check'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Provide accurate and complete information during registration
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:circle-check'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Not be prohibited from using our services under applicable laws
                  </li>
                </ul>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:lock' className='text-primary' />
                  3. Account Security
                </h2>
                <div className='bg-header/50 p-6 rounded-xl mb-4'>
                  <p className='text-base text-black/70 leading-relaxed mb-4'>
                    You are responsible for:
                  </p>
                  <ul className='space-y-2'>
                    <li className='text-base text-black/70 flex items-start gap-3'>
                      <Icon
                        icon='tabler:arrow-right'
                        className='text-primary text-xl flex-shrink-0 mt-0.5'
                      />
                      Maintaining the confidentiality of your account credentials
                    </li>
                    <li className='text-base text-black/70 flex items-start gap-3'>
                      <Icon
                        icon='tabler:arrow-right'
                        className='text-primary text-xl flex-shrink-0 mt-0.5'
                      />
                      All activities that occur under your account
                    </li>
                    <li className='text-base text-black/70 flex items-start gap-3'>
                      <Icon
                        icon='tabler:arrow-right'
                        className='text-primary text-xl flex-shrink-0 mt-0.5'
                      />
                      Notifying us immediately of any unauthorized access
                    </li>
                  </ul>
                </div>
                <p className='text-base text-black/70 leading-relaxed'>
                  NextLanding will not be liable for any loss or damage arising
                  from your failure to maintain account security.
                </p>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:credit-card' className='text-primary' />
                  4. Payment Processing Services
                </h2>
                <div className='space-y-4'>
                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-semibold text-midnight_text mb-2'>
                      4.1 Service Description
                    </h3>
                    <p className='text-base text-black/70 leading-relaxed'>
                      NextLanding provides payment processing, merchant services,
                      and related financial services. We act as an intermediary
                      between you and payment networks, processors, and financial
                      institutions.
                    </p>
                  </div>
                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-semibold text-midnight_text mb-2'>
                      4.2 Transaction Fees
                    </h3>
                    <p className='text-base text-black/70 leading-relaxed'>
                      You agree to pay all applicable fees as outlined in your
                      selected pricing plan. Fees are subject to change with 30
                      days' notice.
                    </p>
                  </div>
                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-semibold text-midnight_text mb-2'>
                      4.3 Refunds and Chargebacks
                    </h3>
                    <p className='text-base text-black/70 leading-relaxed'>
                      You are responsible for handling customer disputes, refunds,
                      and chargebacks. Excessive chargebacks may result in account
                      suspension or termination.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:ban' className='text-primary' />
                  5. Prohibited Activities
                </h2>
                <p className='text-base text-black/70 leading-relaxed mb-4'>
                  You agree not to use our services for:
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='bg-red-50 border-2 border-red-200 p-4 rounded-xl'>
                    <Icon icon='tabler:x' className='text-3xl text-red-500 mb-2' />
                    <p className='text-sm text-black/80 font-semibold'>
                      Illegal activities or fraudulent transactions
                    </p>
                  </div>
                  <div className='bg-red-50 border-2 border-red-200 p-4 rounded-xl'>
                    <Icon icon='tabler:x' className='text-3xl text-red-500 mb-2' />
                    <p className='text-sm text-black/80 font-semibold'>
                      Money laundering or terrorist financing
                    </p>
                  </div>
                  <div className='bg-red-50 border-2 border-red-200 p-4 rounded-xl'>
                    <Icon icon='tabler:x' className='text-3xl text-red-500 mb-2' />
                    <p className='text-sm text-black/80 font-semibold'>
                      Sale of prohibited goods or services
                    </p>
                  </div>
                  <div className='bg-red-50 border-2 border-red-200 p-4 rounded-xl'>
                    <Icon icon='tabler:x' className='text-3xl text-red-500 mb-2' />
                    <p className='text-sm text-black/80 font-semibold'>
                      Violation of intellectual property rights
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:shield' className='text-primary' />
                  6. Intellectual Property
                </h2>
                <p className='text-base text-black/70 leading-relaxed mb-4'>
                  All content, features, and functionality of NextLanding,
                  including but not limited to text, graphics, logos, software, and
                  design, are owned by NextLanding and protected by copyright,
                  trademark, and other intellectual property laws.
                </p>
                <p className='text-base text-black/70 leading-relaxed'>
                  You may not reproduce, distribute, modify, or create derivative
                  works without our express written permission.
                </p>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:alert-triangle' className='text-primary' />
                  7. Limitation of Liability
                </h2>
                <div className='bg-yellow-50 border-2 border-yellow-300 p-6 rounded-xl'>
                  <p className='text-base text-black/80 leading-relaxed mb-4'>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEXTLANDING SHALL NOT
                    BE LIABLE FOR:
                  </p>
                  <ul className='space-y-2'>
                    <li className='text-base text-black/80 flex items-start gap-3'>
                      <Icon
                        icon='tabler:point'
                        className='text-yellow-600 text-xl flex-shrink-0 mt-0.5'
                      />
                      Indirect, incidental, special, or consequential damages
                    </li>
                    <li className='text-base text-black/80 flex items-start gap-3'>
                      <Icon
                        icon='tabler:point'
                        className='text-yellow-600 text-xl flex-shrink-0 mt-0.5'
                      />
                      Loss of profits, data, or business opportunities
                    </li>
                    <li className='text-base text-black/80 flex items-start gap-3'>
                      <Icon
                        icon='tabler:point'
                        className='text-yellow-600 text-xl flex-shrink-0 mt-0.5'
                      />
                      Service interruptions or technical failures
                    </li>
                    <li className='text-base text-black/80 flex items-start gap-3'>
                      <Icon
                        icon='tabler:point'
                        className='text-yellow-600 text-xl flex-shrink-0 mt-0.5'
                      />
                      Actions of third parties or unauthorized access
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:x-circle' className='text-primary' />
                  8. Termination
                </h2>
                <p className='text-base text-black/70 leading-relaxed mb-4'>
                  We reserve the right to suspend or terminate your account at any
                  time for:
                </p>
                <ul className='space-y-3 ml-6'>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:circle-dot'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Violation of these Terms and Conditions
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:circle-dot'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Fraudulent or illegal activity
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:circle-dot'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Non-payment of fees
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:circle-dot'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Any reason that poses risk to our business or other users
                  </li>
                </ul>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:refresh' className='text-primary' />
                  9. Changes to Terms
                </h2>
                <p className='text-base text-black/70 leading-relaxed'>
                  We may modify these Terms and Conditions at any time. Material
                  changes will be notified via email or through our platform. Your
                  continued use of our services after such modifications
                  constitutes acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:scale' className='text-primary' />
                  10. Governing Law
                </h2>
                <p className='text-base text-black/70 leading-relaxed'>
                  These Terms shall be governed by and construed in accordance with
                  the laws of the State of California, United States, without
                  regard to its conflict of law provisions. Any disputes arising
                  from these Terms shall be subject to the exclusive jurisdiction
                  of the courts in San Francisco, California.
                </p>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:phone' className='text-primary' />
                  11. Contact Information
                </h2>
                <p className='text-base text-black/70 leading-relaxed mb-4'>
                  For questions regarding these Terms and Conditions, please
                  contact us:
                </p>
                <div className='bg-gradient-to-br from-primary/10 to-deepSlate/10 p-6 rounded-xl'>
                  <p className='text-base text-black/80 mb-2'>
                    <strong>Email:</strong> legal@nextlanding.com
                  </p>
                  <p className='text-base text-black/80 mb-2'>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p className='text-base text-black/80'>
                    <strong>Address:</strong> 123 Business Street, Suite 100, San
                    Francisco, CA 94102
                  </p>
                </div>
              </div>

              <div className='bg-gradient-to-r from-primary to-deepSlate p-8 rounded-2xl text-center'>
                <Icon
                  icon='tabler:info-circle'
                  className='text-6xl text-white mx-auto mb-4'
                />
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Have Questions?
                </h3>
                <p className='text-white/90 mb-6'>
                  Our legal team is here to help clarify any questions you may
                  have about our terms.
                </p>
                <Link
                  href='/contact'
                  className='inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300'>
                  Contact Us
                  <Icon icon='tabler:arrow-right' className='text-2xl' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Terms
