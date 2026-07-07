// ─────────────────────────────────────────────────────────────
//  DECORATIONS — small whimsical SVG accents
//  Stars, moons, hearts, bows, bunting & a soft botanical sprig.
//  Used as subtle background/section flourishes.
// ─────────────────────────────────────────────────────────────

export function Star({ className = '', color = 'currentColor', style }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} style={style} aria-hidden="true">
      <path d="M12 2l2.4 6.2L21 9.3l-5 4.4L17.6 21 12 17.3 6.4 21 8 13.7l-5-4.4 6.6-1.1z" />
    </svg>
  )
}

export function Moon({ className = '', color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
    </svg>
  )
}

export function Heart({ className = '', color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M12 21s-7.5-4.8-10-9.3C.6 8.9 2 5.5 5.3 5.1c2-.2 3.5 1 4.7 2.5C11.2 6.1 12.7 5 14.7 5.1c3.3.3 4.7 3.8 3.3 6.6C19.5 16.2 12 21 12 21z" />
    </svg>
  )
}

export function Bow({ className = '', color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 32 24" className={className} fill={color} aria-hidden="true">
      <path d="M16 12c-3-4-6-7-9-6-2 .7-2 4 0 6-2 2-2 5 0 5.7 3 1 6-2 9-5.7z" />
      <path d="M16 12c3-4 6-7 9-6 2 .7 2 4 0 6 2 2 2 5 0 5.7-3 1-6-2-9-5.7z" />
      <circle cx="16" cy="12" r="2.4" />
    </svg>
  )
}

export function Sprig({ className = '', color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 24 40" className={className} fill="none" stroke={color} strokeWidth="1.4" aria-hidden="true">
      <path d="M12 38V6" strokeLinecap="round" />
      <path d="M12 14c-3-1-5-3-5-6 3 0 5 2 5 6zM12 14c3-1 5-3 5-6-3 0-5 2-5 6z" fill={color} stroke="none" opacity="0.85" />
      <path d="M12 24c-3-1-5-3-5-6 3 0 5 2 5 6zM12 24c3-1 5-3 5-6-3 0-5 2-5 6z" fill={color} stroke="none" opacity="0.7" />
    </svg>
  )
}

// A repeating triangular bunting/banner — great as a section topper.
export function Bunting({ className = '' }) {
  const colors = ['#EBB7BE', '#9DB29A', '#D9B26A', '#34507A']
  const flags = Array.from({ length: 12 })
  return (
    <svg viewBox="0 0 480 36" className={className} preserveAspectRatio="xMidYMin meet" aria-hidden="true">
      <path d="M0 6 Q240 22 480 6" fill="none" stroke="#22395B" strokeWidth="1.5" opacity="0.4" />
      {flags.map((_, i) => {
        const x = 12 + i * 40
        return (
          <path
            key={i}
            d={`M${x} 8 L${x + 28} 8 L${x + 14} 30 Z`}
            fill={colors[i % colors.length]}
            opacity="0.9"
          />
        )
      })}
    </svg>
  )
}

// Scattered twinkling stars for hero/section backgrounds.
export function StarField({ className = '' }) {
  const stars = [
    { x: 8, y: 18, s: 14, d: '0s' },
    { x: 22, y: 8, s: 8, d: '0.6s' },
    { x: 40, y: 22, s: 6, d: '1.1s' },
    { x: 64, y: 10, s: 10, d: '0.3s' },
    { x: 82, y: 20, s: 8, d: '0.9s' },
    { x: 92, y: 8, s: 12, d: '1.4s' },
    { x: 54, y: 6, s: 6, d: '1.8s' },
    { x: 14, y: 34, s: 7, d: '0.2s' },
  ]
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {stars.map((st, i) => (
        <Star
          key={i}
          color="#D9B26A"
          className="absolute animate-twinkle"
          // inline style for placement + per-star delay
          // eslint-disable-next-line react/no-unknown-property
          style={{
            left: `${st.x}%`,
            top: `${st.y}%`,
            width: st.s,
            height: st.s,
            animationDelay: st.d,
          }}
        />
      ))}
    </div>
  )
}
