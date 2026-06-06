"use client"

import React, { useMemo, useState } from 'react'

type Product = {
  id: number
  name: string
  category: string
  price: number
  rating: number
  stock: number
  tags: string[]
  description: string
  status?: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Aurora Smart Speaker',
    category: 'Electronics',
    price: 129.99,
    rating: 4.8,
    stock: 12,
    tags: ['smart', 'wifi', 'voice'],
    description: 'A compact speaker with voice control and premium sound.',
    status: 'Bestseller',
  },
  {
    id: 2,
    name: 'Lumen Leather Jacket',
    category: 'Clothing',
    price: 249.0,
    rating: 4.6,
    stock: 6,
    tags: ['premium', 'winter', 'stylish'],
    description: 'Classic fit with premium leather and a tailored silhouette.',
    status: 'New Arrival',
  },
  {
    id: 3,
    name: 'Atlas Daypack',
    category: 'Accessories',
    price: 79.99,
    rating: 4.7,
    stock: 18,
    tags: ['travel', 'durable', 'waterproof'],
    description: 'A rugged daypack built for adventure and everyday use.',
  },
  {
    id: 4,
    name: 'Edge Running Shoes',
    category: 'Shoes',
    price: 119.99,
    rating: 4.5,
    stock: 0,
    tags: ['performance', 'comfort', 'lightweight'],
    description: 'High-performance shoes with responsive cushioning.',
  },
  {
    id: 5,
    name: 'Nova Desk Lamp',
    category: 'Home',
    price: 59.5,
    rating: 4.4,
    stock: 24,
    tags: ['adjustable', 'led', 'modern'],
    description: 'A minimalist lamp with adjustable warmth and dimming.',
  },
  {
    id: 6,
    name: 'Cove Ceramic Mug Set',
    category: 'Home',
    price: 34.0,
    rating: 4.3,
    stock: 32,
    tags: ['kitchen', 'gift', 'ceramic'],
    description: 'A set of handcrafted mugs with a timeless finish.',
  },
  {
    id: 7,
    name: 'Pulse Fitness Band',
    category: 'Electronics',
    price: 89.99,
    rating: 4.5,
    stock: 14,
    tags: ['health', 'tracker', 'waterproof'],
    description: 'A sleek fitness tracker with heart rate and sleep monitoring.',
  },
  {
    id: 8,
    name: 'Solstice Sunglasses',
    category: 'Accessories',
    price: 69.0,
    rating: 4.2,
    stock: 17,
    tags: ['uv protection', 'stylish', 'polarized'],
    description: 'Stylish polarized sunglasses for everyday wear.',
  },
  {
    id: 9,
    name: 'Woven Knit Sweater',
    category: 'Clothing',
    price: 89.99,
    rating: 4.7,
    stock: 9,
    tags: ['cozy', 'winter', 'soft'],
    description: 'A soft knit sweater with a relaxed yet polished fit.',
  },
  {
    id: 10,
    name: 'Evergreen Journal',
    category: 'Books',
    price: 21.99,
    rating: 4.9,
    stock: 42,
    tags: ['writing', 'paper', 'gift'],
    description: 'A premium notebook designed for daily planning and notes.',
  },
  {
    id: 11,
    name: 'Echo Thermal Bottle',
    category: 'Accessories',
    price: 39.99,
    rating: 4.6,
    stock: 27,
    tags: ['travel', 'insulated', 'eco'],
    description: 'Keeps drinks hot or cold for hours with a leak-proof lid.',
  },
  {
    id: 12,
    name: 'Horizon Denim Shirt',
    category: 'Clothing',
    price: 54.99,
    rating: 4.5,
    stock: 20,
    tags: ['casual', 'denim', 'everyday'],
    description: 'A lightweight denim shirt with a versatile fit.',
  },
  {
    id: 13,
    name: 'Stellar Wireless Headphones',
    category: 'Electronics',
    price: 199.99,
    rating: 4.8,
    stock: 8,
    tags: ['noise-canceling', 'wireless', 'comfort'],
    description: 'Premium noise-canceling headphones with long battery life.',
    status: 'Top Rated',
  },
  {
    id: 14,
    name: 'Lattice Serving Tray',
    category: 'Home',
    price: 49.99,
    rating: 4.4,
    stock: 15,
    tags: ['dining', 'decor', 'handcrafted'],
    description: 'A stylish serving tray for entertaining guests.',
  },
  {
    id: 15,
    name: 'Ridge Trail Boots',
    category: 'Shoes',
    price: 159.99,
    rating: 4.7,
    stock: 5,
    tags: ['outdoor', 'durable', 'waterproof'],
    description: 'Rugged boots built for trail adventures and all-day comfort.',
  },
  {
    id: 16,
    name: 'Luna Candle Set',
    category: 'Home',
    price: 29.99,
    rating: 4.6,
    stock: 30,
    tags: ['scented', 'relaxing', 'gift'],
    description: 'A set of aromatic candles for calming spaces.',
  },
  {
    id: 17,
    name: 'Mossfield Chinos',
    category: 'Clothing',
    price: 69.99,
    rating: 4.3,
    stock: 26,
    tags: ['smart', 'lightweight', 'stretch'],
    description: 'Versatile chinos that move easily from day to night.',
  },
  {
    id: 18,
    name: 'Breeze Running Shorts',
    category: 'Clothing',
    price: 34.99,
    rating: 4.5,
    stock: 22,
    tags: ['breathable', 'active', 'lightweight'],
    description: 'Comfortable shorts for workouts and warm-weather days.',
  },
  {
    id: 19,
    name: 'Serene Yoga Mat',
    category: 'Accessories',
    price: 59.99,
    rating: 4.7,
    stock: 14,
    tags: ['grip', 'cushion', 'non-slip'],
    description: 'A premium yoga mat with an extra cushioning layer.',
  },
  {
    id: 20,
    name: 'Cascadia Hiking Hat',
    category: 'Accessories',
    price: 24.99,
    rating: 4.4,
    stock: 19,
    tags: ['outdoor', 'sun protection', 'breathable'],
    description: 'A comfortable hat for trail days and outdoor adventures.',
  },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to high' },
  { value: 'price-high', label: 'Price: High to low' },
  { value: 'rating', label: 'Top rated' },
  { value: 'stock', label: 'In stock first' },
]

