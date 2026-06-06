import type { ReactNode } from 'react'
import Link from 'next/link'
import '../globals.css'
const Icon = ({ name }: { name: string }) => {
    switch (name) {
        case 'dashboard':
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
                </svg>
            )
        case 'overview':
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                </svg>
            )
        case 'settings':
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06A2 2 0 017.5 2.5l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001 1.51V6a2 2 0 014 0v.09c.3.11.58.27.83.48" />
                </svg>
            )
        case 'profile':
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.804z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        default:
            return null
    }
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const nav = [
        { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
        { label: 'Overview', href: '/dashboard/overview', icon: 'overview' },
        { label: 'Settings', href: '/dashboard/settings', icon: 'settings' },
        { label: 'Profile', href: '/dashboard/profile', icon: 'profile' },
    ]

    return (
        <div>
            
            <aside className="fixed left-0 top-0 h-full w-1/5 min-w-[220px] bg-white border-r shadow-sm flex flex-col">
                <div className="h-20 flex items-center px-6 border-b">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-blue-600 rounded flex items-center justify-center text-white font-bold">
                            M
                        </div>
                        <div>
                            <div className="text-lg font-semibold">MyApp</div>
                            <div className="text-xs text-gray-500">Admin panel</div>
                        </div>
                    </div>
                </div>

                <nav className="px-4 py-6 flex-1 overflow-y-auto">
                    <ul className="space-y-1">
                        {nav.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700"
                                >
                                    <Icon name={item.icon} />
                                    <span className="text-sm font-medium">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="px-4 py-6 border-t">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-semibold">JD</div>
                        <div>
                            <div className="text-sm font-medium">John Doe</div>
                            <div className="text-xs text-gray-500">Admin</div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Link href="/dashboard/profile" className="text-sm text-blue-600 hover:underline">
                            View profile
                        </Link>
                    </div>
                </div>
            </aside>
            <main className=" mt-0 p-2 bg-gray-50 min-h-screen">
                {children}
            </main>
            
        </div>
    )
}