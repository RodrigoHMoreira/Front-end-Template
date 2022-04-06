import styled from "styled-components";

export const WrapFooter = styled.body`
    width: 100%;
    background-color: #389CD6;
    margin: 120px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 428px) {
        margin: 80px 0px 0px 0px;
    }
`
//Wrap of Navegation

export const FooterNavContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 41px 0px 0px 0px;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 428px) {
        flex-direction: column;
        margin: 32px 0px 0px 0px;
    }
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

    @media only screen and (max-width: 428px) {
        :not(:last-child) {
            border-right: none;
        }
    }
`

export const FooterNavDiv = styled.div`
    width: 24px;
    height: 32px;
    display: none;
    justify-content: center;
    align-items: center;
    color: #fff;

    @media only screen and (max-width: 428px) {
       display: flex;
    }
`

//Wrap for Icons

export const FooterIconsContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 61px 0px 64px 0px;
    justify-content: space-around;

    #logo-image {
        width: 116px;
        height: 29px;
        padding-right: 424px;
    }

    #iconIstagram {
        width: 42.5px;
        height: 42.5px;
        padding-left: 88px;
    }

    
    @media only screen and (max-width: 428px) {
        align-items: center;
        flex-direction:column-reverse;
        margin: 43px 0px 69px 0px;

        #logo-image {
            margin-top: 54px;
            padding-right:0%;
        }

        #iconIstagram {
            margin-bottom: 54px;
            padding-left:0%;
        }
    }

`