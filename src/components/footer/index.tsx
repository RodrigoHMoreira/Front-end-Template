import styled from "styled-components";
import { NavFooter } from "./nav";
import logo from "../../assets/image/Image 1@2x.png"
import logoInstagram from "../../assets/Layer 2.svg"

const Root = styled.body`
    margin: 120px 0px 0px;      
    background-color: #389CD6;
    width: 1920px;
    height: 242px;

    .file-icons {
        margin: 69px 0px 56px 0px;
        width: 100%;
        height: 43px;
        display: flex;
        justify-content: space-between;
    }

    .logo-image {
        margin: 0px 0px 0px 394px;
        width: 116px;
        height: 29px;
    }

    .logo-instagram {
        margin: 0px 394px 0px 0px;
        width: 43px;
        height: 43px;
    }

`

export function Footer() {
    return(
        <Root>
            <NavFooter/>
            <div className="file-icons">
                <img src={logo} className="logo-image" alt="logo-image"/>
                <img src={logoInstagram} className="logo-instagram" alt="logo-instagram"/>
            </div>
        </Root>
    );
};