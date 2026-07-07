import { Link } from 'react-router-dom'
import ImagePlaceholder from './ImagePlaceholder'

// A single theme card: photo placeholder, name, fun description, and
// an "Ask About This Theme" button that pre-fills the contact form.
export default function ThemeCard({ theme }) {
  return (
    <div className="card-tpf group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-soft">
      {/* Photo / placeholder area with a soft themed wash */}
      <div className="relative">
        {theme.image ? (
          <ImagePlaceholder src={theme.image} alt={`${theme.name} sleepover setup`} ratio="aspect-[4/3]" className="rounded-none" />
        ) : (
          <div
            className="flex aspect-[4/3] items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${theme.accent[0]}33, ${theme.accent[1]}55)`,
            }}
            role="img"
            aria-label={`${theme.name} theme — add photo`}
          >
            <span className="text-5xl drop-shadow-sm" aria-hidden="true">
              {theme.icon}
            </span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy/70">
          Theme
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl font-semibold text-navy">{theme.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/70">{theme.description}</p>
        <Link
          to={`/contact?theme=${encodeURIComponent(theme.name)}`}
          className="btn-secondary mt-4 w-full !py-2.5 text-xs"
        >
          Ask About This Theme
        </Link>
      </div>
    </div>
  )
}
