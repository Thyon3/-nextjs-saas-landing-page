'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import ContactForm from './Form'

const contactInfo = [
  {
    icon: 'tabler:map-pin',
    title: 'Visit Us',
    info: '123 Business Street, Suite 100',
    info2: 'San Francisco, CA 94102',
  },
  {
    icon: 'tabler:phone',
    title: 'Call Us',
    info: '+1 (555) 123-4567',
    info2: 'Mon-Fri from 8am to 6pm',
  },
  {
    icon: 'tabler:mail',
    title: 'Email Us',
    info: 'support@nextlanding.com',
    info2: 'sales@nextlanding.com',
  },
  {
    icon: 'tabler:clock',
    title: 'Working Hours',
    info: 'Monday - Friday: 8am - 6pm',
    info2: 'Weekend: 10am - 4pm',
  },
]

const Contact = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='container'>
        {/* Header */}
        <div className='text-center mb-16 max-w-3xl mx-auto'>
          <h1 className='text-4xl sm:text-5xl font-bold text-midnight_text mb-6'>
            Get in Touch With Us
          </h1>
          <p className='text-lg text-black/70'>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-header to-white p-6 rounded-2xl shadow-featureShadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Icon icon={item.icon} className='text-3xl text-primary' />
              </div>
              <h3 className='text-lg font-bold text-midnight_text mb-3'>
                {item.title}
              </h3>
              <p className='text-sm text-black/70 mb-1'>{item.info}</p>
              <p className='text-sm text-black/70'>{item.info2}</p>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div>
            <h2 className='text-3xl font-bold text-midnight_text mb-6'>
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Map & Additional Info */}
          <div>
            <h2 className='text-3xl font-bold text-midnight_text mb-6'>
              Our Location
            </h2>
            
            {/* Map Placeholder */}
            <div className='relative h-80 bg-gradient-to-br from-primary/10 to-deepSlate/10 rounded-2xl overflow-hidden mb-6 flex items-center justify-center shadow-featureShadow'>
              <div className='text-center'>
                <Icon
                  icon='tabler:map-pin'
                  className='text-7xl text-primary mb-4 mx-auto'
                />
                <p className='text-lg text-midnight_text font-semibold'>
                  Interactive Map
                </p>
                <p className='text-sm text-black/60 mt-2'>
                  123 Business Street, San Francisco, CA 94102
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className='bg-gradient-to-br from-header to-white p-8 rounded-2xl shadow-featureShadow'>
              <h3 className='text-2xl font-bold text-midnight_text mb-6'>
                Frequently Asked
              </h3>
              <div className='space-y-4'>
                <div>
                  <h4 className='font-semibold text-midnight_text mb-2 flex items-start gap-2'>
                    <Icon
                      icon='tabler:circle-check'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    What are your response times?
                  </h4>
                  <p className='text-sm text-black/70 ml-7'>
                    We typically respond within 2-4 business hours during working
                    days.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-midnight_text mb-2 flex items-start gap-2'>
                    <Icon
                      icon='tabler:circle-check'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Do you offer 24/7 support?
                  </h4>
                  <p className='text-sm text-black/70 ml-7'>
                    Yes, Premium and Enterprise customers have access to 24/7
                    support.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-midnight_text mb-2 flex items-start gap-2'>
                    <Icon
                      icon='tabler:circle-check'
                      className='text-primary text-xl flex-shrink-0 mt-0.5'
                    />
                    Can I schedule a demo?
                  </h4>
                  <p className='text-sm text-black/70 ml-7'>
                    Absolutely! Fill out the form and select "Demo Request" to
                    schedule a personalized demo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className='mt-16 text-center'>
          <h3 className='text-2xl font-bold text-midnight_text mb-6'>
            Follow Us on Social Media
          </h3>
          <div className='flex justify-center gap-4'>
            <a
              href='#'
              className='w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110'>
              <Icon icon='mdi:facebook' className='text-2xl' />
            </a>
            <a
              href='#'
              className='w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110'>
              <Icon icon='mdi:twitter' className='text-2xl' />
            </a>
            <a
              href='#'
              className='w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110'>
              <Icon icon='mdi:linkedin' className='text-2xl' />
            </a>
            <a
              href='#'
              className='w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110'>
              <Icon icon='mdi:instagram' className='text-2xl' />
            </a>
            <a
              href='#'
              className='w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110'>
              <Icon icon='mdi:youtube' className='text-2xl' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
