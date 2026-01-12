import React from 'react'
import Hero from '@/components/Home/Hero'
import People from '@/components/Home/People'
import Features from '@/components/Home/Features'
import Business from '@/components/Home/Business'
import Payment from '@/components/Home/Payment'
import Pricing from '@/components/Home/Pricing'
import { Metadata } from 'next'
import ContactForm from '@/components/Contact/Form'

export const metadata: Metadata = {
  title: 'Paidin - Next.js Landing Page',
  description: 'A modern landing page built with Next.js, TypeScript, and Tailwind CSS',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <People />
      <Features />
      <Business />
      <Payment />
      <Pricing />
      <ContactForm />
    </main>
  )
}
