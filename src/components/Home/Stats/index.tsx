'use client'
import { useCounterAnimation } from '@/hooks/useCounterAnimation'
import { StatData } from '@/types/stats'
import { Icon } from '@iconify/react/dist/iconify.js'

const statsData: StatData[] = [
  {
    id: 1,
    value: 100,
    suffix: 'K+',
    label: 'Active Users',
    prefix: '',
  },
  {
    id: 2,
    value: 50,
    suffix: 'M+',
    label: 'Transactions Processed',
    prefix: '$',
  },
  {
    id: 3,
    value: 99,
    suffix: '%',
    label: 'Customer Satisfaction',
    prefix: '',
    decimals: 1,
  },
  {
    id: 4,
    value: 150,
    suffix: '+',
    label: 'Countries Supported',
    prefix: '',
  },
]

const StatCard = ({ stat }: { stat: StatData }) => {
  const { count, ref } = useCounterAnimation({
    end: stat.value,
    duration: 2500,
    decimals: stat.decimals || 0,
  })

  return (
    <div
      ref={ref}
      className='flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-featureShadow hover:shadow-xl transition-all duration-300 group hover:-translate-y-2'>
      <div className='text-5xl sm:text-6xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300'>
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <p className='text-lg sm:text-xl text-black/70 font-medium text-center group-hover:text-midnight_text transition-colors duration-300'>
        {stat.label}
      </p>
    </div>
  )
}

const Stats = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-white to-header relative overflow-hidden'>
      {/* Decorative background elements */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-deepSlate/5 rounded-full blur-3xl'></div>
      
      <div className='container relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-semibold text-midnight_text mb-6'>
            Trusted by thousands worldwide
          </h2>
          <p className='text-lg text-black/60 max-w-2xl mx-auto'>
            Our platform is growing rapidly, helping businesses streamline their
            payment processes and achieve their financial goals.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
