'use client'

import { motion } from 'framer-motion'

interface AnimatedBackgroundProps {
  className?: string
}

/**
 * Componente reutilizable para fondos animados con gradientes
 * Extraído de Hero.tsx para seguir SRP (Single Responsibility Principle)
 * Mejora mantenibilidad y reutilización
 */
export default function AnimatedBackground({ className = "" }: AnimatedBackgroundProps) {
  return (
    <>
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className={`absolute top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none ${className}`}
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className={`absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none ${className}`}
      />
    </>
  )
}
