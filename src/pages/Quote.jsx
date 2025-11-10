import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/Section'

export default function Quote() {
  return (
    <div className="bg-[#f3f6ff] dark:bg-neutral-950 min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Request a Quote</h1>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">Tell us about your project and our team will get back within 24 hours.</p>
            <form className="mt-8 grid grid-cols-1 gap-4">
              <input className="rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/60 px-4 py-3 outline-none" placeholder="Your name" />
              <input className="rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/60 px-4 py-3 outline-none" placeholder="Email or phone" />
              <select className="rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/60 px-4 py-3 outline-none">
                <option>Furniture</option>
                <option>Home Appliances</option>
                <option>Complete Home Package</option>
                <option>Office Furnishing</option>
              </select>
              <textarea rows={5} className="rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/60 px-4 py-3 outline-none" placeholder="Your requirements"></textarea>
              <button type="button" className="rounded-md bg-neutral-900 text-white hover:bg-black px-5 py-3 font-semibold shadow-sm dark:bg-white dark:text-neutral-900">Submit</button>
            </form>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
