import { Flower } from './Flower'

export function Navbar() {
  return <nav className="nav shell"><a className="brand" href="#top" aria-label="Sunny birthday home"><span className="brand-mark"><Flower /></span><span>For <em>you</em></span></a><div className="nav-links"><a href="#favorites">The favorites</a><a href="#note">A little note</a></div><a className="nav-pill" href="#note">With love <span>↗</span></a></nav>
}
