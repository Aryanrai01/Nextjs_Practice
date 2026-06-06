import Image from "next/image";

interface Post {
  id: number;
  url: string;
  width: number;
  height: number;
}

interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  dob: {
    age: number;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export default async function Home() {
  const catRes = await fetch("https://api.thecatapi.com/v1/images/search", {
    next: { revalidate: 5 },
  });
  const posts: Post[] = await catRes.json();
  const cat = posts[0];

  const userRes = await fetch("https://randomuser.me/api/", {
    next: { revalidate: 5 },
  });
  const userData: { results: User[] } = await userRes.json();
  const user = userData.results[0];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 opacity-80" />
        <div className="absolute left-1/2 top-16 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
          <section className="mb-12 rounded-3xl border border-slate-800/60 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/50 backdrop-blur-xl sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-4 inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-500/20">
                  Daily pet & profile check
                </p>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Meet your friendly check-in companion.
                </h1>
                <p className="mt-6 max-w-xl text-slate-300/90 leading-8">
                  Enjoy a beautifully designed status dashboard with live cat imagery and a personalized profile overview. Every refresh shows a new playful moment and user snapshot.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="/check"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                  >
                    Refresh for new data
                  </a>
                  <span className="inline-flex items-center rounded-full bg-slate-800/80 px-4 py-2 text-sm text-slate-300 ring-1 ring-white/10">
                    Fully responsive Tailwind layout
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/5 text-xl text-cyan-300">
                    🐾
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Today's score</p>
                    <p className="mt-1 text-3xl font-semibold text-white">92 / 100</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Mood", value: "Happy" },
                    { label: "Energy", value: "Optimistic" },
                    { label: "Connection", value: "Strong" },
                    { label: "Focus", value: "Balanced" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4">
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                      <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
            <article className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-800/70 shadow-inner shadow-slate-950/30">
                <div className="relative h-96 w-full">
                  <Image
                    src={cat.url}
                    alt="Cat image"
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  
                </div>
              </div>
              <div className="mt-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 text-slate-200 shadow-inner shadow-slate-950/20">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Cat photo details</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Image metadata & downside</h3>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-2 text-sm text-slate-300">{cat.width}×{cat.height}</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-3 rounded-3xl bg-slate-900/80 p-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Source</p>
                    <p className="text-base text-slate-100 break-words">{cat.url}</p>
                    <p className="text-sm text-slate-400">Random cat image from The Cat API.</p>
                  </div>
                  <div className="space-y-3 rounded-3xl bg-slate-900/80 p-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Orientation</p>
                    <p className="text-base text-slate-100">{cat.width >= cat.height ? "Landscape or square" : "Portrait"}</p>
                    <p className="text-sm text-slate-400">Image dimensions vary on every request.</p>
                  </div>
                </div>
                <div className="mt-6 rounded-3xl border border-rose-500/10 bg-rose-500/5 p-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-rose-300/80">Downside</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-200">
                    <li>Random image source means quality and composition are not guaranteed.</li>
                    <li>Some photos may be blurry, too dark, cropped oddly, or show a cat at an awkward angle.</li>
                    <li>There is no breed, name, or personality metadata attached to the image.</li>
                    <li>Image sizes change with each refresh, so layout adjustments may shift unexpectedly.</li>
                    <li>External API dependency can cause loading delays or broken image results if the service is unavailable.</li>
                  </ul>
                </div>
              </div>
            </article>

            <aside className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-800">
                  <Image
                    src={user.picture.large}
                    alt={`${user.name.first} ${user.name.last}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Active profile</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {user.name.first} {user.name.last}
                  </h3>
                  <p className="text-sm text-slate-400">{user.gender.charAt(0).toUpperCase() + user.gender.slice(1)} · {user.dob.age} years old</p>
                </div>
              </div>

              <div className="grid gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Name</p>
                  <p className="text-base text-slate-100">{user.name.title} {user.name.first} {user.name.last}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Gender</p>
                  <p className="text-base text-slate-100">{user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Email</p>
                  <p className="text-base text-slate-100">{user.email}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Phone</p>
                  <p className="text-base text-slate-100">{user.phone}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Country</p>
                  <p className="text-base text-slate-100">{user.location.country}</p>
                </div>
              </div>

              <div className="rounded-3xl border border-cyan-500/10 bg-cyan-500/5 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-cyan-300/80">Activity summary</p>
                <div className="mt-4 grid gap-4">
                  {[
                    { label: "New connection", value: "Next cat match" },
                    { label: "Favorite vibe", value: "Cozy & calm" },
                    { label: "Status", value: "Ready to share" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-3xl bg-slate-950/70 p-4">
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="mt-1 text-base font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button className="rounded-3xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  View profile
                </button>
                <button className="rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/50 hover:text-white">
                  Save check
                </button>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
}
