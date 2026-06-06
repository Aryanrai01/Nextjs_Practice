"use client"
import {useRouter} from 'next/navigation'
import React from "react"

const Sparkline = ({ values = [] }: { values?: number[] }) => {
  const max = Math.max(...values, 1)
  return (
    <div className="flex items-end gap-1 h-12">
      {values.map((v, i) => (
        <div
          key={i}
          className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm w-2"
          style={{ height: `${(v / max) * 100}%` }}
        />
      ))}
    </div>
  )
}

export default function DashboardPage() {
   const router = useRouter()

   const onPress=()=>{
    router.push('/')
   }
  const stats = [
    { label: "Revenue", value: "$45.2k", sub: "+18%", color: "from-blue-500 to-blue-600" },
    { label: "Users", value: "2,543", sub: "+12%", color: "from-purple-500 to-purple-600" },
    { label: "Orders", value: "1,342", sub: "+4%", color: "from-green-500 to-green-600" },
    { label: "Visits", value: "12.4k", sub: "+6%", color: "from-orange-400 to-orange-500" },
  ]

  const recent = [
    { id: 1, title: "New user signup", subtitle: "Anna Smith", time: "1h" },
    { id: 2, title: "Order paid", subtitle: "#1245 — $79.99", time: "2h" },
    { id: 3, title: "Password changed", subtitle: "John D.", time: "6h" },
    { id: 4, title: "Backup completed", subtitle: "Database", time: "1d" },
  ]

  return (
    <div className="flex-1 ml-65 bg-gray-50 p-8 h-full">
      <header className="mb-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Overview of recent activity and key metrics</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:shadow">Share</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">New Report</button>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
            <div className={`bg-gradient-to-r ${s.color} p-3 rounded-md text-white inline-flex items-center gap-3`}>
              <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center font-semibold">{s.label[0]}</div>
              <div>
                <p className="text-sm opacity-90">{s.label}</p>
                <p className="text-xl font-bold mt-1">{s.value}</p>
              </div>
            </div>
            <div className="mt-3 text-sm text-gray-500">{s.sub} since last period</div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Performance</h2>
            <div className="text-sm text-gray-500">Last 30 days</div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex-1">
              <div className="h-52 bg-gradient-to-b from-white to-gray-50 rounded-lg flex items-end p-4">
                <Sparkline values={[40, 60, 50, 80, 70, 90, 100]} />
              </div>
            </div>

            <div className="w-48">
              <div className="text-sm text-gray-500">Top channels</div>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center justify-between text-sm">
                  <span>Organic</span>
                  <span className="font-semibold">54%</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span>Paid</span>
                  <span className="font-semibold">26%</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span>Referral</span>
                  <span className="font-semibold">20%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-md font-semibold text-gray-900">Quick Actions</h3>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button className="p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded">New User</button>
              <button className="p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded">Create Invoice</button>
              <button className="p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded">Export CSV</button>
              <button className="p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded">Settings</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-md font-semibold text-gray-900">Recent Activity</h3>
            <ul className="mt-3 space-y-3 text-sm text-gray-700">
              {recent.map((r) => (
                <li key={r.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{r.title}</p>
                    <p className="text-xs text-gray-500">{r.subtitle}</p>
                  </div>
                  <span className="text-xs text-gray-400">{r.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <div className=" flex items-center justify-center">
        <button onClick={onPress} className="bg-green-600 flex justify-center hover:bg-blue-600 text-white py-2 px-4 rounded mt-10">
        Go to Home page
      </button>
    </div>
      
    </div>
  )
}


