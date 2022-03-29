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
                <img src={logo} className="logo-image" alt="logo-image" style={{width:"8.5%", height:"2%", paddingRight:"20.5%"}}/>
                <img src={logoInstagram} className="logo-instagram" alt="logo-instagram" style={{width:"2%", height:"2%",  paddingLeft:"20.5%"}}/>
            </FooterIconsContainer>
        </WrapFooter>
    );
};