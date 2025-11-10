import { useState, useEffect } from 'react'
import { Menu, X, Sofa, Sun, Moon } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  const linkBase = 'px-3 py-2 rounded-md text-sm font-medium transition-colors'
  const linkActive = 'bg-black/10 dark:bg-white/10 text-black dark:text-white'
  const linkIdle = 'text-black/80 dark:text-white/80 hover:bg-black/10 dark:hover:bg-white/10'

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-[#f3f6ff]/70 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Sofa className="w-6 h-6 text-primary" />
            <span className="font-bold tracking-wide text-black dark:text-white">New Power</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/products', 'Products'],
              ['/offers', 'Offers'],
              ['/quote', 'Request Quote'],
              ['/contact', 'Contact'],
            ].map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10"
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              className="md:hidden p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 grid gap-1">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/products', 'Products'],
              ['/offers', 'Offers'],
              ['/quote', 'Request Quote'],
              ['/contact', 'Contact'],
            ].map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
