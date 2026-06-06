"use client"

import React, { useState } from 'react'

const ContactField = ({
  label,
  name,
  value,
  type = 'text',
  rows,
  onChange,
}: {
  label: string
  name: string
  value: string
  type?: string
  rows?: number
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}) => (
  <label className="block">
    <span className="text-sm font-medium text-gray-700">{label}</span>
    {rows ? (
      <textarea
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    )}
  </label>
)

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const infoCards = [
    { title: 'Office', value: '123 Sunset Avenue, Suite 45', icon: '🏢' },
    { title: 'Email', value: 'hello@myapp.com', icon: '✉️' },
    { title: 'Phone', value: '+1 (555) 987-6543', icon: '📞' },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-10 text-white shadow-2xl shadow-slate-900/10 md:p-14">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Let's build something amazing together.</h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
              Whether you have a question, a project, or just want to say hi, our team is ready to help. Fill out the form or choose a contact method below.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.25fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/80 ring-1 ring-slate-200/70 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Send us a message</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Contact form</h2>
              </div>
              <div className="rounded-3xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                Usually replies within 24 hours
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <ContactField label="Full name" name="name" value={form.name} onChange={handleChange} />
                <ContactField label="Email address" name="email" type="email" value={form.email} onChange={handleChange} />
              </div>
              <ContactField label="Subject" name="subject" value={form.subject} onChange={handleChange} />
              <ContactField label="Message" name="message" rows={6} value={form.message} onChange={handleChange} />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Send message
                </button>
                {submitted && <p className="text-sm text-emerald-600">Thanks! Your message has been sent.</p>}
              </div>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/80 ring-1 ring-slate-200/70">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Contact information</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">Quick access</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Reach out directly using one of the methods below, or follow us on social media for the latest updates.
              </p>
              <div className="mt-6 space-y-4">
                {infoCards.map((card) => (
                  <div key={card.title} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-sky-500 text-lg shadow-sm text-white">{card.icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{card.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{card.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/30 ring-1 ring-slate-800/80">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Quick support</p>
              <h2 className="mt-4 text-2xl font-semibold">Need a demo?</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Schedule a personalized walkthrough with one of our specialists and discover how this dashboard can work for your business.
              </p>
              <div className="mt-6 space-y-3">
                <div className="rounded-3xl bg-slate-800/80 p-4">
                  <p className="text-sm text-slate-300">Support hours</p>
                  <p className="mt-1 text-base font-semibold">Mon - Fri, 9am - 6pm</p>
                </div>
                <button className="w-full rounded-3xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
                  Book a call
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
