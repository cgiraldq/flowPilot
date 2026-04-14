'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface AnimatedCTAButtonProps {
  text: string
  icon?: React.ReactNode
  isDark?: boolean
  onClick?: () => void
  videoHoverEffect?: boolean
  glowEffect?: boolean
}

export default function AnimatedCTAButton({
  text,
  icon,
  isDark = false,
  onClick,
  videoHoverEffect = false,
  glowEffect = false,
}: AnimatedCTAButtonProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <motion.div
      className="relative group"
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      {/* Background video effect on hover */}
      {videoHoverEffect && isHovering && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.2, scale: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl -z-10"
        />
      )}

      <motion.button
        whileHover={glowEffect ? { scale: 1.08 } : { scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300
          flex items-center justify-center gap-2 relative overflow-hidden
          ${isDark
            ? 'bg-white/10 border-2 border-white text-white hover:bg-white/20'
            : 'bg-white text-indigo-600 border-2 border-white hover:bg-gray-100'
          }
          ${glowEffect ? 'animate-pulse-glow' : ''}`}
        onClick={onClick}
      >
        {/* Animated shimmer overlay */}
        {videoHoverEffect && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
            animate={isHovering ? { x: ['-100%', '100%'] } : { x: '-100%' }}
            transition={{ duration: 0.6, repeat: isHovering ? Infinity : 0 }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 flex items-center gap-2">
          {icon && (
            <motion.div
              animate={isHovering ? { x: [0, 2, 0] } : { x: 0 }}
              transition={{ duration: 0.6, repeat: isHovering ? Infinity : 0 }}
            >
              {icon}
            </motion.div>
          )}
          <span>{text}</span>
        </div>
      </motion.button>
    </motion.div>
  )
}
