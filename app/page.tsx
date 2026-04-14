'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import SocialProof from './components/SocialProof'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  )
}
