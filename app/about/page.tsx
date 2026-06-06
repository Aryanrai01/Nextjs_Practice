"use client"

import React, { useState } from 'react'

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">{children}</span>
  )
}

function TeamCard({ member }: { member: { name: string; role: string; bio: string } }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex gap-4">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">{member.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-gray-900">{member.name}</h4>
          <span className="text-xs text-gray-500">{member.role}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{member.bio}</p>
      </div>
    </div>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <button onClick={() => setOpen(!open)} className="w-full p-4 flex items-center justify-between">
        <div className="text-left">
          <p className="font-medium text-gray-900">{q}</p>
        </div>
        <div className="text-sm text-blue-600">{open ? '−' : '+'}</div>
      </button>
      {open && <div className="px-4 pb-4 text-sm text-gray-600">{a}</div>}
    </div>
  )
}

export default function AboutPage() {
  const team = [
    { name: 'Aisha Khan', role: 'CEO', bio: 'Leads vision and strategy.' },
    { name: 'Liam Smith', role: 'CTO', bio: 'Builds scalable systems.' },
    { name: 'Sofia Lopez', role: 'Product', bio: 'Designs delightful experiences.' },
  ]

  const faqs = [
    { q: 'What is MyApp?', a: 'MyApp is a modern dashboard starter built with Next.js and Tailwind CSS.' },
    { q: 'How do I contribute?', a: 'Open a PR with your improvements and follow the contribution guide.' },
    { q: 'Where can I report bugs?', a: 'Create an issue in the repo with steps to reproduce.' },
  ]

  return (
    <div className="flex-1 bg-gray-50">
      <header className="mb-8 px-6 py-8 lg:px-12">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">We build intuitive admin experiences focused on clarity, performance, and delightful interactions. Our goal is to provide a solid starting point for modern web applications.</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Mission</h2>
          <p className="text-gray-700 mb-4">To empower teams to ship faster with clean, accessible, and performant admin interfaces that scale with their business.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Built with DX in mind</h3>
              <p className="text-sm text-gray-600 mt-2">Easy to customize and extend.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Performance first</h3>
              <p className="text-sm text-gray-600 mt-2">Optimized for fast load times and snappy interactions.</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">History</h3>
            <ol className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="w-3 h-3 mt-2 rounded-full bg-blue-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Founded</div>
                  <div className="text-sm text-gray-600">Established in 2020 to simplify admin tooling.</div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-3 h-3 mt-2 rounded-full bg-green-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">First release</div>
                  <div className="text-sm text-gray-600">Launched a minimal dashboard MVP in 2021.</div>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900">Quick Facts</h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="p-3 bg-gray-50 rounded">
                <div className="text-sm text-gray-500">Users</div>
                <div className="text-lg font-bold text-gray-900">12.4k</div>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <div className="text-sm text-gray-500">Servers</div>
                <div className="text-lg font-bold text-gray-900">8</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900">Core Values</h3>
            <div className="mt-3 flex flex-col gap-2">
              <Badge>Clarity</Badge>
              <Badge>Performance</Badge>
              <Badge>Empathy</Badge>
            </div>
          </div>
        </aside>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Meet the team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900">FAQ</h3>
            <div className="mt-3 space-y-2">
              {faqs.map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="text-sm mt-2">Want to partner or contribute? Reach out and we’ll get back to you.</p>
            <div className="mt-4">
              <a href="/contact" className="inline-block px-4 py-2 bg-white text-purple-600 rounded-lg font-medium">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
