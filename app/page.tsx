"use client"
import { useRouter } from 'next/navigation'
import React from "react"
import Image from 'next/image'

const Home = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features.',
      tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with interactive charts and real-time metrics.',
      tags: ['React', 'Chart.js', 'TypeScript', 'API'],
      link: '#'
    }
  ]

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'] },
    { category: 'Tools & Others', items: ['Git', 'Docker', 'AWS', 'GraphQL', 'REST APIs'] }
  ]
  const router = useRouter()

  return (
    <div className="w-full">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-gray-900 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">Welcome to my portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Full Stack Developer passionate about creating beautiful, scalable web applications. Let's build something amazing together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition">
              Download CV
            </button>
            <button onClick={() => router.push('/dashboard')} className="px-8 py-3 border-2 bg-gradient-to-r from-blue-600 to-pink-600 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition">
              Go to Dashboard
            </button>
          </div>

          <div className="pt-8">
            <svg className="animate-bounce w-6 h-6 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center h-90">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                I'm a passionate full-stack developer with 5+ years of experience building web applications that users love. I specialize in modern JavaScript frameworks and have a deep understanding of both frontend and backend technologies.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-yellow-500 ml-5 rounded-2xl h-40 flex items-center justify-center">
              <Image src="/girl.jpg" alt="Your Photo" width={300} height={200} className="rounded-full" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 group-hover:from-blue-500 group-hover:to-purple-600 transition-all flex items-center justify-center">
                  <span className="text-white text-4xl opacity-50">📦</span>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 transition">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">Let's Work Together</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">About</h3>
              <p className="text-sm">Building beautiful and functional web experiences.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Connect</h3>
              <div className="flex gap-4 text-sm">
                <a href="#" className="hover:text-white transition">Twitter</a>
                <a href="#" className="hover:text-white transition">GitHub</a>
                <a href="#" className="hover:text-white transition">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
