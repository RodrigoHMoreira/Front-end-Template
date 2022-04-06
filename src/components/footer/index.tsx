import logo from '../../assets/logo-laboratorio/logo-laboratorio.png'
import logoInstagram from '../../assets/icon-instagram.svg'
import {
  WrapFooter,
  FooterNavDiv,
  FooterNavContainer,
  FooterNavLink,
  FooterIconsContainer
} from './styles'

import { mocksFooter as route } from './mock'

export type FooterNavProps = {
  link: string
  text: string
}

export const Footer = () => (
  <WrapFooter>
    <FooterNavContainer>
      {route.map((item) => (
        <>
          <FooterNavLink key={item.text} href={item.link}>
            {item.text}
          </FooterNavLink>
          <FooterNavDiv>-</FooterNavDiv>
        </>
      ))}
    </FooterNavContainer>
    <FooterIconsContainer>
      <img src={logo} id="logo-image" alt="logo-image" />
      <a id="iconIstagram" href="https://www.instagram.com/" target="blank">
        <img
          src={logoInstagram}
          className="icon-instagram"
          alt="logo-instagram"
          style={{ width: '100%', height: '100%' }}
        />
      </a>
    </FooterIconsContainer>
  </WrapFooter>
)
