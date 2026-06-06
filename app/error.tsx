"use client";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_25%)]" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-20 top-1/3 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="absolute -left-16 top-16 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -right-16 bottom-16 h-28 w-28 rounded-full bg-violet-400/10 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-950/80 text-3xl shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-300/10">
                ⚠️
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Global Error</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Something went wrong.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  We couldn’t complete your request right now. The application encountered an unexpected issue and we are working to recover it.
                </p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 shadow-inner shadow-slate-950/20">
              <div className="space-y-4">
                <div className="rounded-3xl bg-slate-900/80 p-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Error message</p>
                  <p className="mt-3 text-base text-slate-100 break-words">{error.message}</p>
                </div>
                <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">What to do next</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                    <li>Tap “Try again” to reload the current view.</li>
                    <li>If the issue continues, refresh the page or come back later.</li>
                    <li>Check your network if the page still won’t load.</li>
                  </ul>
                </div>
                <button
                  onClick={reset}
                  className="w-full rounded-3xl bg-cyan-400 px-5 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Try again
                </button>
              </div>
            </div>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 text-slate-300 shadow-xl shadow-slate-950/10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-slate-100 to-violet-400/70 opacity-60" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/75">Status panel</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Recovery", value: "Immediate" },
                  { label: "Status", value: "Temporary" },
                  { label: "Support", value: "Available" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
