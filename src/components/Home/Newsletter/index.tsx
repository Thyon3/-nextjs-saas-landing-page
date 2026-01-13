'use client'
import { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import toast from 'react-hot-toast'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast.error('Please enter your email address', {
        icon: '📧',
        duration: 3000,
      })
      return
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address', {
        icon: '⚠️',
        duration: 3000,
      })
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast.success('Thanks for subscribing! Check your inbox for confirmation.', {
        icon: '🎉',
        duration: 4000,
      })
      setEmail('')
      setIsLoading(false)
    }, 1500)
  }

  return (
    <section className='py-20 bg-gradient-to-r from-primary to-deepSlate relative overflow-hidden'>
      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl'></div>

      <div className='container relative z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <Icon
            icon='tabler:mail'
            className='text-6xl text-white mx-auto mb-6'
          />
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-6'>
            Stay Updated with Our Newsletter
          </h2>
          <p className='text-lg sm:text-xl text-white/90 mb-10'>
            Subscribe to get the latest updates, tips, and exclusive offers
            delivered straight to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto'>
            <div className='flex-1 relative'>
              <Icon
                icon='tabler:mail'
                className='absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-black/40'
              />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email address'
                className='w-full pl-14 pr-4 py-5 rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300'
                disabled={isLoading}
              />
            </div>
            <button
              type='submit'
              disabled={isLoading}
              className='bg-midnight_text text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-midnight_text/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap'>
              {isLoading ? (
                <>
                  <Icon icon='tabler:loader-2' className='text-2xl animate-spin' />
                  Subscribing...
                </>
              ) : (
                <>
                  Subscribe Now
                  <Icon icon='tabler:arrow-right' className='text-2xl' />
                </>
              )}
            </button>
          </form>

          <p className='text-sm text-white/70 mt-6'>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
