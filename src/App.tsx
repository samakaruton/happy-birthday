import { useState } from 'react'
import './App.css'

const memories = [
  { label: 'The little things', title: 'Slow mornings', copy: 'For the coffee that makes the day feel softer and the conversations that last a little too long.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85', className: 'memory-coffee' },
  { label: 'Always by your side', title: 'Tiny paws', copy: 'For the sweetest little shadow, who knows that every good day is better with a walk and a cuddle.', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85', className: 'memory-dog' },
  { label: 'A little more you', title: 'Golden light', copy: 'For all the warmth you bring into the room just by being exactly who you are.', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85', className: 'memory-woman' },
]

function Flower({ className = '' }: { className?: string }) {
  return <span className={`flower ${className}`} aria-hidden="true">{Array.from({ length: 8 }).map((_, index) => <i key={index} style={{ transform: `rotate(${index * 45}deg) translateY(-13px)` }} />)}<b /></span>
}

function App() {
  const [noteOpen, setNoteOpen] = useState(false)

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Sunny birthday home"><span className="brand-mark"><Flower /></span><span>For <em>you</em></span></a>
        <div className="nav-links"><a href="#favorites">The favorites</a><a href="#note">A little note</a></div>
        <a className="nav-pill" href="#note">With love <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A little birthday love letter</p>
          <h1>Here’s to your <span>brightest</span> year yet.</h1>
          <p className="hero-intro">Today is a celebration of you — your warm heart, your quiet magic, and all the little ways you make ordinary days feel golden.</p>
          <div className="hero-actions"><a className="button button-dark" href="#note">Read your note <span>↗</span></a><a className="text-link" href="#favorites">See the good stuff <span>↓</span></a></div>
          <div className="hero-signoff"><div className="avatar-stack"><span>✦</span><span>☕</span><span>♡</span></div><p>Made with sunshine<br /><strong>and a whole lot of love.</strong></p></div>
        </div>
        <div className="hero-art" aria-label="A sunny birthday collage with daisies, coffee, a dog, and a woman">
          <div className="sun-disc" /><div className="art-note">you make<br /><strong>life lovely</strong></div>
          <div className="photo photo-main"><img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85" alt="Woman smiling in warm sunlight" /><span className="photo-caption">stay golden</span></div>
          <div className="photo photo-dog"><img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=700&q=85" alt="Small fluffy dog" /></div>
          <div className="photo photo-coffee"><img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=700&q=85" alt="Coffee on a sunny table" /></div>
          <div className="daisy daisy-one"><Flower /></div><div className="daisy daisy-two"><Flower /></div><div className="doodle-heart">♡</div>
        </div>
      </section>

      <section className="marquee" aria-label="Birthday wishes"><div><span>happy birthday</span><b>✳</b><span>keep blooming</span><b>✳</b><span>happy birthday</span><b>✳</b><span>keep blooming</span></div></section>

      <section className="favorites shell" id="favorites">
        <div className="section-heading"><div><p className="eyebrow"><span /> The good stuff</p><h2>A few of our<br /><i>favorite</i> things.</h2></div><p>Because the best kind of birthday is made up of all the small things that feel like home.</p></div>
        <div className="memory-grid">{memories.map((memory, index) => <article className={`memory-card ${memory.className}`} key={memory.title}><div className="memory-image"><img src={memory.image} alt={memory.title} /><span className="card-number">0{index + 1}</span></div><div className="memory-body"><p className="card-label">{memory.label}</p><h3>{memory.title}</h3><p>{memory.copy}</p></div></article>)}</div>
      </section>

      <section className="note-section shell" id="note">
        <div className="note-card"><div className="note-flower"><Flower /></div><p className="eyebrow"><span /> Open when you need a smile</p><h2>A note, just<br /><i>for you.</i></h2>{!noteOpen ? <button className="button button-yellow" type="button" onClick={() => setNoteOpen(true)}>Open your birthday note <span>→</span></button> : <div className="revealed-note"><p>May this next trip around the sun bring you slow mornings, brave beginnings, belly laughs, and every good thing you’ve been quietly wishing for.</p><strong>Happy birthday, beautiful. ♡</strong></div>}</div>
        <div className="note-side"><div className="quote-mark">“</div><p>The world is a little warmer, brighter, and more interesting because you’re in it.</p><span>— with all my love</span><div className="side-daisy"><Flower /></div></div>
      </section>

      <footer className="footer shell"><div className="brand"><span className="brand-mark"><Flower /></span><span>For <em>you</em></span></div><p>Made for a very special birthday · 2026</p><span className="footer-sparkle">✦</span></footer>
    </main>
  )
}

export default App
