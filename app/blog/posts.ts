const postThemes = [
  'designing interfaces',
  'optimizing performance',
  'scaling teams',
  'shipping faster',
  'simplifying workflows',
  'improving accessibility',
]

const authors = ['Aisha Khan', 'Liam Smith', 'Sofia Lopez', 'Marcus Reed']

const legacyPosts = [
  {
    slug: 'nextjs',
    title: 'Next.js is the Best Framework for Modern Web Apps',
    date: '2026-05-30',
    author: 'Aisha Khan',
    excerpt: 'Learn why Next.js is a leading choice for performant, scalable React apps with server-side rendering and static generation.',
    cover: '/images/nextjs-cover.jpg',
    content: [
      'Next.js brings together the best of React and web platform APIs with built-in routing, SSR, SSG, and edge-ready rendering.',
      'It helps teams ship fast, optimize for SEO, and build production-grade applications without configuration overhead.',
      'We explore real-world examples of how Next.js accelerates workflows and reduces complexity.',
    ],
  },
  {
    slug: 'reactjs',
    title: 'React.js: The Ubiquitous UI Library for Dynamic Interfaces',
    date: '2026-04-12',
    author: 'Liam Smith',
    excerpt: 'Discover how React.js enables powerful component-driven development with a vast ecosystem of tools and libraries.',
    cover: '/images/reactjs-cover.jpg',
    content: [
      'React.js introduced a declarative component model that changed how developers build interactive UIs.',
      'Its virtual DOM, hooks, and composability make it easy to build maintainable experiences at scale.',
      'This article walks through practical patterns for structuring React applications in production.',
    ],
  },
  {
    slug: 'tailwindcss',
    title: 'Tailwind CSS: Utility-First Styling for Modern UIs',
    date: '2026-03-18',
    author: 'Sofia Lopez',
    excerpt: 'Tailwind CSS helps teams build responsive, scalable designs with utility classes and modern workflows.',
    cover: '/images/tailwind-cover.jpg',
    content: [
      'Tailwind CSS reduces the need for custom CSS while giving designers and developers granular control over layout and style.',
      'Its utility-first approach allows rapid iteration while keeping styles consistent and maintainable.',
      'We share tips for theming, responsive design, and component structure using Tailwind.',
    ],
  },
]

const generatedPosts = Array.from({ length: 60 }, (_, i) => {
  const n = i + 1
  const slug = `sample-post-${String(n).padStart(3, '0')}`
  const theme = postThemes[i % postThemes.length]
  const title = `Sample Post ${n}: ${theme} for modern teams`
  const date = new Date(2024, i % 12, 1 + (i % 28)).toISOString().slice(0, 10)
  const author = authors[i % authors.length]
  const intro = `In ${title}, we explore practical strategies to solve real-world challenges and keep teams aligned.`
  const pointA = `Start with defining clear goals and user outcomes to avoid unnecessary complexity.`
  const pointB = `Use short feedback loops and incremental improvements to maintain momentum.`
  const pointC = `Balance speed and quality by standardizing workflows and shared expectations.`
  const pointD = `Each section includes examples relevant to product teams, designers, and engineers.`

  return {
    slug,
    title,
    date,
    author,
    excerpt: `A concise summary for ${title}, with actionable lessons and product insights.`,
    cover: `/images/cover-${(i % 6) + 1}.jpg`,
    content: [intro, pointA, pointB, pointC, pointD],
  }
})

export const posts = [...legacyPosts, ...generatedPosts]

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug)
}

export function getAllPosts() {
  return posts
}

