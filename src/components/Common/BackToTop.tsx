'use client'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 400px
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 w-14 h-14 bg-primary text-white rounded-full shadow-2xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center group ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      aria-label='Back to top'>
      <Icon
        icon='tabler:arrow-up'
        className='text-3xl group-hover:-translate-y-1 transition-transform duration-300'
      />
    </button>
  )
}

export default BackToTop
