'use client'

import { motion } from 'framer-motion'

/**
 * Mockup visual del dashboard
 * Extraído de Hero.tsx para mejorar separación de responsabilidades
 * Componente reutilizable para otras secciones si es necesario
 */
export default function MockupDashboard() {
  return (
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
              <motion.div 
                className="w-3 h-3 rounded-full bg-red-400" 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 2, repeat: Infinity }} 
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-yellow-400" 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} 
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-green-400" 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} 
              />
            </div>
          </div>
          <div className="p-6">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className="w-8 h-8 bg-indigo-100 rounded-lg" 
                animate={{ rotate: 360 }} 
                transition={{ duration: 4, repeat: Infinity }} 
              />
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
  )
}
