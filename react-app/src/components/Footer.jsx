import { Link } from 'react-router-dom'
import { site, navLinks } from '../data/site'
import Logo from './Logo'
import { Star, Moon } from './Decorations'

function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.8 3.8 0 01-1.4-.9 3.8 3.8 0 01-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.1 3.3c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-3.3s0-2.1-.1-3.3c-.1-1.1-.2-1.7-.4-2.1a3.5 3.5 0 00-.8-1.3 3.5 3.5 0 00-1.3-.8c-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zM12 7.1a4.9 4.9 0 100 9.8 4.9 4.9 0 000-9.8zm0 8a3.1 3.1 0 110-6.2 3.1 3.1 0 010 6.2zm6.3-8.2a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z" />
    </svg>
  )
}

function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.4c-1.2.1-2.4-.2-3.5-.8v5.9c0 3.3-2.4 5.6-5.5 5.6A5.4 5.4 0 015.5 14c0-3.2 2.9-5.7 6.2-5.1v2.6c-.4-.1-.8-.2-1.2-.2-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.6-1.1 2.6-2.8V3h2.9z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-navy text-cream">
      {/* whimsical sky */}
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <Moon className="absolute right-10 top-8 h-10 w-10 text-gold" />
        <Star className="absolute left-12 top-10 h-4 w-4 text-gold animate-twinkle" />
        <Star className="absolute left-1/3 top-6 h-3 w-3 text-gold animate-twinkle" />
        <Star className="absolute right-1/4 top-16 h-3 w-3 text-gold animate-twinkle" />
      </div>

      <div className="container-tpf relative grid gap-10 py-14 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <Logo variant="primary" tone="cream" className="items-start text-left" />
          <p className="mt-4 max-w-xs text-sm text-cream/75 leading-relaxed">
            Styled, cozy, photo-worthy sleepover experiences for unforgettable celebrations in{' '}
            {site.serviceArea}.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-serif text-lg text-cream">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-cream/75 transition hover:text-blush">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Visit */}
        <div>
          <h3 className="font-serif text-lg text-cream">Find us</h3>
          <address className="mt-4 not-italic text-sm text-cream/75 leading-relaxed">
            {site.name}
            <br />
            {site.address.public}
            <br />
            <span className="text-cream/55">{site.address.diyNote}</span>
          </address>
          {site.email && (
            <a href={`mailto:${site.email}`} className="mt-3 block text-sm text-cream/75 hover:text-blush">
              {site.email}
            </a>
          )}
          {site.phone && (
            <a href={`tel:${site.phone}`} className="mt-1 block text-sm text-cream/75 hover:text-blush">
              {site.phone}
            </a>
          )}

          <div className="mt-4 flex gap-3">
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="rounded-full bg-cream/10 p-2 transition hover:bg-blush hover:text-navy">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="rounded-full bg-cream/10 p-2 transition hover:bg-blush hover:text-navy">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={site.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"
              className="rounded-full bg-cream/10 p-2 transition hover:bg-blush hover:text-navy">
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-2 text-xs text-cream/55">{site.socialHandle}</p>
        </div>

        {/* CTA */}
        <div>
          <h3 className="font-serif text-lg text-cream">Ready to celebrate?</h3>
          <p className="mt-4 text-sm text-cream/75 leading-relaxed">
            Tell us about your celebration and we’ll help you create something dreamy.
          </p>
          <Link to="/contact" className="btn-blush mt-4 w-full">
            Request My Tent Party
          </Link>
        </div>
      </div>

      <div className="relative border-t border-cream/15">
        <div className="container-tpf flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Star className="h-3 w-3 text-gold" /> for sweet dreams &amp; big celebrations.
          </p>
        </div>
      </div>
    </footer>
  )
}