const categoryLabels = ['All', 'Electronics', 'Clothing', 'Home', 'Accessories', 'Shoes', 'Books']

const getStars = (rating: number) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating - fullStars >= 0.5
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {Array.from({ length: fullStars }, (_, index) => (
        <span key={index}>★</span>
      ))}
      {halfStar && <span>½</span>}
      <span className="text-xs text-slate-400">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [search, setSearch] = useState('')

  const filteredProducts = useMemo(() => {
    let list = products

    if (selectedCategory !== 'All') {
      list = list.filter((product) => product.category === selectedCategory)
    }

    if (search.trim()) {
      const query = search.toLowerCase()
      list = list.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    const sorted = [...list]
    if (sortBy === 'price-low') {
      sorted.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      sorted.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === 'stock') {
      sorted.sort((a, b) => b.stock - a.stock)
    }

    return sorted
  }, [selectedCategory, search, sortBy])

  const categoryCounts = useMemo(
    () =>
      categoryLabels.map((category) => ({
        category,
        count:
          category === 'All'
            ? products.length
            : products.filter((product) => product.category === category).length,
      })),
    []
  )

  const clearFilters = () => {
    setSelectedCategory('All')
    setSortBy('featured')
    setSearch('')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <header className="mb-10 rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/80 ring-1 ring-slate-200/80">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Products</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">A clean product catalog with category navigation and sorting.</h1>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Browse products by category, check inventory and ratings, and sort with confidence. The layered UI keeps everything accessible on desktop and mobile.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-50 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Products</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">{filteredProducts.length}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Categories</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">{categoryLabels.length}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Available</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">{products.filter((product) => product.stock > 0).length}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[260px_1fr]">
          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/70 ring-1 ring-slate-200/60">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-slate-900">Categories</h2>
                <button onClick={clearFilters} className="text-sm text-slate-500 hover:text-slate-800">Reset</button>
              </div>
              <div className="mt-6 space-y-3">
                {categoryCounts.map((item) => (
                  <button
                    key={item.category}
                    onClick={() => setSelectedCategory(item.category)}
                    className={`flex w-full items-center justify-between rounded-3xl px-4 py-3 text-left transition ${
                      selectedCategory === item.category
                        ? 'bg-slate-900 text-white shadow'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.category}</span>
                    <span className="rounded-full bg-slate-200 px-2 py-1 text-xs text-slate-700">{item.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/70 ring-1 ring-slate-200/60">
              <h2 className="text-lg font-semibold text-slate-900">Sort & filters</h2>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Sort by</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Search</label>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products, tags, descriptions"
                    className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  />
                </div>
              </div>
            </div>
          </aside>

          <main>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-500">Showing</p>
                <p className="text-2xl font-semibold text-slate-900">{filteredProducts.length} products</p>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <span className="text-sm text-slate-500">Category:</span>
                <span className="ml-2 font-medium text-slate-900">{selectedCategory}</span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <div key={product.id} className="overflow-hidden rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/70 ring-1 ring-slate-200">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">{product.category}</p>
                      <h3 className="mt-3 text-xl font-semibold text-slate-900">{product.name}</h3>
                    </div>
                    <span className="rounded-3xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">{product.status ?? 'Popular'}</span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">{product.description}</p>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <div>{getStars(product.rating)}</div>
                    <div className="text-lg font-semibold text-slate-900">${product.price.toFixed(2)}</div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <span className={`rounded-full px-3 py-1 text-sm font-medium ${product.stock > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                      {product.stock > 0 ? `In stock • ${product.stock}` : 'Out of stock'}
                    </span>
                    <button
                      className={`rounded-3xl px-5 py-2 text-sm font-semibold transition ${
                        product.stock > 0
                          ? 'bg-slate-900 text-white hover:bg-slate-800'
                          : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                      }`}
                      disabled={product.stock === 0}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
