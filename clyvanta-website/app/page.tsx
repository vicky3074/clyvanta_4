import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import Capabilities from '@/components/Capabilities'
import HowWeWork from '@/components/HowWeWork'
import WhoWeHelp from '@/components/WhoWeHelp'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import FloatingWidget from '@/components/FloatingWidget'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Capabilities />
        <WhoWeHelp />
        <HowWeWork />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWidget />
    </>
  )
}
