 "use client" 
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-slate-100">
      <div className="relative flex w-full max-w-4xl flex-col items-center gap-10 rounded-[2.5rem] border border-white/10 bg-slate-900/95 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:p-12">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-400/20 to-transparent opacity-70 blur-3xl" />
        <div className="absolute -right-24 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -left-24 bottom-16 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative z-10 flex w-full flex-col items-center gap-4 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950/70 shadow-[0_20px_60px_-20px_rgba(56,189,248,0.6)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 shadow-inner shadow-cyan-400/20">
              <div className="h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.6)] animate-pulse" />
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/75">Loading interface</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Preparing your animated dashboard...
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
              Smooth motion, dynamic gradients, and elegant waiting states are being assembled. Stay tuned while we bring the content to life.
            </p>
          </div>
        </div>

        <div className="relative z-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Shaders", accent: "from-cyan-400/30 via-slate-900 to-transparent" },
            { label: "Lights", accent: "from-violet-400/25 via-slate-900 to-transparent" },
            { label: "Frames", accent: "from-slate-400/10 via-slate-900 to-transparent" },
            { label: "Flow", accent: "from-emerald-400/20 via-slate-900 to-transparent" },
          ].map((item) => (
            <div key={item.label} className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70 blur-2xl`} />
              <div className="relative z-10 flex h-full flex-col justify-between gap-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/90 text-cyan-300 ring-1 ring-white/10">
                    <span className="block h-3 w-3 rounded-full bg-cyan-300 animate-ping" />
                  </span>
                  <div className="text-right">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                    <p className="mt-1 text-2xl font-semibold text-white">Loading</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-3">
                  <div className="h-3 w-full rounded-full bg-slate-900">
                    <div className="h-3 rounded-full bg-cyan-400/80 animate-[loading_2.2s_ease-in-out_infinite]" style={{ width: "65%" }} />
                  </div>
                  <p className="mt-3 text-xs text-slate-400">Optimizing assets and animations</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex w-full flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 text-left shadow-[0_10px_60px_-30px_rgba(15,23,42,0.8)] sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-300/15">
              ✨
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Animated progress system</p>
              <p className="text-sm text-slate-400">A refined waiting experience with layered motion and soft neon highlights.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Glow path", value: "80%" },
              { label: "Card render", value: "72%" },
              { label: "Scene ready", value: "55%" },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0%, 100% { transform: scaleX(0.21); }
          50% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
