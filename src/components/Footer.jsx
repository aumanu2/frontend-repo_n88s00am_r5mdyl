import { MapPin, Phone, Mail } from 'lucide-react'
import { CONTACT, SOCIALS } from '../data'

export default function Footer() {
  const mapQuery = encodeURIComponent(CONTACT.address)
  const mapUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`

  return (
    <footer className="bg-[#ecf2ff] dark:bg-neutral-950 border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Visit Us</h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">{CONTACT.address}</p>
            <div className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {CONTACT.phones.join(' / ')}</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {CONTACT.emails.join(' / ')}</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Open: {CONTACT.hours[0]} | {CONTACT.hours[1]} | {CONTACT.hours[2]}</div>
            </div>

            <div className="mt-6 flex gap-4">
              <a href={SOCIALS.facebook} className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-[#0b63ff]">Facebook</a>
              <a href={SOCIALS.instagram} className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-[#0b63ff]">Instagram</a>
              <a href={SOCIALS.twitter} className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-[#0b63ff]">Twitter</a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-black/5 dark:border-white/5">
            <iframe title="map" src={mapUrl} className="w-full h-[300px] sm:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>

        <div className="mt-10 text-xs text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} New Power Home Appliance & Furniture. All rights reserved.</div>
      </div>
    </footer>
  )
}
