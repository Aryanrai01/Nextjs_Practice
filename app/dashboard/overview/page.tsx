'use client'

import React from 'react'

// SVG Icons as React components
const DollarIcon = () => (
  <svg className="w-12 h-12 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-12 h-12 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10h.01M13 16h-1v-4h-1m4-4h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const TrendingIcon = () => (
  <svg className="w-12 h-12 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const ActivityIcon = () => (
  <svg className="w-12 h-12 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const BarChartIcon = () => (
  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

export default function OverviewPage() {
  // Sample data
  const stats = [
    {
      label: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1%',
      icon: DollarIcon,
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: 'Active Users',
      value: '2,543',
      change: '+15.3%',
      icon: UsersIcon,
      color: 'from-purple-500 to-purple-600',
    },
    {
      label: 'Growth Rate',
      value: '12.5%',
      change: '+4.3%',
      icon: TrendingIcon,
      color: 'from-green-500 to-green-600',
    },
    {
      label: 'Engagement',
      value: '68%',
      change: '+2.5%',
      icon: ActivityIcon,
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const recentActivity = [
    {
      id: 1,
      title: 'New user registration',
      description: 'John Doe created a new account',
      time: '2 hours ago',
      type: 'user',
    },
    {
      id: 2,
      title: 'Payment received',
      description: 'Transaction of $299.99 completed',
      time: '4 hours ago',
      type: 'payment',
    },
    {
      id: 3,
      title: 'System update',
      description: 'Database backup completed successfully',
      time: '6 hours ago',
      type: 'system',
    },
    {
      id: 4,
      title: 'New feedback',
      description: 'Customer submitted a feature request',
      time: '8 hours ago',
      type: 'feedback',
    },
  ]

  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 200 },
    { name: 'Apr', value: 278 },
    { name: 'May', value: 189 },
    { name: 'Jun', value: 239 },
  ]

  const maxValue = Math.max(...chartData.map((d) => d.value))

  return (
    <div className="flex-1 ml-65 bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's your dashboard summary.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${stat.color} p-4 text-white`}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium opacity-90">{stat.label}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <IconComponent className="w-12 h-12 opacity-80" />
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50">
                <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
                <span className="text-gray-600 text-sm ml-2">from last month</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <BarChartIcon />
                Monthly Performance
              </h2>
              <p className="text-gray-600 text-sm mt-1">Revenue trends over the past 6 months</p>
            </div>

            {/* Simple Bar Chart */}
            <div className="h-64 flex items-end justify-around gap-2 px-2">
              {chartData.map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="relative h-48 w-full bg-gray-100 rounded-t-lg flex items-end justify-center">
                    <div
                      className="bg-gradient-to-t from-blue-500 to-blue-400 w-full rounded-t-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-500"
                      style={{ height: `${(data.value / maxValue) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs font-semibold text-gray-700 mt-2">{data.name}</p>
                  <p className="text-xs text-gray-500">${data.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          {/* Top Products */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Products</h3>
            <div className="space-y-3">
              {[
                { name: 'Product A', sales: 1234 },
                { name: 'Product B', sales: 892 },
                { name: 'Product C', sales: 654 },
              ].map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-sm font-medium text-gray-700">{product.name}</span>
                  <span className="text-sm font-bold text-blue-600">{product.sales}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Goals Progress</h3>
            <div className="space-y-3">
              {[
                { label: 'Sales Target', percentage: 75 },
                { label: 'User Growth', percentage: 60 },
                { label: 'Support Tickets', percentage: 45 },
              ].map((goal, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{goal.label}</span>
                    <span className="text-xs font-bold text-gray-600">{goal.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${goal.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activity.type === 'user'
                    ? 'bg-blue-100'
                    : activity.type === 'payment'
                      ? 'bg-green-100'
                      : activity.type === 'system'
                        ? 'bg-purple-100'
                        : 'bg-orange-100'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.type === 'user'
                      ? 'bg-blue-500'
                      : activity.type === 'payment'
                        ? 'bg-green-500'
                        : activity.type === 'system'
                          ? 'bg-purple-500'
                          : 'bg-orange-500'
                  }`}
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
              <span className="text-xs text-gray-500 flex-shrink-0">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <p className="text-gray-600 text-sm font-medium">Conversion Rate</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">3.24%</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <p className="text-gray-600 text-sm font-medium">Avg. Order Value</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$129.50</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <p className="text-gray-600 text-sm font-medium">Customer Satisfaction</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">4.8/5</p>
        </div>
      </div>
    </div>
  )
}
