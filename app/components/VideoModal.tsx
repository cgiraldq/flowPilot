'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl relative"
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <X size={24} />
        </button>

        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            title="FlowPilot Demo Video"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
