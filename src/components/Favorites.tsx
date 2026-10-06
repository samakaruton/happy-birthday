import { memories } from '../data/memories'

export function Favorites() {
  return <section className="favorites shell" id="favorites"><div className="section-heading"><div><p className="eyebrow"><span /> The good stuff</p><h2>A few of our<br /><i>favorite</i> things.</h2></div><p>Because the best kind of birthday is made up of all the small things that feel like home.</p></div><div className="memory-grid">{memories.map((memory, index) => <article className={`memory-card ${memory.className}`} key={memory.title}><div className="memory-image"><img src={memory.image} alt={memory.title} /><span className="card-number">0{index + 1}</span></div><div className="memory-body"><p className="card-label">{memory.label}</p><h3>{memory.title}</h3><p>{memory.copy}</p></div></article>)}</div></section>
}
