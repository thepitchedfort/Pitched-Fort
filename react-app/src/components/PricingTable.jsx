import { pricingTiers, additionalTent, pricingNotes } from '../data/pricing'
import { Star } from './Decorations'

// A mobile-friendly pricing display: cards on small screens, a clean
// two-column table feel on larger screens.
export default function PricingTable() {
  return (
    <div>
      {/* Column legend */}
      <div className="mx-auto mb-6 flex max-w-md items-center justify-center gap-6 text-sm">
        <span className="flex items-center gap-2 font-semibold text-navy">
          <span className="h-3 w-3 rounded-full bg-navy" /> Full-Service
        </span>
        <span className="flex items-center gap-2 font-semibold text-sage-deep">
          <span className="h-3 w-3 rounded-full bg-sage" /> DIY Pickup
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.guests}
            className="card-tpf group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-soft"
          >
            <Star className="absolute -right-2 -top-2 h-12 w-12 text-blush-soft transition group-hover:text-blush" />
            <p className="font-script text-2xl text-blush-deep">cozy for</p>
            <h3 className="font-serif text-2xl font-semibold text-navy">
              {tier.guests} {tier.guests === 1 ? 'Guest' : 'Guests'}
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-navy/5 p-3 text-center">
                <p className="text-[11px] font-bold uppercase tracking-wider text-navy/60">
                  Full-Service
                </p>
                <p className="font-serif text-2xl font-semibold text-navy">${tier.fullService}</p>
              </div>
              <div className="rounded-2xl bg-sage-soft/40 p-3 text-center">
                <p className="text-[11px] font-bold uppercase tracking-wider text-sage-deep">DIY</p>
                <p className="font-serif text-2xl font-semibold text-sage-deep">${tier.diy}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Additional tent callout */}
        <div className="card-tpf flex flex-col items-center justify-center bg-blush-soft/40 p-6 text-center">
          <span className="text-3xl">⛺</span>
          <p className="mt-2 font-serif text-xl font-semibold text-navy">{additionalTent.label}</p>
          <p className="font-script text-3xl text-blush-deep">+${additionalTent.price}</p>
          <p className="mt-1 text-xs text-navy/60">Grow your party as big as the guest list!</p>
        </div>
      </div>

      {/* Notes */}
      <div className="mt-8 rounded-4xl border border-navy/10 bg-white/70 p-6">
        <ul className="space-y-2.5">
          {pricingNotes.map((note, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-navy/75">
              <Star className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
