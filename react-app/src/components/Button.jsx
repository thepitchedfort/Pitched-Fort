import { Link } from 'react-router-dom'

// A flexible button that renders as a React Router <Link>, an external
// <a>, or a <button> depending on the props you pass.
//   to="/pricing"        → internal link
//   href="https://..."   → external link (opens in new tab)
//   onClick / type       → plain button
// variant: 'primary' | 'secondary' | 'blush'
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const cls = `btn-${variant} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
