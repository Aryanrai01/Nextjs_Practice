import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_22%)]" />
      <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-12 top-24 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-12">
        <section className="w-full rounded-[2rem] border border-white/10 bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/50 backdrop-blur-xl sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.7fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-300">
                404 • page missing
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  We couldn't find that page.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  The content you were looking for has either moved, been renamed, or never existed. Use the link below to return safely to the home dashboard.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-3xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Go back home
                </Link>
                <Link
                  href="/check"
                  className="inline-flex items-center justify-center rounded-3xl border border-slate-700 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/50 hover:text-white"
                >
                  Visit check page
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-inner shadow-slate-950/20">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400/60 via-slate-100 to-violet-400/60 opacity-70" />
              <div className="relative mt-6 space-y-6">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/75 p-6">
                  <h2 className="text-xl font-semibold text-white">Search tips</h2>
                  <ul className="mt-4 space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      Check the URL for typos or missing segments.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      Use the site navigation or search feature to locate the page.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      If you think this is a bug, refresh or return later.
                    </li>
                  </ul>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Smooth UI", value: "Instant fallback" },
                    { label: "Guided action", value: "Home link" },
                    { label: "Design", value: "Dark neon" },
                    { label: "Support", value: "Retry friendly" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/75 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                      <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
