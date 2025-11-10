import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-black/60 text-white px-3 py-1 text-xs backdrop-blur dark:bg-white/10">
              <span>New Power Home Appliance & Furniture</span>
              <span className="opacity-70">• Luxury • Contemporary • Urban</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Design that elevates everyday living
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-200">
              Crafting premium furniture and home appliances with precision, innovation, and unmatched quality. From concept to creation—manufactured in our own factory.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-md bg-[#e6f0ff] text-[#0b63ff] hover:bg-[#d9e9ff] px-5 py-3 font-semibold shadow-sm">
                Explore Products
              </a>
              <a href="/quote" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white hover:bg-black px-5 py-3 font-semibold shadow-sm dark:bg-white dark:text-neutral-900">
                Request a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f3f6ff] to-transparent dark:from-neutral-950" />
    </section>
  )
}
