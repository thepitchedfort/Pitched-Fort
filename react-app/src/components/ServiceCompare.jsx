import { site } from '../data/site'
import Button from './Button'

const fullService = [
  'We deliver right to your door',
  'Complete, professional setup',
  'Full styling of every detail',
  'We return for breakdown & pickup',
  'Truly hands-off for parents',
]

const diy = [
  'Pick up the kit from our Shreveport location',
  'Set up with our easy step-by-step guide',
  'Enjoy the party on your schedule',
  'Return everything after your event',
  'A budget-friendly, hands-on option',
]

// A clear, parent-friendly side-by-side comparison of the two options.
export default function ServiceCompare() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Full-Service */}
      <div className="card-tpf relative overflow-hidden p-7">
        <span className="absolute right-4 top-4 rounded-full bg-navy px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cream">
          Most Popular
        </span>
        <span className="text-3xl" aria-hidden="true">✨</span>
        <h3 className="mt-3 font-serif text-2xl font-semibold text-navy">Full-Service</h3>
        <p className="mt-2 text-sm text-navy/70">
          We deliver, set up, style the sleepover, and return for breakdown and pickup. You simply
          enjoy the magic.
        </p>
        <ul className="mt-5 space-y-3">
          {fullService.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/80">
              <Check className="mt-0.5 text-sage-deep" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* DIY */}
      <div className="card-tpf relative overflow-hidden bg-sage-soft/25 p-7">
        <span className="text-3xl" aria-hidden="true">📦</span>
        <h3 className="mt-3 font-serif text-2xl font-semibold text-navy">DIY Pickup</h3>
        <p className="mt-2 text-sm text-navy/70">
          Pick up the party kit from our {site.address.public} location, set it up using our
          instructions, enjoy the party, and return everything after the event.
        </p>
        <ul className="mt-5 space-y-3">
          {diy.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-navy/80">
              <Check className="mt-0.5 text-blush-deep" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-2 flex flex-col items-center gap-3 rounded-4xl bg-navy/5 p-6 text-center">
        <p className="text-navy/75">Not sure which is right for you? We’re happy to help you decide.</p>
        <Button to="/contact" variant="primary">Ask Us a Question</Button>
      </div>
    </div>
  )
}

function Check({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
