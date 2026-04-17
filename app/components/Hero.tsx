'use client'

import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import EarlyAccessModal from './EarlyAccessModal'
import VideoModal from './VideoModal'
import AnimatedBackground from './AnimatedBackground'
import MockupDashboard from './MockupDashboard'
import { useModalContext } from '../contexts/ModalContext'
import { useAnimationVariants } from '../hooks/useAnimationVariants'

export default function Hero() {
  const [isHoveringCTA, setIsHoveringCTA] = useState(false)
  const { modals, openEarlyAccess, closeEarlyAccess, openVideo, closeVideo } = useModalContext()
  const { containerVariants, itemVariants } = useAnimationVariants()

  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      <AnimatedBackground />

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
                onClick={openEarlyAccess}
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
                onClick={openVideo}
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

          <MockupDashboard />
        </motion.div>
      </div>

      <EarlyAccessModal 
        isOpen={modals.earlyAccess} 
        onClose={closeEarlyAccess} 
      />
      <VideoModal 
        isOpen={modals.video} 
        onClose={closeVideo} 
      />
    </section>
  )
}
