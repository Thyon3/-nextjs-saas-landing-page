'use client'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'

const CTA = () => {
  return (
    <section className='py-20 bg-midnight_text relative overflow-hidden'>
      {/* Decorative background patterns */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full'></div>
        <div className='absolute bottom-10 right-10 w-80 h-80 border-4 border-white rounded-full'></div>
        <div className='absolute top-1/2 left-1/4 w-40 h-40 border-4 border-white rounded-full'></div>
      </div>

      {/* Gradient overlays */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent'></div>
      <div className='absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-deepSlate/20 to-transparent'></div>

      <div className='container relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8'>
            <Icon icon='tabler:sparkles' className='text-2xl text-white' />
            <span className='text-white font-semibold'>Limited Time Offer</span>
          </div>

          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
            Ready to Transform Your Payment Process?
          </h2>

          <p className='text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto'>
            Join thousands of businesses already using our platform. Get started
            today with a 14-day free trial. No credit card required.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button className='group bg-white text-midnight_text px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105'>
              Get Started Free
              <Icon
                icon='tabler:arrow-right'
                className='text-2xl group-hover:translate-x-1 transition-transform duration-300'
              />
            </button>
            <button className='group bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-midnight_text transition-all duration-300 flex items-center gap-3'>
              <Icon icon='tabler:video' className='text-2xl' />
              Watch Demo
            </button>
          </div>

          <div className='mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8'>
            <div className='flex flex-col items-center'>
              <Icon
                icon='tabler:check-circle'
                className='text-5xl text-emerald-400 mb-3'
              />
              <p className='text-white/90 font-medium'>No Credit Card Required</p>
            </div>
            <div className='flex flex-col items-center'>
              <Icon
                icon='tabler:clock'
                className='text-5xl text-emerald-400 mb-3'
              />
              <p className='text-white/90 font-medium'>14-Day Free Trial</p>
            </div>
            <div className='flex flex-col items-center'>
              <Icon
                icon='tabler:headset'
                className='text-5xl text-emerald-400 mb-3'
              />
              <p className='text-white/90 font-medium'>24/7 Support Included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
