// ─────────────────────────────────────────────────────────────
//  GLOBAL SITE INFO
//  Update business details, links, and the inquiry form here.
//  These values feed the header, footer, contact page, and CTAs.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'The Pitched Fort',
  tagline: 'Luxury Sleepover Tent Parties',
  // We keep the full street address private and share it only with
  // confirmed DIY clients. Publicly we show the city/state only.
  address: {
    city: 'Shreveport',
    state: 'LA',
    public: 'Shreveport, LA',
    diyNote: 'DIY pickup address shared once your booking is confirmed.',
  },
  serviceArea: 'Shreveport, LA & surrounding areas',

  // ── Links ──
  facebook: 'https://www.facebook.com/thepitchedfort',
  instagram: 'https://www.instagram.com/thepitchedfort', // TODO: confirm handle
  tiktok: 'https://www.tiktok.com/@thepitchedfort', // TODO: confirm handle
  socialHandle: '@ThePitchedFort',

  // ── Contact ──
  // TODO: add a public business email / phone if you'd like them shown.
  email: '', // e.g. 'hello@thepitchedfort.com'
  phone: '', // e.g. '(318) 555-0123'

  // The existing Google Form (used as a fallback / backup inquiry link).
  googleForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSduGDZtB_ERR1MVa0e-LiXNowE3Xcb9UMvyE6VDoe45n0Yl-w/viewform',
}

// Primary navigation (used in header + mobile menu)
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Themes', to: '/themes' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Add-Ons', to: '/add-ons' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Policies', to: '/policies' },
]
