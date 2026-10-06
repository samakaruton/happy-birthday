type FlowerProps = { className?: string }

export function Flower({ className = '' }: FlowerProps) {
  return (
    <span className={`flower ${className}`} aria-hidden="true">
      {Array.from({ length: 8 }).map((_, index) => (
        <i key={index} style={{ transform: `rotate(${index * 45}deg) translateY(-13px)` }} />
      ))}
      <b />
    </span>
  )
}
