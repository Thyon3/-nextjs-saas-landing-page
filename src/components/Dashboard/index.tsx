'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'

const Dashboard = () => {
  const stats = [
    {
      icon: 'tabler:users',
      label: 'Total Transactions',
      value: '124',
      change: '+12%',
      isPositive: true,
    },
    {
      icon: 'tabler:wallet',
      label: 'Total Revenue',
      value: '$12,540',
      change: '+8%',
      isPositive: true,
    },
    {
      icon: 'tabler:chart-line',
      label: 'Active Plans',
      value: '3',
      change: '0%',
      isPositive: true,
    },
    {
      icon: 'tabler:bell',
      label: 'Notifications',
      value: '8',
      change: 'New',
      isPositive: true,
    },
  ]

  const recentTransactions = [
    {
      id: 1,
      type: 'Payment Received',
      amount: '+$1,250',
      date: 'Jan 12, 2026',
      status: 'Completed',
    },
    {
      id: 2,
      type: 'Subscription Renewal',
      amount: '-$99',
      date: 'Jan 10, 2026',
      status: 'Completed',
    },
    {
      id: 3,
      type: 'Payment Received',
      amount: '+$850',
      date: 'Jan 08, 2026',
      status: 'Completed',
    },
    {
      id: 4,
      type: 'Refund Processed',
      amount: '-$320',
      date: 'Jan 05, 2026',
      status: 'Pending',
    },
  ]

  return (
    <section className='py-20 bg-gradient-to-b from-white to-header'>
      <div className='container'>
        {/* User Profile Header */}
        <div className='bg-white rounded-2xl shadow-featureShadow p-8 mb-8'>
          <div className='flex flex-col md:flex-row items-center gap-6'>
            <div className='w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden'>
              <Image
                src='/images/people/user.png'
                alt='User Avatar'
                width={96}
                height={96}
                className='object-cover'
              />
            </div>
            <div className='flex-1 text-center md:text-left'>
              <h1 className='text-3xl font-bold text-midnight_text mb-2'>
                John Doe
              </h1>
              <p className='text-lg text-black/60 mb-4'>john.doe@example.com</p>
              <div className='flex flex-wrap gap-3 justify-center md:justify-start'>
                <span className='px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold'>
                  Pro Member
                </span>
                <span className='px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-semibold'>
                  Verified
                </span>
              </div>
            </div>
            <button className='bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2'>
              <Icon icon='tabler:edit' className='text-xl' />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl shadow-featureShadow p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
              <div className='flex items-start justify-between mb-4'>
                <div className='w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center'>
                  <Icon icon={stat.icon} className='text-3xl text-primary' />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    stat.isPositive
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'bg-red-50 text-red-600'
                  }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className='text-3xl font-bold text-midnight_text mb-2'>
                {stat.value}
              </h3>
              <p className='text-sm text-black/60'>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Recent Transactions */}
          <div className='lg:col-span-2 bg-white rounded-2xl shadow-featureShadow p-8'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-2xl font-bold text-midnight_text'>
                Recent Transactions
              </h2>
              <button className='text-primary font-semibold hover:underline'>
                View All
              </button>
            </div>
            <div className='space-y-4'>
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className='flex items-center justify-between p-4 border border-black/10 rounded-xl hover:border-primary/30 transition-all duration-300'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                      <Icon
                        icon={
                          transaction.amount.startsWith('+')
                            ? 'tabler:arrow-down-left'
                            : 'tabler:arrow-up-right'
                        }
                        className={`text-2xl ${
                          transaction.amount.startsWith('+')
                            ? 'text-emerald-600'
                            : 'text-red-600'
                        }`}
                      />
                    </div>
                    <div>
                      <h4 className='font-semibold text-midnight_text'>
                        {transaction.type}
                      </h4>
                      <p className='text-sm text-black/60'>{transaction.date}</p>
                    </div>
                  </div>
                  <div className='text-right'>
                    <p
                      className={`text-lg font-bold ${
                        transaction.amount.startsWith('+')
                          ? 'text-emerald-600'
                          : 'text-red-600'
                      }`}>
                      {transaction.amount}
                    </p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        transaction.status === 'Completed'
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'bg-yellow-50 text-yellow-600'
                      }`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className='bg-white rounded-2xl shadow-featureShadow p-8'>
            <h2 className='text-2xl font-bold text-midnight_text mb-6'>
              Quick Actions
            </h2>
            <div className='space-y-3'>
              <button className='w-full bg-primary text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-3'>
                <Icon icon='tabler:plus' className='text-2xl' />
                New Transaction
              </button>
              <button className='w-full bg-white border-2 border-primary text-primary px-6 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-3'>
                <Icon icon='tabler:download' className='text-2xl' />
                Export Data
              </button>
              <button className='w-full bg-white border-2 border-black/10 text-midnight_text px-6 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-3'>
                <Icon icon='tabler:settings' className='text-2xl' />
                Settings
              </button>
              <button className='w-full bg-white border-2 border-black/10 text-midnight_text px-6 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-3'>
                <Icon icon='tabler:help' className='text-2xl' />
                Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
