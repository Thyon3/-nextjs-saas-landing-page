'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '/images/people/user.png',
    bio: 'Visionary leader with 15+ years in fintech',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    image: '/images/people/user.png',
    bio: 'Tech expert passionate about payment innovation',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: '/images/people/user.png',
    bio: 'Creative designer focused on user experience',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Head of Engineering',
    image: '/images/people/user.png',
    bio: 'Building scalable payment infrastructure',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
]

const values = [
  {
    icon: 'tabler:target',
    title: 'Our Mission',
    description:
      'To revolutionize payment processing by making it simple, secure, and accessible for businesses of all sizes.',
  },
  {
    icon: 'tabler:eye',
    title: 'Our Vision',
    description:
      'To become the world\'s most trusted payment platform, empowering millions of businesses globally.',
  },
  {
    icon: 'tabler:heart',
    title: 'Our Values',
    description:
      'Innovation, integrity, and customer success drive everything we do. We believe in transparency and excellence.',
  },
]

const milestones = [
  { year: '2020', event: 'Company Founded', description: 'Started with a vision to transform payments' },
  { year: '2021', event: '10K+ Customers', description: 'Reached our first major milestone' },
  { year: '2022', event: 'Series A Funding', description: 'Raised $20M to scale operations' },
  { year: '2023', event: 'Global Expansion', description: 'Expanded to 50+ countries' },
  { year: '2024', event: '100K+ Customers', description: 'Became industry leader' },
  { year: '2026', event: 'AI Integration', description: 'Launched AI-powered fraud detection' },
]

const About = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='container'>
        {/* Hero Section */}
        <div className='max-w-4xl mx-auto text-center mb-20'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-midnight_text mb-6'>
            Building the Future of Payments
          </h1>
          <p className='text-lg sm:text-xl text-black/70 leading-relaxed'>
            We're on a mission to make payment processing simple, secure, and
            accessible for every business. Our platform combines cutting-edge
            technology with exceptional customer service to deliver the best
            payment experience.
          </p>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-20'>
          <div className='text-center'>
            <div className='text-5xl font-bold text-primary mb-2'>100K+</div>
            <p className='text-lg text-black/70'>Active Customers</p>
          </div>
          <div className='text-center'>
            <div className='text-5xl font-bold text-primary mb-2'>150+</div>
            <p className='text-lg text-black/70'>Countries</p>
          </div>
          <div className='text-center'>
            <div className='text-5xl font-bold text-primary mb-2'>$50B+</div>
            <p className='text-lg text-black/70'>Processed</p>
          </div>
          <div className='text-center'>
            <div className='text-5xl font-bold text-primary mb-2'>99.9%</div>
            <p className='text-lg text-black/70'>Uptime</p>
          </div>
        </div>

        {/* Values Section */}
        <div className='mb-20'>
          <h2 className='text-4xl font-bold text-midnight_text text-center mb-12'>
            What Drives Us
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {values.map((value, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-header to-white p-8 rounded-2xl shadow-featureShadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
                <div className='w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6'>
                  <Icon icon={value.icon} className='text-4xl text-primary' />
                </div>
                <h3 className='text-2xl font-bold text-midnight_text mb-4'>
                  {value.title}
                </h3>
                <p className='text-lg text-black/70 leading-relaxed'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className='mb-20 bg-gradient-to-b from-white to-header py-16 -mx-4 px-4 sm:mx-0 sm:px-0 rounded-3xl'>
          <h2 className='text-4xl font-bold text-midnight_text text-center mb-12'>
            Our Journey
          </h2>
          <div className='max-w-4xl mx-auto'>
            <div className='space-y-8'>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className='flex gap-6 items-start group'>
                  <div className='flex-shrink-0'>
                    <div className='w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300'>
                      {milestone.year}
                    </div>
                  </div>
                  <div className='flex-1 bg-white p-6 rounded-xl shadow-featureShadow group-hover:shadow-xl transition-all duration-300'>
                    <h4 className='text-xl font-bold text-midnight_text mb-2'>
                      {milestone.event}
                    </h4>
                    <p className='text-base text-black/70'>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className='text-4xl font-bold text-midnight_text text-center mb-4'>
            Meet Our Team
          </h2>
          <p className='text-lg text-black/60 text-center mb-12 max-w-2xl mx-auto'>
            Our diverse team of experts is dedicated to building the best payment
            platform in the world.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className='bg-white rounded-2xl shadow-featureShadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group'>
                <div className='relative h-64 overflow-hidden'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-midnight_text/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 gap-3'>
                    <a
                      href={member.social.linkedin}
                      className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'>
                      <Icon icon='mdi:linkedin' className='text-xl' />
                    </a>
                    <a
                      href={member.social.twitter}
                      className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'>
                      <Icon icon='mdi:twitter' className='text-xl' />
                    </a>
                  </div>
                </div>
                <div className='p-6 text-center'>
                  <h3 className='text-xl font-bold text-midnight_text mb-2'>
                    {member.name}
                  </h3>
                  <p className='text-primary font-semibold mb-3'>{member.role}</p>
                  <p className='text-sm text-black/60'>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className='mt-20 bg-gradient-to-r from-primary to-deepSlate rounded-3xl p-12 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Want to Join Our Team?
          </h2>
          <p className='text-lg text-white/90 mb-8 max-w-2xl mx-auto'>
            We're always looking for talented individuals who share our passion
            for innovation and excellence.
          </p>
          <button className='bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 inline-flex items-center gap-3'>
            View Open Positions
            <Icon icon='tabler:arrow-right' className='text-2xl' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
