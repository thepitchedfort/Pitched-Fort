// A reusable section header: soft script eyebrow + serif title +
// optional supporting line. Centered by default.
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center'
  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && <span className="eyebrow mb-1">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl font-semibold text-navy max-w-2xl">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-navy/70 leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
