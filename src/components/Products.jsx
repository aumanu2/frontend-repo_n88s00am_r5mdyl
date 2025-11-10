import { motion } from 'framer-motion'
import Section from './Section'
import { PRODUCTS } from '../data'

export default function Products() {
  return (
    <Section className="py-16 sm:py-24" id="products">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Signature Products</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Curated best-sellers across furniture and home appliances.</p>
          </div>
          <a href="/products" className="hidden sm:inline-flex text-sm font-semibold text-[#0b63ff] hover:underline">See all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 bg-white/80 dark:bg-neutral-900/60 backdrop-blur hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{p.category}</div>
                <h3 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#0b63ff]">{p.price}</span>
                  <button className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-[#0b63ff]">View</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
