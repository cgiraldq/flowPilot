'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Users } from 'lucide-react'
import { useState } from 'react'
import EarlyAccessModal from './EarlyAccessModal'

export default function Benefits() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false)

  return (
    <section id="benefits" className="py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Resultados que <span className="gradient-text">hablan por sí solos</span>
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <TrendingUp className="text-indigo-600 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">45% menos tiempo en reuniones</h3>
                  <p className="text-gray-600">Resúmenes automáticos eliminan la necesidad de notas manuales</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-indigo-600 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Decisiones rastreables en segundos</h3>
                  <p className="text-gray-600">Auditoría completa del contexto: quién, qué, dónde y cuándo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-indigo-600 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Onboarding 2.8x más rápido</h3>
                  <p className="text-gray-600">Nuevos miembros acceden a contexto histórico al instante</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <motion.button 
                whileHover={{ x: 4 }}
                onClick={() => {
                  const testimonialsSection = document.getElementById('testimonials')
                  testimonialsSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors cursor-pointer"
              >
                Ver casos de éxito →
              </motion.button>
              <motion.button 
                whileHover={{ x: 4 }}
                onClick={() => setIsEarlyAccessOpen(true)}
                className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors cursor-pointer"
              >
                Contactar ventas →
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(99, 102, 241, 0.2)' }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl font-bold text-indigo-600 mb-2">2,847</div>
                <div className="text-gray-600 mb-6">empresas activas globalmente</div>
              </motion.div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">ROI en 12 meses</span>
                  <span className="text-sm font-bold text-indigo-600">6.2x</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-500">Basado en análisis de 2,400+ empresas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <EarlyAccessModal isOpen={isEarlyAccessOpen} onClose={() => setIsEarlyAccessOpen(false)} />
    </section>
  )
}
