"use client"

import React, { useState } from 'react'

const statusStyles = {
  live: 'bg-emerald-100 text-emerald-700',
  planning: 'bg-sky-100 text-sky-700',
  review: 'bg-amber-100 text-amber-700',
  paused: 'bg-red-100 text-red-700',
}

const projects = [
  {
    name: 'Aurora Analytics',
    description: 'Building a data platform for real-time user funnels and dashboards.',
    status: 'live',
    progress: 82,
    due: 'Jun 14',
    team: ['AL', 'MJ', 'RK'],
  },
  {
    name: 'Nova CRM',
    description: 'Designing a customer relationship tool with AI-powered follow-ups.',
    status: 'planning',
    progress: 28,
    due: 'Jul 02',
    team: ['SJ', 'CL', 'BT'],
  },
  {
    name: 'Pulse UI Kit',
    description: 'Creating reusable components and theme system for marketing sites.',
    status: 'review',
    progress: 68,
    due: 'May 29',
    team: ['NK', 'AM', 'PF'],
  },
  {
    name: 'Zenith Mobile',
    description: 'Launching the mobile companion app for on-the-go management.',
    status: 'live',
    progress: 91,
    due: 'Jun 01',
    team: ['EH', 'DS', 'JL'],
  },
  {
    name: 'Orbit Helpdesk',
    description: 'Implementing ticket automation and multi-channel support flow.',
    status: 'paused',
    progress: 43,
    due: 'Aug 10',
    team: ['VB', 'KF', 'SR'],
  },
  {
    name: 'Echo Insights',
    description: 'Exploring predictive analytics for retention and growth.',
    status: 'planning',
    progress: 19,
    due: 'Sep 05',
    team: ['PL', 'UR', 'TD'],
  },
]

const sections = [
  {
    title: 'Why Projects Matter',
    content:
      'Stay aligned on priorities and ship value faster. Our project workspace helps teams track milestones, manage scope, and keep stakeholders informed with clear visuals.',
  },
  {
    title: 'Milestone Roadmap',
    content:
      'Visualize key milestones across your product timeline so nothing slips. Each project card includes progress, deadlines, and responsible contributors.',
  },
  {
    title: 'Team Collaboration',
    content:
      'Connect designers, engineers, and product owners in one place. Collaboration is easier when roles, progress, and blockers are visible at a glance.',
  },
  {
    title: 'Continuous Delivery',
    content:
      'Track delivery cadence with a focus on small, iterative releases. Frequent reviews and clear handoffs keep momentum high and risk low.',
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((project) => project.status === filter)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200/80">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Projects</p>
              <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Track every initiative with clarity</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Manage your project portfolio with a modern workspace designed for visibility, execution, and team collaboration. Scroll for detailed sections and keep every initiative moving forward.
              </p>
            </div>
            <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-lg">
              <div className="space-y-4">
                <div className="rounded-3xl bg-slate-900 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Current projects</p>
                  <p className="mt-3 text-3xl font-semibold">6 active</p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-3xl bg-slate-900/95 p-4">
                    <p className="text-sm text-slate-400">Average progress</p>
                    <p className="mt-2 text-2xl font-semibold">54%</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/95 p-4">
                    <p className="text-sm text-slate-400">Team members</p>
                    <p className="mt-2 text-2xl font-semibold">18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8">
          <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Project board</h2>
                <p className="mt-2 text-sm text-slate-500">Filter the board to focus on the work that matters most.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['all', 'live', 'planning', 'review', 'paused'].map((value) => (
                  <button
                    key={value}
                    onClick={() => setFilter(value)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      filter === value
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {value === 'all' ? 'All' : value.charAt(0).toUpperCase() + value.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-2">
              {filteredProjects.map((project) => (
                <div key={project.name} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold text-slate-900">{project.name}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${statusStyles[project.status as keyof typeof statusStyles]}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-200">
                        <div className="h-2 rounded-full bg-sky-500" style={{ width: `${project.progress}%` }} />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
                      <div>Due {project.due}</div>
                      <div className="flex -space-x-3">
                        {project.team.map((member) => (
                          <div key={member} className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-slate-900 text-xs font-semibold text-white shadow-sm">
                            {member}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/70">
            <h2 className="text-2xl font-semibold text-slate-900">Insights</h2>
            <div className="mt-6 grid gap-6 xl:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Velocity</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">+14%</p>
                <p className="mt-2 text-sm text-slate-500">Compared to last month</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Quality</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">92%</p>
                <p className="mt-2 text-sm text-slate-500">Success rate for recent launches</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Collaboration</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">18 members</p>
                <p className="mt-2 text-sm text-slate-500">Actively working across projects</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 to-slate-900 p-8 text-white shadow-xl shadow-slate-900/40">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Scroll section</p>
                <h2 className="mt-4 text-3xl font-semibold">Dive deeper into every milestone</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                  As you scroll, each section reveals new project details, next steps, and team accountability. Keep your roadmap visible and your execution crisp.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sections.map((section) => (
                  <div key={section.title} className="rounded-3xl bg-slate-950/80 p-5 ring-1 ring-white/10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">{section.title}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
