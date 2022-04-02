import logoImage from '../../assets/logo01/logo01.png'
import searchIcon from '../../assets/icon-search.svg';
import iconMenu from "../../assets/icon-menu/ic.menu.png"
import iconArrowDown from "../../assets/icon-arrow-down.png"
import { mock as routes } from './mock';
import { 
    WrapHeader,
    WrapMenuResponsive,
    HeaderPresentContainer, 
    HeaderNavContainer,
    HeaderNavLink, 
    HeaderNavHover,
    WrapHeaderNavHover,
} from './header';
import { useState } from 'react';

export type NavProps = {
    id:string,
    link: string;
    text: string;
}

export type HeaderNavProps = NavProps & {
    nav?: NavProps[]
}

export function Header(){

    const [teste, setTeste] = useState(false)

    return(
        <WrapHeader>
            <HeaderPresentContainer>
                <button className='iconMenu' onClick={()=>setTeste(true)}><img  src={iconMenu} alt='icon-menu'/></button>
                <a className='linkLogo' href="http://localhost:3001/" target="blank"><img className='logoImage' src={logoImage} alt='logoImage'/></a>
                <img className='iconSearch' src={searchIcon} alt='iconSearch'/> 
            </HeaderPresentContainer>
            <WrapMenuResponsive>
            {routes.map((item)=>(
                item.nav?.map((itemNav)=>(
                    <div key={itemNav.text} style={{marginLeft:'16px'}}>
                        <a id={itemNav.id}>{itemNav.text}</a>
                    </div>
                ))
            ))}
            </WrapMenuResponsive>
            <HeaderNavContainer>
            {routes.map((item) => (
                <HeaderNavLink key={item.text} className={item.id} href={item.link}>
                    {item.text}
                    <img className='iconArrowDown' src={iconArrowDown} alt="icon- arrow-menu" style={{marginLeft:'10px', width:'15px', height:'15px'}}/>
                    <WrapHeaderNavHover>
                        {item.nav?.map((itemNav) => (
                            <HeaderNavHover key={itemNav.text} className={itemNav.id} href={itemNav.link}>
                                {itemNav.text}
                            </HeaderNavHover>
                        ))}
                  </WrapHeaderNavHover>
                </HeaderNavLink>
           ))}
           </HeaderNavContainer>
        </WrapHeader>
    );
};