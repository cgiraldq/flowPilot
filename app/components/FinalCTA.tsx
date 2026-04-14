'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useState } from 'react'
import EarlyAccessModal from './EarlyAccessModal'
import VideoModal from './VideoModal'

export default function FinalCTA() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 right-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 pointer-events-none"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden group"
        >
          <div className="relative z-20">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-glow"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Únete a la espera de FlowPilot
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg opacity-95 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Sé de los primeros en probar el futuro del trabajo en equipo.
              Acceso anticipado limitado para los primeros 1,000 equipos.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setIsEarlyAccessOpen(true)}
                whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
              >
                <span>Solicitar acceso anticipado</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>

              <motion.button
                onClick={() => setIsVideoOpen(true)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white bg-white/10 backdrop-blur-md rounded-lg font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <motion.div
                  animate={{ rotate: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play size={20} />
                </motion.div>
                <span>Ver demo video</span>
              </motion.button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-sm opacity-80 italic"
            >
              ✨ Sin compromiso · Cancelas cuando quieras
            </motion.p>
          </div>
        </motion.div>

        <EarlyAccessModal 
          isOpen={isEarlyAccessOpen} 
          onClose={() => setIsEarlyAccessOpen(false)} 
        />
        <VideoModal 
          isOpen={isVideoOpen} 
          onClose={() => setIsVideoOpen(false)} 
        />
      </div>
    </section>
  )
}

