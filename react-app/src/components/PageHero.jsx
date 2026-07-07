import { StarField } from './Decorations'

// A consistent header band for inner pages: soft navy night-sky wash,
// script eyebrow, serif title, and an optional intro line.
export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-deep text-cream">
      <StarField className="opacity-70" />
      <div className="container-tpf relative py-16 text-center sm:py-20">
        {eyebrow && <p className="font-script text-3xl text-blush">{eyebrow}</p>}
        <h1 className="mt-1 font-serif text-4xl font-semibold sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-cream/80 leading-relaxed">{subtitle}</p>
        )}
        {children && <div className="mt-7 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
      {/* soft scalloped bottom edge */}
      <div className="h-6 bg-cream" style={{ borderTopLeftRadius: '50% 100%', borderTopRightRadius: '50% 100%' }} />
    </section>
  )
}
