import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'

const message = 'HAPPY BIRTHDAY MRS. GRATTON'

export function BirthdayGreeting() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 5000)
    return () => window.clearTimeout(timeout)
  }, [])

  if (!visible) return null

  return (
    <div className="birthday-greeting" aria-live="polite" aria-label="Happy birthday">
      <p className="greeting-kicker">A wish made just for you</p>
      <h2>{message.split('').map((letter, index) => letter === ' ' ? <span className="greeting-space" key={`space-${index}`} /> : <span key={`${letter}-${index}`} style={{ '--letter-delay': `${index * 75}ms` } as CSSProperties}>{letter}</span>)}</h2>
      <span className="greeting-sparkle">✦</span>
    </div>
  )
}
