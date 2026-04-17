'use client'

import { createContext, useContext, ReactNode, useState } from 'react'

interface ModalState {
  earlyAccess: boolean
  video: boolean
}

interface ModalContextType {
  modals: ModalState
  openEarlyAccess: () => void
  closeEarlyAccess: () => void
  openVideo: () => void
  closeVideo: () => void
  closeAll: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

interface ModalProviderProps {
  children: ReactNode
}

/**
 * Context Provider para manejar estados globales de modales
 * Evita prop drilling y mantiene estado centralizado
 * Sigue patrones de React Context para mejor escalabilidad
 */
export function ModalProvider({ children }: ModalProviderProps) {
  const [modals, setModals] = useState<ModalState>({
    earlyAccess: false,
    video: false,
  })

  const openEarlyAccess = () => {
    setModals(prev => ({ ...prev, earlyAccess: true }))
  }

  const closeEarlyAccess = () => {
    setModals(prev => ({ ...prev, earlyAccess: false }))
  }

  const openVideo = () => {
    setModals(prev => ({ ...prev, video: true }))
  }

  const closeVideo = () => {
    setModals(prev => ({ ...prev, video: false }))
  }

  const closeAll = () => {
    setModals({ earlyAccess: false, video: false })
  }

  return (
    <ModalContext.Provider
      value={{
        modals,
        openEarlyAccess,
        closeEarlyAccess,
        openVideo,
        closeVideo,
        closeAll,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

/**
 * Hook para consumir el Modal Context
 * Lanza error si se usa fuera del ModalProvider
 */
export function useModalContext(): ModalContextType {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModalContext debe ser usado dentro de un ModalProvider')
  }
  return context
}
