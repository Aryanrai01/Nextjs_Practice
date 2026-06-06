"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { posts } from './posts'


export default function BlogIndex() {
  const [query, setQuery] = useState('')

  const filtered = posts.filter(
    (p) => p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">Insights, design notes, and engineering stories from our team.</p>
        </header>

        <div className="mb-6 flex items-center gap-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts"
            className="w-full max-w-md rounded-lg border border-gray-200 px-4 py-2"
          />
          <Link href="/blog" className="text-sm text-gray-500">All posts</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((post) => (
            <article key={post.slug} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-lg bg-gray-100 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}


