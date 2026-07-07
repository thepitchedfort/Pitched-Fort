// ─────────────────────────────────────────────────────────────
//  IMAGE PLACEHOLDER
//  Shows a labeled, on-brand placeholder until you add real photos.
//
//  To use a real image instead, pass `src`:
//    <ImagePlaceholder src="/gallery/setup-1.jpg" alt="Unicorn setup" />
//  (drop the file into /public/gallery and reference it from "/").
// ─────────────────────────────────────────────────────────────

export default function ImagePlaceholder({
  label = 'Add your photo here',
  src,
  alt = '',
  icon = '📷',
  ratio = 'aspect-[4/3]',
  className = '',
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`${ratio} w-full rounded-3xl object-cover ${className}`}
      />
    )
  }

  return (
    <div
      className={`${ratio} relative flex w-full flex-col items-center justify-center gap-2
        overflow-hidden rounded-3xl border-2 border-dashed border-navy/25
        bg-gradient-to-br from-cream-deep via-cream to-blush-soft/50 text-center ${className}`}
      role="img"
      aria-label={`Image placeholder: ${alt || label}`}
    >
      <span className="text-3xl opacity-80">{icon}</span>
      <span className="px-4 text-xs font-bold uppercase tracking-widest text-navy/55">
        {label}
      </span>
    </div>
  )
}
