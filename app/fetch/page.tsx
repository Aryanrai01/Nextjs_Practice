
interface Post {
    id: number
    title: string
    body: string
}

export default async function Home() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts: Post[] = await res.json()
    const shown = posts.slice(0,40)

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Latest Posts</h1>
                        <p className="mt-1 text-sm text-slate-600">Server-fetched sample posts rendered with a clean card UI.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="rounded-3xl bg-white px-4 py-2 shadow-sm">
                            <span className="text-sm text-slate-500">Total posts</span>
                            <div className="text-lg font-semibold text-slate-900">{posts.length}</div>
                        </div>

                        <div className="hidden md:block">
                            <label className="relative block">
                                <input
                                    disabled
                                    placeholder="Search (client-side only)"
                                    className="w-72 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 disabled:opacity-70"
                                />
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">⌕</span>
                            </label>
                        </div>
                    </div>
                </header>

                <main className="grid gap-6 md:grid-cols-3">
                    {shown.map((post) => (
                        <article
                            key={post.id}
                            className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100"
                        >
                            <div>
                                <h2 className="text-lg font-semibold text-slate-900 line-clamp-2">{post.title}</h2>
                                <p className="mt-3 text-sm text-slate-600 line-clamp-4">{post.body}</p>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold">P</div>
                                    <div>
                                        <p className="text-xs text-slate-500">Sample Author</p>
                                        <p className="text-xs text-slate-400">#{post.id}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </main>
            </div>
        </div>
    )
}