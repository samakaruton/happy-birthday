import { Flower } from './Flower'

type BirthdayCardProps = {
  isOpening: boolean
  onOpen: () => void
}

export function BirthdayCard({ isOpening, onOpen }: BirthdayCardProps) {
  return (
    <div className={`birthday-cover ${isOpening ? 'opening' : ''}`} role="dialog" aria-modal="true" aria-label="Birthday card">
      <div className="cover-glow" />
      <div className="card-cover">
        <div className="cover-tape" />
        <div className="cover-corner cover-corner-left">✦</div>
        <div className="cover-corner cover-corner-right">✦</div>
        <div className="cover-flower cover-flower-top"><Flower /></div>
        <div className="cover-copy">
          <p className="cover-kicker">A little something</p>
          <h1>For your<br /><em>birthday</em></h1>
          <p className="cover-subtitle">made with sunshine &amp; love</p>
        </div>
        <div className="cover-flower cover-flower-bottom"><Flower /></div>
        <button className="cover-button" type="button" onClick={onOpen} disabled={isOpening}>
          <span>Open your card</span><b>↗</b>
        </button>
      </div>
      <p className="cover-hint">A birthday wish, just for you</p>
    </div>
  )
}
