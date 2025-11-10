import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/Section'
import { OFFERS } from '../data'

export default function Offers() {
  return (
    <div className="bg-[#f3f6ff] dark:bg-neutral-950 min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Special Offers</h1>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {OFFERS.map((o) => (
                <div key={o.title} className="rounded-2xl border border-black/5 dark:border-white/5 bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-6">
                  <div className="text-[#0b63ff] font-bold text-2xl">{o.discount}</div>
                  <h3 className="mt-2 text-xl font-semibold text-neutral-900 dark:text-white">{o.title}</h3>
                  <p className="mt-2 text-neutral-700 dark:text-neutral-300">{o.details}</p>
                  <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">{o.terms}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
