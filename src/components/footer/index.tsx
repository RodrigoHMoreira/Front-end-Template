import logo from "../../assets/logo02/logo02.png"
import logoInstagram from "../../assets/icon-instagram.svg"
import { 
    WrapFooter, 
    FooterNavContainer, 
    FooterNavLink, 
    FooterIconsContainer 
} from "./footer";

type FooterNavProps = {
    link: string;
    text: string;
}

const route: FooterNavProps[] = [
    {
        link:'#',
        text: 'contact us'
    },
    {
        link:'#',
        text: 'faq'
    },

    {
        link:'#',
        text: 'site map'
    },

    {
        link:'#',
        text: 'privacy policy'
    },
    {
        link:'#',
        text: 'cookies policy'
    },

    {
        link:'#',
        text: 'legal notice'
    },
]

export function Footer() {
    return(
        <WrapFooter>
            <FooterNavContainer>
                {route.map((item) => (
                        <FooterNavLink  key={item.text} href={item.link}>{item.text}</FooterNavLink>
                ))}
            </FooterNavContainer>
            <FooterIconsContainer>
                <img src={logo} className="logo-image" alt="logo-image" style={{width:"116px", height:"29px"}}/>
                <a className='icon-istagram' href='https://www.instagram.com/' target='blank' style={{width:'42.5px', height:'42.5px'}}><img src={logoInstagram} className="icon-instagram" alt="logo-instagram" style={{width:"100%", height:"100%"}}/></a>
            </FooterIconsContainer>
        </WrapFooter>
    );
};