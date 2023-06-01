import { AppStore } from '@/components/AppStore'
import { Features } from '@/components/Features'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <main>
        <div className='top-0 sticky z-50 backdrop-filter backdrop-blur-lg bg-opacity-50 border-b border-green-500'>
          <Header />
        </div>
        <Hero />
        <Features />
        <AppStore />
      </main >
    </>
  )
}
