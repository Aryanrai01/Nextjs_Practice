import type {ReactNode} from 'react'
import './globals.css'
import {Metadata} from 'next'

export const metadata:Metadata={
  title:{
    default:"Aryan's Next Practice",
    template:"%s | Aryan's Next Practice" 
  },
  description:"This is a practice project for Next.js by Aryan",
  openGraph:{
    siteName:"aryan-next-practice",
    
  }

}
import Link from 'next/link'

import {Inter} from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
weight: ['400', '500', '600', '700'],
display: 'swap',})




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Aryan's Next Practice</title>
      </head>
      <body className={inter.className}>
        <header>
          <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            <Link href="/">Portfolio</Link>
          </h1>
          <div className="hidden md:flex gap-8">
            <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Dashboard</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">about us</Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Contact us</Link>
            <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Our Projects</Link>
            <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Blog</Link>
            <Link href="/products" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Products</Link>
          </div>
        </div>
      </nav>
        </header>
        {children}
        <footer>My Footer</footer>
      </body>
    </html>
  )
}