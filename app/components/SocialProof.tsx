'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'María González',
    role: 'CTO en TechCorp',
    content: 'FlowPilot cambió la forma en que nuestro equipo colabora. Finalmente tenemos un único punto de verdad.',
    rating: 5,
  },
  {
    name: 'Carlos López',
    role: 'Product Lead en Innovate',
    content: 'La capacidad de la IA para resumir decisiones nos ahorra horas cada semana. Imprescindible.',
    rating: 5,
  },
]

const logos = ['TechCorp', 'DesignStudio', 'InnovateLabs', 'FutureWorks']

export default function SocialProof() {
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
          <p className="text-gray-600">Confían en nosotros empresas de rápido crecimiento</p>
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className="text-yellow-400"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 group-hover:text-gray-900 transition-colors">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
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
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Solicitar demo personalizada
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
