'use client'
import { Icon } from '@iconify/react/dist/iconify.js'

const PrivacyPolicy = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='container'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12'>
            <div className='w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Icon icon='tabler:shield-lock' className='text-5xl text-primary' />
            </div>
            <h1 className='text-4xl sm:text-5xl font-bold text-midnight_text mb-6'>
              Privacy Policy
            </h1>
            <p className='text-lg text-black/60'>
              Last Updated: January 13, 2026
            </p>
          </div>

          {/* Content */}
          <div className='prose prose-lg max-w-none'>
            <div className='bg-gradient-to-br from-header to-white p-8 rounded-2xl shadow-featureShadow mb-8'>
              <p className='text-base text-black/80 leading-relaxed m-0'>
                At NextLanding, we take your privacy seriously. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our payment processing platform and
                services.
              </p>
            </div>

            <div className='space-y-8'>
              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:info-circle' className='text-primary' />
                  Information We Collect
                </h2>
                <p className='text-base text-black/70 leading-relaxed mb-4'>
                  We collect information that you provide directly to us, including:
                </p>
                <ul className='space-y-3 ml-6'>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:circle-check'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    <span>
                      <strong>Account Information:</strong> Name, email address,
                      phone number, business details, and authentication credentials
                    </span>
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:circle-check'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    <span>
                      <strong>Payment Information:</strong> Credit card details,
                      bank account information, and transaction history
                    </span>
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:circle-check'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    <span>
                      <strong>Usage Data:</strong> IP address, browser type, device
                      information, and interaction with our services
                    </span>
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:circle-check'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    <span>
                      <strong>Communications:</strong> Messages, feedback, and
                      support requests you send us
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:settings' className='text-primary' />
                  How We Use Your Information
                </h2>
                <p className='text-base text-black/70 leading-relaxed mb-4'>
                  We use the information we collect to:
                </p>
                <ul className='space-y-3 ml-6'>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:arrow-right'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Provide, maintain, and improve our payment processing services
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:arrow-right'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Process transactions and send transaction confirmations
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:arrow-right'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Detect and prevent fraud, abuse, and security incidents
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:arrow-right'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Respond to customer support requests and communications
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:arrow-right'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Send important updates, newsletters, and marketing communications
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:arrow-right'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Comply with legal obligations and enforce our terms
                  </li>
                </ul>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:share' className='text-primary' />
                  Information Sharing
                </h2>
                <p className='text-base text-black/70 leading-relaxed mb-4'>
                  We may share your information in the following circumstances:
                </p>
                <div className='space-y-4'>
                  <div className='bg-header/50 p-6 rounded-xl'>
                    <h3 className='text-xl font-semibold text-midnight_text mb-2'>
                      Service Providers
                    </h3>
                    <p className='text-base text-black/70'>
                      We share information with third-party vendors who help us
                      operate our business, such as payment processors, cloud
                      storage providers, and customer support tools.
                    </p>
                  </div>
                  <div className='bg-header/50 p-6 rounded-xl'>
                    <h3 className='text-xl font-semibold text-midnight_text mb-2'>
                      Legal Requirements
                    </h3>
                    <p className='text-base text-black/70'>
                      We may disclose information when required by law, court order,
                      or governmental request, or to protect our rights and safety.
                    </p>
                  </div>
                  <div className='bg-header/50 p-6 rounded-xl'>
                    <h3 className='text-xl font-semibold text-midnight_text mb-2'>
                      Business Transfers
                    </h3>
                    <p className='text-base text-black/70'>
                      In the event of a merger, acquisition, or sale of assets, your
                      information may be transferred to the acquiring entity.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:lock' className='text-primary' />
                  Data Security
                </h2>
                <p className='text-base text-black/70 leading-relaxed mb-4'>
                  We implement industry-standard security measures to protect your
                  information:
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='border-2 border-primary/20 p-6 rounded-xl hover:border-primary transition-colors duration-300'>
                    <Icon
                      icon='tabler:shield-check'
                      className='text-4xl text-primary mb-3'
                    />
                    <h4 className='font-semibold text-midnight_text mb-2'>
                      Encryption
                    </h4>
                    <p className='text-sm text-black/70'>
                      256-bit SSL encryption for all data transmission
                    </p>
                  </div>
                  <div className='border-2 border-primary/20 p-6 rounded-xl hover:border-primary transition-colors duration-300'>
                    <Icon
                      icon='tabler:certificate'
                      className='text-4xl text-primary mb-3'
                    />
                    <h4 className='font-semibold text-midnight_text mb-2'>
                      PCI DSS Compliant
                    </h4>
                    <p className='text-sm text-black/70'>
                      Level 1 PCI DSS certification for payment security
                    </p>
                  </div>
                  <div className='border-2 border-primary/20 p-6 rounded-xl hover:border-primary transition-colors duration-300'>
                    <Icon
                      icon='tabler:database'
                      className='text-4xl text-primary mb-3'
                    />
                    <h4 className='font-semibold text-midnight_text mb-2'>
                      Secure Storage
                    </h4>
                    <p className='text-sm text-black/70'>
                      Data stored in encrypted, secure data centers
                    </p>
                  </div>
                  <div className='border-2 border-primary/20 p-6 rounded-xl hover:border-primary transition-colors duration-300'>
                    <Icon
                      icon='tabler:eye-off'
                      className='text-4xl text-primary mb-3'
                    />
                    <h4 className='font-semibold text-midnight_text mb-2'>
                      Access Control
                    </h4>
                    <p className='text-sm text-black/70'>
                      Strict access controls and regular security audits
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:user-check' className='text-primary' />
                  Your Rights
                </h2>
                <p className='text-base text-black/70 leading-relaxed mb-4'>
                  You have the following rights regarding your personal information:
                </p>
                <ul className='space-y-3 ml-6'>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:check'
                      className='text-emerald-500 text-xl flex-shrink-0 mt-0.5'
                    />
                    <span>
                      <strong>Access:</strong> Request a copy of your personal data
                    </span>
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:check'
                      className='text-emerald-500 text-xl flex-shrink-0 mt-0.5'
                    />
                    <span>
                      <strong>Correction:</strong> Request correction of inaccurate
                      data
                    </span>
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:check'
                      className='text-emerald-500 text-xl flex-shrink-0 mt-0.5'
                    />
                    <span>
                      <strong>Deletion:</strong> Request deletion of your personal
                      data
                    </span>
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:check'
                      className='text-emerald-500 text-xl flex-shrink-0 mt-0.5'
                    />
                    <span>
                      <strong>Opt-out:</strong> Unsubscribe from marketing
                      communications
                    </span>
                  </li>
                  <li className='text-base text-black/70 flex items-start gap-3'>
                    <Icon
                      icon='tabler:check'
                      className='text-emerald-500 text-xl flex-shrink-0 mt-0.5'
                    />
                    <span>
                      <strong>Portability:</strong> Request transfer of your data to
                      another service
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:cookie' className='text-primary' />
                  Cookies and Tracking
                </h2>
                <p className='text-base text-black/70 leading-relaxed'>
                  We use cookies and similar tracking technologies to enhance your
                  experience, analyze usage patterns, and personalize content. You
                  can control cookie preferences through your browser settings.
                </p>
              </div>

              <div>
                <h2 className='text-3xl font-bold text-midnight_text mb-4 flex items-center gap-3'>
                  <Icon icon='tabler:mail' className='text-primary' />
                  Contact Us
                </h2>
                <p className='text-base text-black/70 leading-relaxed mb-4'>
                  If you have questions about this Privacy Policy or our data
                  practices, please contact us:
                </p>
                <div className='bg-gradient-to-br from-primary/10 to-deepSlate/10 p-6 rounded-xl'>
                  <p className='text-base text-black/80 mb-2'>
                    <strong>Email:</strong> privacy@nextlanding.com
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
