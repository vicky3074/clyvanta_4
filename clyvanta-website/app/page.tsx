import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import Capabilities from '@/components/Capabilities'
import HowWeWork from '@/components/HowWeWork'
import WhoWeHelp from '@/components/WhoWeHelp'
import FinalCTA from '@/components/FinalCTA'
import FloatingWidget from '@/components/FloatingWidget'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ValueProposition />
        <Capabilities />
        <WhoWeHelp />
        <HowWeWork />
        <FinalCTA />
      </main>
      <FloatingWidget />
    </>
  )
}
