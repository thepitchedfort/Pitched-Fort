// ─────────────────────────────────────────────────────────────
//  LOGO — refreshed concept for The Pitched Fort
//
//  An elegant line-art teepee with a crowning moon + twinkling
//  stars and a soft pennant flag. Three usable variants:
//    variant="primary"  → icon + stacked wordmark (header, hero)
//    variant="horizontal"→ icon + inline wordmark
//    variant="icon"     → submark only (favicon, social avatar)
//
//  `tone` controls the color set: 'navy' (default) or 'cream'
//  (for placing on dark navy backgrounds, e.g. the footer).
// ─────────────────────────────────────────────────────────────

function Mark({ className = '', tone = 'navy' }) {
  const ink = tone === 'cream' ? '#FBF5EB' : '#22395B'
  const blush = '#EBB7BE'
  const sage = '#9DB29A'
  const gold = tone === 'cream' ? '#ECD6A8' : '#D9B26A'

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="The Pitched Fort tent and moon emblem"
    >
      {/* twinkling stars */}
      <g fill={gold}>
        <path d="M24 20 l1.4 3.2 3.4.4-2.5 2.4.7 3.4-3-1.7-3 1.7.7-3.4-2.5-2.4 3.4-.4z" />
        <circle cx="78" cy="30" r="1.6" />
        <circle cx="68" cy="16" r="1.1" />
      </g>

      {/* crescent moon */}
      <g>
        <circle cx="74" cy="22" r="8" fill={gold} opacity="0.9" />
        <circle cx="77.5" cy="20" r="6.8" fill={tone === 'cream' ? '#22395B' : '#FBF5EB'} />
      </g>

      {/* teepee — clean line work */}
      <path
        d="M50 30 L72 82 H28 Z"
        fill="none"
        stroke={ink}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* doorway */}
      <path d="M50 50 L41 82 H59 Z" fill={blush} opacity="0.85" />
      {/* center pole + crossed top poles */}
      <path d="M50 30 V50" stroke={sage} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 30 L45 24 M50 30 L55 24" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
      {/* little pennant */}
      <path d="M50 24 V18 L58 21 L50 24" fill={sage} />
    </svg>
  )
}

export default function Logo({ variant = 'primary', tone = 'navy', className = '' }) {
  const ink = tone === 'cream' ? 'text-cream' : 'text-navy'

  if (variant === 'icon') {
    return <Mark className={className || 'h-10 w-10'} tone={tone} />
  }

  if (variant === 'horizontal') {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        <Mark className="h-10 w-10 shrink-0" tone={tone} />
        <span className={`font-serif text-xl font-semibold leading-none ${ink}`}>
          The Pitched Fort
        </span>
      </span>
    )
  }

  // primary — icon above a stacked, balanced wordmark
  return (
    <span className={`inline-flex flex-col items-center text-center ${className}`}>
      <Mark className="h-12 w-12" tone={tone} />
      <span className={`mt-1 font-serif text-lg font-semibold leading-tight ${ink}`}>
        The Pitched Fort
      </span>
      <span className="font-script text-base leading-none text-blush-deep">
        luxury sleepovers
      </span>
    </span>
  )
}
