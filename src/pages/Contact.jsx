import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/Section'
import { CONTACT } from '../data'

export default function Contact() {
  return (
    <div className="bg-[#f3f6ff] dark:bg-neutral-950 min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Section className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Contact Us</h1>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-3 text-neutral-700 dark:text-neutral-300">
                <p>{CONTACT.address}</p>
                <p>{CONTACT.phones.join(' / ')}</p>
                <p>{CONTACT.emails.join(' / ')}</p>
                <div className="pt-4">
                  {CONTACT.hours.map((h) => (
                    <div key={h} className="text-sm">{h}</div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 rounded-xl overflow-hidden border border-black/5 dark:border-white/5">
                <iframe title="map" src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`} className="w-full h-[350px]" loading="lazy" />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
