import type { Metadata } from 'next'
import './globals.css'
import { ModalProvider } from './contexts/ModalContext'

export const metadata: Metadata = {
  title: 'FlowPilot - AI-powered workspace for teams',
  description: 'Organiza ideas, tareas y decisiones con IA. Todo en un solo lugar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  )
}
