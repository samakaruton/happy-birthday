import type { CSSProperties } from 'react'
import { Flower } from './Flower'

const daisies = [
  { left: '3%', delay: '-1s', duration: '13s', size: '.55', drift: '-22px' },
  { left: '12%', delay: '-7s', duration: '17s', size: '.38', drift: '30px' },
  { left: '22%', delay: '-3s', duration: '15s', size: '.72', drift: '-36px' },
  { left: '34%', delay: '-11s', duration: '19s', size: '.42', drift: '24px' },
  { left: '47%', delay: '-5s', duration: '16s', size: '.5', drift: '-28px' },
  { left: '59%', delay: '-9s', duration: '14s', size: '.65', drift: '34px' },
  { left: '72%', delay: '-2s', duration: '18s', size: '.4', drift: '-20px' },
  { left: '84%', delay: '-12s', duration: '15s', size: '.58', drift: '28px' },
  { left: '94%', delay: '-6s', duration: '20s', size: '.35', drift: '-25px' },
]

export function FallingDaisies() {
  return (
    <div className="falling-daisies" aria-hidden="true">
      {daisies.map((daisy, index) => (
        <span
          className="falling-daisy"
          key={index}
          style={{ '--left': daisy.left, '--delay': daisy.delay, '--duration': daisy.duration, '--size': daisy.size, '--drift': daisy.drift } as CSSProperties}
        >
          <Flower />
        </span>
      ))}
    </div>
  )
}
