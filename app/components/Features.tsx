'use client'

import { Brain, CheckCircle, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Brain,
    title: 'Decisiones claras con IA',
    description: 'FlowPilot resume automáticamente discusiones y propone siguientes pasos accionables.',
  },
  {
    icon: CheckCircle,
    title: 'Tareas automatizadas',
    description: 'Convierte conversaciones en tareas asignadas automáticamente con fechas límite inteligentes.',
  },
  {
    icon: Zap,
    title: 'Contexto instantáneo',
    description: 'Accede al historial completo de decisiones sin perder tiempo buscando en hilos.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Todo lo que necesitas en <span className="gradient-text">un solo lugar</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Impulsado por IA, diseñado para equipos modernos.
            Automatiza decisiones, contextualiza conversaciones, acelera ejecución.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.15)' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="text-indigo-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{feature.description}</p>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-all font-semibold text-sm"
          >
            Descubre más →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
