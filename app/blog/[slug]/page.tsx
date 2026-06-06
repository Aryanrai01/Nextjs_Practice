import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '../posts'
import Link from 'next/link'
import type  {metadata} from "next"


type Props = {  params: Promise<{ slug: string }> }
    

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}


//Dynamic SEO metadata generation
export async function generateMetadata({ params }: Props): Promise<metadata> {
  const {slug} = await params;
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post not found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://yourdomain.com/blog/${post.slug}`,
      type: 'article',
    },
  }
}
export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <article className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
          <p className="mt-4 text-gray-600">{post.excerpt}</p>

          <div className="mt-8 space-y-6 text-gray-700">
            {post.content.map((paragraph, index) => (
              <p key={index} className="leading-8">{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
            <span>Thanks for reading.</span>
            <Link href="/blog" className="text-blue-600 hover:underline">Back to blog</Link>
          </div>
        </article>
      </div>
    </div>
  )
}
