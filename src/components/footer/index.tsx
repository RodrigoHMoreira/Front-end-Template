import logo from "../../assets/logo02/logo02.png"
import logoInstagram from "../../assets/icon-instagram.svg"
import { 
    WrapFooter, 
    FooterNavDiv,
    FooterNavContainer, 
    FooterNavLink, 
    FooterIconsContainer 
} from "./footer";
import { mocksFooter as route } from "./mock";

export type FooterNavProps = {
    link: string;
    text: string;
}

interface Props {
    menuOpen: boolean;
}

export function Footer({menuOpen}:Props) {
    return(
        menuOpen === false ?
        <WrapFooter>
            <FooterNavContainer>
                {route.map((item) => (
                    <>
                        <FooterNavLink  key={item.text} href={item.link}>{item.text}</FooterNavLink>
                        <FooterNavDiv>-</FooterNavDiv>
                    </>
                ))}
            </FooterNavContainer>
            <FooterIconsContainer>
                <img src={logo} className="logo-image" alt="logo-image"/>
                <a className='icon-istagram' href='https://www.instagram.com/' target='blank'><img src={logoInstagram} className="icon-instagram" alt="logo-instagram" style={{width:"100%", height:"100%"}}/></a>
            </FooterIconsContainer>
        </WrapFooter>
        :
        <>
        </>
    );
};