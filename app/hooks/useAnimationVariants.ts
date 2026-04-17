'use client'

import { Variants } from 'framer-motion'

/**
 * Hook personalizado para variantes de animación reutilizables
 * Extraído de Hero.tsx para mejorar mantenibilidad
 * Sigue principios DRY y facilita cambios globales de animaciones
 */
export function useAnimationVariants() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const scaleInVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return {
    containerVariants,
    itemVariants,
    fadeInUpVariants,
    scaleInVariants,
  }
}
