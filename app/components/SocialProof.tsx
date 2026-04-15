'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useState } from 'react'
import EarlyAccessModal from './EarlyAccessModal'

const testimonials = [
  {
    name: 'María González',
    role: 'CTO en TechVenture',
    company: 'Startup Fintech',
    content: 'Reducimos nuestro tiempo de decisión 42%. El contexto automático es un game-changer para nuestro equipo distribuido.',
    rating: 5,
  },
  {
    name: 'Carlos López',
    role: 'Director de Proyectos en Creative Studio',
    company: 'Agencia Digital',
    content: 'Los clientes ven nuestro nivel de organización. Cada decision está trazable. Imprescindible para equipos de 20+.',
    rating: 5,
  },
  {
    name: 'Emma Richardson',
    role: 'Head of Operations en DataFlow',
    company: 'SaaS B2B',
    content: 'FlowPilot nos permitió escalar de 15 a 85 personas sin perder contexto. El onboarding es 3x más rápido ahora.',
    rating: 5,
  },
  {
    name: 'Diego Martínez',
    role: 'Founder en DesignLabs',
    company: 'Estudio de Diseño',
    content: 'Como founder, necesitaba algo que fuera transparente. Ahora veo quién decidió qué, cuándo y por qué. Invaluable.',
    rating: 5,
  },
  {
    name: 'Sofia Chen',
    role: 'Product Manager en InnovateLabs',
    company: 'Deep Tech',
    content: 'Los resúmenes de reuniones con IA nos ahorran 8 horas/semana. El equipo es más produktivo y las decisiones mejor documentadas.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'VP Engineering en CloudWorks',
    company: 'Infrastructure SaaS',
    content: 'Implementamos FlowPilot en 3 equipos. El ROI fue visible en el primer mes. Mejora comprobable en velocidad de desarrollo.',
    rating: 5,
  },
]

const logos = ['TechVenture', 'Creative Studio', 'DataFlow', 'DesignLabs', 'InnovateLabs', 'CloudWorks', 'Momentum']

export default function SocialProof() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false)
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Confiado por <span className="gradient-text">equipos líderes</span>
          </h2>
          <p className="text-gray-600">Confían en nosotros empresas de rápido crecimiento en múltiples industrias</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05, color: '#4f46e5' }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg font-semibold hover:text-indigo-600 transition-all duration-300 cursor-default"
            >
              {logo}
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.05 * i }}
                    viewport={{ once: true }}
                    className="text-yellow-400"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm group-hover:text-gray-900 transition-colors flex-grow">{testimonial.content}</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-xs text-gray-600">{testimonial.role}</p>
                <p className="text-xs text-indigo-600 font-medium mt-1">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">¿Listo para unirte a los líderes?</p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEarlyAccessOpen(true)}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Solicitar demo personalizada
          </motion.button>
        </motion.div>
        <EarlyAccessModal isOpen={isEarlyAccessOpen} onClose={() => setIsEarlyAccessOpen(false)} />
      </div>
    </section>
  )
}
