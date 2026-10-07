import { useState } from 'react'
import './App.css'
import { BirthdayCard } from './components/BirthdayCard'
import { FallingDaisies } from './components/FallingDaisies'
import { Favorites } from './components/Favorites'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Navbar } from './components/Navbar'
import { NoteSection } from './components/NoteSection'

function App() {
  const [isCardOpening, setIsCardOpening] = useState(false)
  const [hasOpenedCard, setHasOpenedCard] = useState(false)

  const openCard = () => {
    setIsCardOpening(true)
    window.setTimeout(() => setHasOpenedCard(true), 900)
  }

  return (
    <main>
      {!hasOpenedCard && <BirthdayCard isOpening={isCardOpening} onOpen={openCard} />}
      <FallingDaisies />
      <Navbar />
      <Hero />
      <Marquee />
      <Favorites />
      <NoteSection />
      <Footer />
    </main>
  )
}

export default App
