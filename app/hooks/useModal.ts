'use client'

import { useState, useCallback } from 'react'

interface ModalState {
  earlyAccess: boolean
  video: boolean
}

interface UseModalReturn {
  modals: ModalState
  openEarlyAccess: () => void
  closeEarlyAccess: () => void
  openVideo: () => void
  closeVideo: () => void
  closeAll: () => void
}

/**
 * Hook personalizado para manejar estados de modales
 * Elimina redundancia de estados en múltiples componentes
 * Sigue principios DRY y mejora mantenibilidad
 */
export function useModal(): UseModalReturn {
  const [modals, setModals] = useState<ModalState>({
    earlyAccess: false,
    video: false,
  })

  const openEarlyAccess = useCallback(() => {
    setModals(prev => ({ ...prev, earlyAccess: true }))
  }, [])

  const closeEarlyAccess = useCallback(() => {
    setModals(prev => ({ ...prev, earlyAccess: false }))
  }, [])

  const openVideo = useCallback(() => {
    setModals(prev => ({ ...prev, video: true }))
  }, [])

  const closeVideo = useCallback(() => {
    setModals(prev => ({ ...prev, video: false }))
  }, [])

  const closeAll = useCallback(() => {
    setModals({ earlyAccess: false, video: false })
  }, [])

  return {
    modals,
    openEarlyAccess,
    closeEarlyAccess,
    openVideo,
    closeVideo,
    closeAll,
  }
}
