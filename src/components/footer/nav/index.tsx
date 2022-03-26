import styled from "styled-components";
import { Contact } from "./nav-contact/nav-contact";
import { Faq } from "./nav-faq/nav-faq";
import { SiteMap } from "./nav-siteMap/nav-siteMap";
import { PrivacyPolicy } from "./nav-privacyPolicy/nav-privacyPolicy";
import { CookiesPolicy } from "./nav-cookiesPolicy/nav-cookiesPolicy";
import { LegalNotice } from "./nav-legalNotice/nav-legalNotice";

const Root = styled.body`
    margin: 41px 0px 0px;
    background-color: transparent;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center; 
`

export function NavFooter() {
    return(
        <Root>
            <Contact/>
            <Faq/>
            <SiteMap/>
            <PrivacyPolicy/>
            <CookiesPolicy/>
            <LegalNotice/>
        </Root>
    );
};