import styled from "styled-components";
import { Contact } from "./nav/nav-contact/nav-contact";
import { Faq } from "./nav/nav-faq/nav-faq";

const Root = styled.body`
    margin: 120px 0px 0px;      
    background-color: #389CD6;
    display: flex;
    justify-content: center; 
    width: 1920px;
    height: 242px;
`

export function Footer() {
    return(
        <Root>
            <Contact/>
            <Faq/>
        </Root>
    );
};