'use client'
import { useState, useEffect } from 'react'
import { Testimonial } from '@/types/testimonial'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc',
    content:
      'This payment platform has completely transformed how we handle transactions. The interface is intuitive, and the support team is exceptional. Our revenue processing time has decreased by 40%.',
    avatar: '/images/people/user.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Finance Director',
    company: 'Global Solutions Ltd',
    content:
      'We switched from our old payment processor and could not be happier. The automated invoicing and real-time analytics have saved us countless hours. Highly recommend to any growing business.',
    avatar: '/images/people/user.png',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'EcoStore',
    content:
      'As a small business owner, I needed a reliable and affordable payment solution. This platform exceeded all my expectations with its transparent pricing and excellent customer service.',
    avatar: '/images/people/user.png',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'CTO',
    company: 'InnovateCorp',
    content:
      'The API documentation is excellent, and integration was seamless. Our development team had the system up and running in just two days. The security features give us complete peace of mind.',
    avatar: '/images/people/user.png',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Operations Manager',
    company: 'Retail Plus',
    content:
      'Managing multiple payment methods was always a headache until we found this platform. Everything is centralized, reporting is straightforward, and reconciliation is now a breeze.',
    avatar: '/images/people/user.png',
    rating: 5,
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className='bg-white rounded-2xl p-8 shadow-featureShadow hover:shadow-xl transition-all duration-300 h-full flex flex-col'>
      <div className='flex gap-1 mb-6'>
        {[...Array(testimonial.rating)].map((_, index) => (
          <Icon
            key={index}
            icon='tabler:star-filled'
            className='text-2xl text-yellow-400'
          />
        ))}
      </div>

      <p className='text-lg text-black/80 leading-relaxed mb-8 flex-grow italic'>
        "{testimonial.content}"
      </p>

      <div className='flex items-center gap-4 pt-6 border-t border-black/10'>
        <div className='w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden'>
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={56}
            height={56}
            className='object-cover'
          />
        </div>
        <div>
          <h4 className='text-lg font-semibold text-midnight_text'>
            {testimonial.name}
          </h4>
          <p className='text-sm text-black/60'>
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const itemsPerView = 3
  const maxIndex = Math.max(0, testimonialsData.length - itemsPerView)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, maxIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  return (
    <section className='py-20 bg-header'>
      <div className='container'>
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4'>
            Testimonials
          </span>
          <h2 className='text-4xl sm:text-5xl font-semibold text-midnight_text mb-6'>
            What Our Customers Say
          </h2>
          <p className='text-lg text-black/60 max-w-2xl mx-auto'>
            Don't just take our word for it. Here's what our customers have to say
            about their experience with our platform.
          </p>
        </div>

        <div
          className='relative'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          {/* Desktop Carousel */}
          <div className='hidden lg:block overflow-hidden'>
            <div
              className='flex gap-6 transition-transform duration-500 ease-in-out'
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}>
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className='flex-shrink-0'
                  style={{ width: `calc(${100 / itemsPerView}% - 1rem)` }}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Tablet Carousel */}
          <div className='hidden md:block lg:hidden overflow-hidden'>
            <div
              className='flex gap-6 transition-transform duration-500 ease-in-out'
              style={{
                transform: `translateX(-${currentIndex * 50}%)`,
              }}>
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className='flex-shrink-0'
                  style={{ width: 'calc(50% - 0.75rem)' }}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile - Show All */}
          <div className='md:hidden grid grid-cols-1 gap-6'>
            {testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Navigation Buttons - Hidden on Mobile */}
          <div className='hidden md:flex items-center justify-center gap-4 mt-12'>
            <button
              onClick={handlePrev}
              className='w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'
              aria-label='Previous testimonial'>
              <Icon icon='tabler:chevron-left' className='text-3xl' />
            </button>
            <div className='flex gap-2'>
              {[...Array(maxIndex + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-black/20 hover:bg-black/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className='w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'
              aria-label='Next testimonial'>
              <Icon icon='tabler:chevron-right' className='text-3xl' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
