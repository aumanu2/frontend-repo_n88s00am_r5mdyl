import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Section({ children, className = '', ...rest }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  )
}
