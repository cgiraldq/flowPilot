'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useModalContext } from '../contexts/ModalContext'

const navigation = [
  { name: 'Características', href: '#features' },
  { name: 'Beneficios', href: '#benefits' },
  { name: 'Testimonios', href: '#testimonials' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { openEarlyAccess } = useModalContext()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    // Observar todas las secciones
    const sections = ['features', 'benefits', 'testimonials']
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text">FlowPilot</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-300 font-medium ${
                    isActive
                      ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1'
                      : 'text-gray-600 hover:text-indigo-600'
                  }`}
                >
                  {item.name}
                </a>
              )
            })}
            <button 
              onClick={openEarlyAccess}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 hover:scale-105"
            >
              Acceso anticipado
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 pb-6 border-t border-gray-100 animate-fade-in overflow-visible">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.slice(1)
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`transition-all duration-300 font-medium px-4 py-2 rounded ${
                      isActive
                        ? 'text-indigo-600 bg-indigo-50 border-l-3 border-indigo-600'
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    {item.name}
                  </a>
                )
              })}
              <button 
                onClick={() => {
                  setMobileMenuOpen(false)
                  openEarlyAccess()
                }}
                className="mx-4 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-all"
              >
                Acceso anticipado
              </button>
            </nav>
          </div>
        )}

      </div>
    </header>
  )
}
