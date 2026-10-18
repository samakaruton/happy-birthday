import { Flower } from './Flower'
import hazel1 from '../assets/hazel1.jpeg'
import image1 from '../assets/image1.jpeg'

export function Hero() {
  return (
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
        <div className="photo photo-main"><img src={image1} alt="Woman smiling in warm sunlight" /><span className="photo-caption">stay golden</span></div>
        <div className="photo photo-dog"><img src={hazel1} alt="Small fluffy dog" /></div> 
        <div className="photo photo-coffee"><img src="/coffee-placeholder.svg" alt="Coffee on a sunny table" /></div>
        <div className="daisy daisy-one"><Flower /></div><div className="daisy daisy-two"><Flower /></div><div className="doodle-heart">♡</div>
      </div>
    </section>
  )
}
