import logoImage from '../../assets/logo01/logo01.png'
import searchIcon from '../../assets/icon-search.svg';
import iconMenu from "../../assets/icon-menu/ic.menu.png"
import { 
    WrapHeader,
    HeaderPresentContainer, 
    HeaderNavContainer,
    HeaderNavLink, 
    HeaderNavHover,
} from './header';

type HeaderNavProps = {
    id:string,
    link: string;
    text: string;
    nav?:[
        {
            id?:string,
            link?: string;
            text?: string;
        },
        {
            id?:string,
            link?: string;
            text?: string;
        },
        {
            id?:string,
            link?: string;
            text?: string;
        },
        {
            id?:string,
            link?: string;
            text?: string;
        }
    ]
}

const routes: HeaderNavProps[] = [
    {
        id:'nav01',
        link:'#',
        text: 'about us',
        nav: [
            {
                id:'nav05',
                link: '#brand-philosophy',
                text: 'brand philosophy'    
            },
            {
                id:'nav06',
                link: '#product-technology',
                text: 'product technology'    
            },
            {
                id:'',
                link: '',
                text: ''    
            },
            {
                id:'',
                link: '',
                text: ''    
            }
        ]
    },
    {
        id:'nav02',
        link:'#',
        text: 'our products',
        nav: [
            {
                id:'nav07',
                link: '#products',
                text: 'all products'    
            },
            {
                id:'nav08',
                link: '#products',
                text: 'intibiome wellness'    
            },
            {
                id:'nav09',
                link: '#products',
                text: 'intibiome active'    
            },
            {
                id:'nav10',
                link: '#products',
                text: 'intibiome agecare'    
            }
        ]
    },
    {
        id:'nav03',
        link:'#',
        text: 'intimate health',
        nav: [
            {
                id:'nav11',
                link: '#articles',
                text: 'article 1'    
            },
            {
                id:'nav12',
                link: '#articles',
                text: 'article 2'    
            },
            {
                id:'nav13',
                link: '#articles',
                text: 'article 3'    
            },
            {
                id:'nav14',
                link: '#',
                text: 'faq'    
            }
        ]
    },
    {
        id:'nav04',
        link:'#',
        text: 'contact us',
    }
]

export function Header(){
    return(
        <WrapHeader>
            <HeaderPresentContainer>
                <img className='iconMenu' src={iconMenu} alt='iconMenu'></img>
                <a className='linkLogo' href="http://localhost:3001/" target="blank"><img className='logoImage' src={logoImage} alt='logoImage'/></a>
                <img className='iconSearch' src={searchIcon} alt='iconSearch'/> 
            </HeaderPresentContainer>
            <HeaderNavContainer>
            {routes.map((item) => (
                <HeaderNavLink key={item.text} className={item.id} href={item.link}>
                    {item.text}
                    {item.nav?.map((itemNav) => (
                        <HeaderNavHover key={itemNav.text} className={itemNav.id} href={itemNav.link}>
                            {itemNav.text}
                        </HeaderNavHover>
                    ))}
                </HeaderNavLink>
           ))}
           </HeaderNavContainer>
        </WrapHeader>
    );
};