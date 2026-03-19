import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const WHATSAPP_URL = 'https://wa.me/916284194620'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-espresso)] text-[var(--color-cream)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="font-[var(--font-serif)] text-xl font-semibold">New Wear Well</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-cream)]/80">
              Premium bespoke menswear from Punjab—crafted with generational skill and finished for a perfect fit.
              Perfect-Fit Guarantee on every order.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--color-gold)]/25 bg-[var(--color-espresso)]/40 p-2 transition hover:border-[var(--color-gold)]/60"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-[var(--color-gold)]" />
              </a>
              <a
                href="https://www.instagram.com/wearwellabohar"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--color-gold)]/25 bg-[var(--color-espresso)]/40 p-2 transition hover:border-[var(--color-gold)]/60"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-[var(--color-gold)]" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--color-gold)]/25 bg-[var(--color-espresso)]/40 p-2 transition hover:border-[var(--color-gold)]/60"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5 text-[var(--color-gold)]" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-cream)]/80">Quick Links</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a className="text-[var(--color-cream)]/80 transition hover:text-[var(--color-cream)]" href="#heritage">
                  Heritage
                </a>
              </li>
              <li>
                <Link className="text-[var(--color-cream)]/80 transition hover:text-[var(--color-cream)]" to="/collections">
                  Collections
                </Link>
              </li>
              <li>
                <a className="text-[var(--color-cream)]/80 transition hover:text-[var(--color-cream)]" href="#bespoke-process">
                  The Bespoke Process
                </a>
              </li>
              <li>
                <a className="text-[var(--color-cream)]/80 transition hover:text-[var(--color-cream)]" href="#reviews">
                  Reviews
                </a>
              </li>
              <li>
                <a
                  className="text-[var(--color-cream)]/80 transition hover:text-[var(--color-cream)]"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          <div id="book">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-cream)]/80">Contact</p>

            <div className="mt-4 space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" aria-hidden="true" />
                <div className="text-[var(--color-cream)]/80">
                  <p>New Wear Well Complex, Bhagat Singh Chowk, Circular Rd, Abohar, Punjab 152116</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" aria-hidden="true" />
                <div className="text-[var(--color-cream)]/80">
                  <p>+91 98146-01700, +91 98146-01800</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" aria-hidden="true" />
                <div className="text-[var(--color-cream)]/80">
                  <p>newwearwellstore@gmail.com</p>
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--color-gold)]/20 bg-black/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-cream)]/70">Hours</p>
                <p className="mt-2 text-[var(--color-cream)]/80">9:30 AM – 8:30 PM, Monday – Saturday.</p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[var(--color-gold)]/20 bg-black/10">
                <div className="px-4 pb-0 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-cream)]/70">Find Us</p>
                </div>
                <div className="p-4 pt-3">
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-[var(--color-gold)]/15 bg-black/20">
                    <iframe
                      title="New Wear Well Abohar Map"
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=New%20Wear%20Well%20Complex%2C%20Bhagat%20Singh%20Chowk%2C%20Circular%20Rd%2C%20Abohar%2C%20Punjab%20152116&output=embed"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-[var(--color-gold)]/20" />

        <div className="mt-6 flex flex-col items-start justify-between gap-2 text-xs text-[var(--color-cream)]/70 sm:flex-row">
          <p>© {new Date().getFullYear()} New Wear Well. All rights reserved.</p>
          <p>Crafted in Punjab. Shipped globally.</p>
        </div>
      </div>
    </footer>
  )
}
