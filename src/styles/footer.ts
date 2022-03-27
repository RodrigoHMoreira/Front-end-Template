import styled from "styled-components";

export const WrapFooter = styled.body`
    width:100%;
    background-color: #389CD6;
    margin: 120px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
//Wrap of Navegation

export const FooterNavContainer = styled.div`
    display: flex;
    margin: 41px 0px 0px 0px;
    justify-content: center;
    align-items: center;
`
export const FooterNavLink = styled.a`
    color: #fff;
    text-decoration: none;
    text-align: center;
    letter-spacing: 0.32px;
    font: normal normal bold 16px/22px Trebuchet MS;
    padding: 15px 24px 13px 24px;
    :not(:last-child) {
       border-right: 2px #fff solid;
    }
`

//Wrap for Icons

export const FooterIconsContainer = styled.div`
    display: flex;
    width: 70vw;
    margin: 61px 0px 55px 0px;
    justify-content: space-between;
`