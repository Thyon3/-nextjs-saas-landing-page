'use client'
import { Icon } from '@iconify/react/dist/iconify.js'

const partners = [
  { id: 1, name: 'Stripe', icon: 'simple-icons:stripe' },
  { id: 2, name: 'PayPal', icon: 'simple-icons:paypal' },
  { id: 3, name: 'Visa', icon: 'simple-icons:visa' },
  { id: 4, name: 'Mastercard', icon: 'simple-icons:mastercard' },
  { id: 5, name: 'American Express', icon: 'simple-icons:americanexpress' },
  { id: 6, name: 'Shopify', icon: 'simple-icons:shopify' },
  { id: 7, name: 'WooCommerce', icon: 'simple-icons:woocommerce' },
  { id: 8, name: 'Square', icon: 'simple-icons:square' },
]

const Partners = () => {
  return (
    <section className='py-16 bg-white border-y border-black/10'>
      <div className='container'>
        <div className='text-center mb-12'>
          <p className='text-sm font-semibold text-black/60 uppercase tracking-wider mb-2'>
            Trusted By Industry Leaders
          </p>
          <h3 className='text-2xl sm:text-3xl font-semibold text-midnight_text'>
            Integrated with Your Favorite Platforms
          </h3>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center'>
          {partners.map((partner) => (
            <div
              key={partner.id}
              className='group flex items-center justify-center w-full h-20 px-4 hover:scale-110 transition-transform duration-300 cursor-pointer'>
              <Icon
                icon={partner.icon}
                className='text-5xl text-black/40 group-hover:text-primary transition-colors duration-300'
              />
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <p className='text-base text-black/60'>
            And many more. Connect with 100+ payment gateways and platforms.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Partners
