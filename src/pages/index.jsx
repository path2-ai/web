import { AppStore } from '@/components/AppStore'
import { HowItWorks } from '@/components/HowItWorks'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <main>
        <div className='top-0 sticky z-50 backdrop-filter backdrop-blur-lg bg-opacity-50 border-b border-gray-500'>
          <Header />
        </div>
        <Hero />
        <HowItWorks />
        <AppStore />
      </main >
    </>
  )
}
