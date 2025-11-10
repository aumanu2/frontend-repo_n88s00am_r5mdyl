import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/Section'
import { BRAND } from '../data'

export default function About() {
  return (
    <div className="bg-[#f3f6ff] dark:bg-neutral-950 min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">About {BRAND.name}</h1>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">{BRAND.description}</p>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">{BRAND.mission}</p>
            <div className="mt-8 rounded-2xl bg-white/80 dark:bg-neutral-900/60 border border-black/5 dark:border-white/5 p-6">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Leadership</h2>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">{BRAND.leadership}</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
