import { Wrapper } from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { useState } from 'react'

export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <Wrapper>
      <Header menuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
      {!isMenuOpen && (
        <>
          <Main />
          <Footer />
        </>
      )}
    </Wrapper>
  )
}
