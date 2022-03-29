import logoImage from '../../assets/logo01/logo01.png'
import searchIcon from '../../assets/icon-search.svg';
import { WrapHeader, 
    HeaderPresentContainer, 
    HeaderNavContainer, 
    HeaderNavLink, 
    HeaderNavHover 
} from './header';

type HeaderNavProps = {
    id:string,
    link: string;
    text: string;
}

const routes: HeaderNavProps[] = [
    {
        id:'01',
        link:'#',
        text: 'about us'
    },
    {
        id:'02',
        link:'#',
        text: 'our products'
    },

    {
        id:'03',
        link:'#',
        text: 'intimate health'
    },

    {
        id:'04',
        link:'#',
        text: 'contact us'
    }
]

const about: HeaderNavProps[] = [
    {
        id:'05',
        link: '#brand-philosophy',
        text: 'brand philosophy'    
    },
    {
        id:'06',
        link: '#product-technology',
        text: 'product technology'    
    }
]

const products: HeaderNavProps[] = [
    {
        id:'07',
        link: '#products',
        text: 'all products'    
    },
    {
        id:'08',
        link: '#products',
        text: 'intibiome wellness'    
    },
    {
        id:'09',
        link: '#products',
        text: 'intibiome active'    
    },
    {
        id:'10',
        link: '#products',
        text: 'intibiome agecare'    
    },
]

const health: HeaderNavProps[] = [
    {
        id:'11',
        link: '#articles',
        text: 'article 1'    
    },
    {
        id:'12',
        link: '#articles',
        text: 'article 2'    
    },
    {
        id:'13',
        link: '#articles',
        text: 'article 3'    
    },
    {
        id:'14',
        link: '#',
        text: 'faq'    
    },
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
                    <HeaderNavLink key={item.text} id={item.id} href={item.link}>{item.text}</HeaderNavLink>
                ))}
            </HeaderNavContainer>
            <HeaderNavHover id="about">
                {about.map((item) => (
                    <HeaderNavLink key={item.text} id={item.id} href={item.link}>{item.text}</HeaderNavLink>
                ))}
            </HeaderNavHover>
            <HeaderNavHover>
                {products.map((item) => (
                    <HeaderNavLink key={item.text} id={item.id} href={item.link}>{item.text}</HeaderNavLink>
                ))}
            </HeaderNavHover>
            <HeaderNavHover>
                {health.map((item) => (
                    <HeaderNavLink key={item.text} id={item.id} href={item.link}>{item.text}</HeaderNavLink>
                ))}
            </HeaderNavHover>
        </WrapHeader>
    );
};