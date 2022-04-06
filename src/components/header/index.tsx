import logoImage from '../../assets/logo-produto/logo-produto.png'
import searchIcon from '../../assets/icon-search.svg'
import iconMenu from '../../assets/icon-menu/ic.menu.png'
import iconArrowDown from '../../assets/icon-arrow-down.png'
import { mock as routes } from './mock'
import {
  WrapHeader,
  WrapMenuResponsive,
  HeaderPresentContainer,
  HeaderNavContainer,
  HeaderNavLink,
  HeaderNavHover,
  WrapHeaderNavHover
} from './styles'

export type NavProps = {
  id: string
  link: string
  text: string
}

export type HeaderNavProps = NavProps & {
  nav?: NavProps[]
}

export type HeaderProps = {
  handleToggleMenu: () => void
  menuOpen: boolean
}

export function Header({ handleToggleMenu, menuOpen }: HeaderProps) {
  return (
    <>
      <WrapHeader>
        <HeaderPresentContainer>
          <button id="iconMenu" onClick={handleToggleMenu}>
            <img src={iconMenu} alt="icon-menu" />
          </button>
          <a id="linkLogo" href="http://localhost:3000/">
            <img className="logoImage" src={logoImage} alt="logoImage" />
          </a>
          <img className="iconSearch" src={searchIcon} alt="iconSearch" />
        </HeaderPresentContainer>
        {menuOpen ? (
          <WrapMenuResponsive>
            {routes.map((item) =>
              item.nav?.map((itemNav) => (
                <div key={itemNav.text} style={{ marginLeft: '16px' }}>
                  <a id={itemNav.id}>{itemNav.text}</a>
                </div>
              ))
            )}
          </WrapMenuResponsive>
        ) : (
          <HeaderNavContainer id="NavContainer">
            {routes.map((item) => (
              <HeaderNavLink
                id="HeaderNavLink"
                key={item.text}
                className={item.id}
                href={item.link}
              >
                {item.text}
                <img
                  className="iconArrowDown"
                  src={iconArrowDown}
                  alt="icon- arrow-menu"
                  style={{ marginLeft: '10px', width: '15px', height: '15px' }}
                />
                <WrapHeaderNavHover id="HeaderNavHover">
                  {item.nav?.map((itemNav) => (
                    <HeaderNavHover
                      key={itemNav.text}
                      className={itemNav.id}
                      href={itemNav.link}
                    >
                      {itemNav.text}
                    </HeaderNavHover>
                  ))}
                </WrapHeaderNavHover>
              </HeaderNavLink>
            ))}
          </HeaderNavContainer>
        )}
      </WrapHeader>
    </>
  )
}
