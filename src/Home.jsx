import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Stats from './components/Stats'
import Features from './components/Features'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="bg-[#f3f6ff] dark:bg-neutral-950 min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Products />
        <Stats />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
