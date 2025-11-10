import Section from './Section'
import { STATS } from '../data'

export default function Stats() {
  return (
    <Section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-xl border border-black/5 dark:border-white/5 bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-6 text-center">
              <div className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">{s.value}</div>
              <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
