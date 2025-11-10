import Section from './Section'
import { FEATURES } from '../data'

export default function Features() {
  return (
    <Section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Why New Power</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">Built in our own factory. Designed for life.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, idx) => (
            <div key={idx} className="rounded-2xl border border-black/5 dark:border-white/5 bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-6">
              <p className="text-neutral-800 dark:text-neutral-200">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
