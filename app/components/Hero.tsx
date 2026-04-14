'use client'

import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import EarlyAccessModal from './EarlyAccessModal'
import VideoModal from './VideoModal'

export default function Hero() {
  const [isHoveringCTA, setIsHoveringCTA] = useState(false)
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"
      />

      <div className="container-custom relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Organiza <span className="gradient-text animate-glow">ideas, tareas y decisiones</span> con IA
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              variants={itemVariants}
            >
              FlowPilot ayuda a equipos a pasar del caos a la claridad.
              Tu asistente inteligente para colaboración y ejecución.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onHoverStart={() => setIsHoveringCTA(true)}
                onHoverEnd={() => setIsHoveringCTA(false)}
                onClick={() => setIsEarlyAccessOpen(true)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl animate-pulse-glow"
              >
                <span>Comenzar prueba gratis</span>
                <motion.div
                  animate={isHoveringCTA ? { x: 4 } : { x: 0 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </motion.button>
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                whileHover={{ scale: 1.08, borderColor: '#4f46e5' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center gap-2 font-semibold group"
              >
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="group-hover:text-indigo-600"
                >
                  <Play size={18} />
                </motion.div>
                Ver demo video
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 shadow-2xl"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-100 p-3 border-b">
                  <div className="flex gap-2">
                    <motion.div className="w-3 h-3 rounded-full bg-red-400" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                    <motion.div className="w-3 h-3 rounded-full bg-yellow-400" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
                    <motion.div className="w-3 h-3 rounded-full bg-green-400" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
                  </div>
                </div>
                <div className="p-6">
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div className="w-8 h-8 bg-indigo-100 rounded-lg" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity }} />
                    <motion.div className="h-4 bg-gray-200 rounded w-32 animate-shimmer" />
                  </motion.div>
                  <motion.div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="h-3 bg-gray-200 rounded"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: i === 1 ? '100%' : i === 2 ? '83%' : '67%' }}
                        transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <EarlyAccessModal 
        isOpen={isEarlyAccessOpen} 
        onClose={() => setIsEarlyAccessOpen(false)} 
      />
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
      />
    </section>
  )
}
