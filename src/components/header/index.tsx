import logoImage from '../../assets/logo01/logo01.png'
import searchIcon from '../../assets/icon-search.svg';
import { WrapHeader, HeaderPresentContainer, HeaderNavContainer, HeaderNavLink, HeaderNavHover } from '../../styles/header';

type HeaderNavProps = {
    link: string;
    text: string;
}

const routes: HeaderNavProps[] = [
    {
        link:'#',
        text: 'about us'
    },
    {
        link:'#',
        text: 'our products'
    },

    {
        link:'#',
        text: 'intimate health'
    },

    {
        link:'#',
        text: 'contact us'
    }
]

export function Header(){
    return(
        <WrapHeader>
            <HeaderPresentContainer>
                <img className='logo' src={logoImage} alt='logo image' style={{width:"195px", height:"79px"}}/>
                <img className='icon' src={searchIcon} alt='serach icon' style={{width:"24px", height:"24px", paddingLeft: "424px"}}/>
            </HeaderPresentContainer>
            <HeaderNavContainer>
                {routes.map((item) => (
                    <HeaderNavLink key={item.text} href={item.link}>{item.text}</HeaderNavLink>
                ))}
            </HeaderNavContainer>
            <HeaderNavHover>
                <HeaderNavLink>
                    brand philosophy
                </HeaderNavLink>
                <HeaderNavLink>
                    product technology
                </HeaderNavLink>
            </HeaderNavHover>
            <HeaderNavHover>
                <HeaderNavLink>
                    all products
                </HeaderNavLink>
                <HeaderNavLink>
                    intibiome wellness
                </HeaderNavLink>
                <HeaderNavLink>
                    intibiome active
                </HeaderNavLink>
                <HeaderNavLink>
                    intibiome agecare
                </HeaderNavLink>
            </HeaderNavHover>
            <HeaderNavHover>
                <HeaderNavLink>
                    article 1
                </HeaderNavLink>
                <HeaderNavLink>
                    article 2
                </HeaderNavLink>
                <HeaderNavLink>
                    article 3
                </HeaderNavLink>
                <HeaderNavLink>
                    faq
                </HeaderNavLink>
            </HeaderNavHover>

        </WrapHeader>
    );
};