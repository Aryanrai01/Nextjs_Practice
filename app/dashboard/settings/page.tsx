"use client"

import React, { useState } from "react"
type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
};
const Toggle = ({ checked, onChange, label }: ToggleProps) => (
	<label className="flex items-center gap-3">
		<div className="relative">
			<input
				type="checkbox"
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
				className="sr-only"
			/>
			<div
				className={`w-11 h-6 rounded-full transition-colors ${checked ? "bg-blue-600" : "bg-gray-300"}`}
			/>
			<div
				className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform ${checked ? "translate-x-5" : "translate-x-0"}`}
			/>
		</div>
		<span className="text-sm text-gray-700">{label}</span>
	</label>
)

export default function SettingsPage() {
	const [profile, setProfile] = useState({
		fullName: "John Doe",
		email: "john.doe@example.com",
	})

	const [preferences, setPreferences] = useState({
		theme: "system", // light | dark | system
		language: "en",
		timezone: "UTC",
	})

	const [notifications, setNotifications] = useState({
		email: true,
		push: false,
		weeklySummary: true,
	})

	const handleProfileChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setProfile((p) => ({ ...p, [name]: value }))
	}

	const saveSettings = () => {
		// placeholder: persist to API
		console.log("Saved", { profile, preferences, notifications })
	}

	return (
		<div className="flex-1 ml-65 bg-gray-50 p-8 h-full">
			<div className="mb-8">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900">Settings</h1>
				<p className="text-gray-600 mt-1">Manage account, preferences, and security</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2 space-y-6">
					{/* Account */}
					<section className="bg-white rounded-lg shadow p-6">
						<div className="flex items-start justify-between">
							<div>
								<h2 className="text-lg font-semibold text-gray-900">Account</h2>
								<p className="text-sm text-gray-500">Personal information and contact</p>
							</div>
							<div className="text-sm text-gray-500">Profile complete • <span className="font-medium text-gray-900">82%</span></div>
						</div>

						<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="text-sm text-gray-700">Full name</label>
								<input
									name="fullName"
									value={profile.fullName}
									onChange={handleProfileChange}
									className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
							</div>

							<div>
								<label className="text-sm text-gray-700">Email address</label>
								<input
									name="email"
									value={profile.email}
									onChange={handleProfileChange}
									className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
							</div>
						</div>

						<div className="mt-6 flex items-center gap-3">
							<button onClick={saveSettings} className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">Save changes</button>
							<button onClick={() => console.log('discard')} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg">Discard</button>
						</div>
					</section>

					{/* Preferences */}
					<section className="bg-white rounded-lg shadow p-6">
						<div className="flex items-start justify-between">
							<div>
								<h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
								<p className="text-sm text-gray-500">Appearance, language and time</p>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
							<div className="md:col-span-1">
								<label className="block text-sm text-gray-700 mb-1">Theme</label>
								<div className="inline-flex rounded-lg bg-gray-100 p-1">
									{['light', 'dark', 'system'].map((t) => (
										<button
											key={t}
											onClick={() => setPreferences((p) => ({ ...p, theme: t }))}
											className={`px-3 py-1 rounded-md text-sm font-medium ${preferences.theme === t ? 'bg-white shadow' : 'text-gray-600'}`}
										>
											{t[0].toUpperCase() + t.slice(1)}
										</button>
									))}
								</div>
							</div>

							<div>
								<label className="block text-sm text-gray-700 mb-1">Language</label>
								<select
									value={preferences.language}
									onChange={(e) => setPreferences((p) => ({ ...p, language: e.target.value }))}
									className="w-full px-3 py-2 border border-gray-200 rounded-lg"
								>
									<option value="en">English</option>
									<option value="es">Spanish</option>
									<option value="fr">French</option>
								</select>
							</div>

							<div>
								<label className="block text-sm text-gray-700 mb-1">Timezone</label>
								<select
									value={preferences.timezone}
									onChange={(e) => setPreferences((p) => ({ ...p, timezone: e.target.value }))}
									className="w-full px-3 py-2 border border-gray-200 rounded-lg"
								>
									<option value="UTC">UTC</option>
									<option value="America/Los_Angeles">America/Los_Angeles</option>
									<option value="Asia/Kolkata">Asia/Kolkata</option>
								</select>
							</div>
						</div>
					</section>

					{/* Notifications */}
					<section className="bg-white rounded-lg shadow p-6">
						<div className="flex items-start justify-between">
							<div>
								<h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
								<p className="text-sm text-gray-500">Manage how you receive notifications</p>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
								<div>
									<p className="text-sm font-medium text-gray-900">Email notifications</p>
									<p className="text-sm text-gray-500">Receive updates via email</p>
								</div>
								<Toggle checked={notifications.email} onChange={(v) => setNotifications((n) => ({ ...n, email: v }))} label="" />
							</div>

							<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
								<div>
									<p className="text-sm font-medium text-gray-900">Push notifications</p>
									<p className="text-sm text-gray-500">Browser & device alerts</p>
								</div>
								<Toggle checked={notifications.push} onChange={(v) => setNotifications((n) => ({ ...n, push: v }))} label="" />
							</div>

							<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg md:col-span-2">
								<div>
									<p className="text-sm font-medium text-gray-900">Weekly summary</p>
									<p className="text-sm text-gray-500">A weekly digest of your activity</p>
								</div>
								<Toggle checked={notifications.weeklySummary} onChange={(v) => setNotifications((n) => ({ ...n, weeklySummary: v }))} label="" />
							</div>
						</div>
					</section>

					{/* Security */}
					<section className="bg-white rounded-lg shadow p-6">
						<div className="flex items-start justify-between">
							<div>
								<h2 className="text-lg font-semibold text-gray-900">Security</h2>
								<p className="text-sm text-gray-500">Password and connected apps</p>
							</div>
						</div>

						<div className="mt-6 space-y-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg">Change password</button>
								<button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg">Manage 2FA</button>
							</div>

							<div className="p-4 bg-gray-50 rounded-lg">
								<p className="text-sm text-gray-700">Connected apps</p>
								<div className="mt-3 space-y-2">
									<div className="flex items-center justify-between p-3 bg-white border rounded-lg">
										<div>
											<p className="text-sm font-medium">GitHub</p>
											<p className="text-xs text-gray-500">Connected on Jan 12, 2025</p>
										</div>
										<button className="px-3 py-1 text-sm bg-red-50 text-red-600 rounded">Disconnect</button>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

				{/* Right column */}
				<aside className="space-y-6">
					<div className="bg-white rounded-lg shadow p-6">
						<h3 className="text-lg font-semibold text-gray-900">Preview</h3>
						<p className="text-sm text-gray-500 mt-2">How your profile appears to others</p>
						<div className="mt-4 p-4 bg-gray-50 rounded-lg">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 rounded bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">JD</div>
								<div>
									<p className="font-semibold text-gray-900">{profile.fullName}</p>
									<p className="text-xs text-gray-500">{profile.email}</p>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-lg shadow p-6">
						<h3 className="text-lg font-semibold text-gray-900">Danger Zone</h3>
						<p className="text-sm text-gray-500 mt-2">Remove account and data. This action is permanent.</p>
						<div className="mt-4">
							<button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg">Delete account</button>
						</div>
					</div>
				</aside>
			</div>
		</div>
	)
}

