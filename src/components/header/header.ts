import styled from 'styled-components';

//Wrap
export const WrapHeader = styled.body`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

//Wrap of Presentation

export const HeaderPresentContainer = styled.div`
    display: flex;
    width:87%;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px #00000014;
    background-color: #FFFFFF;

    .iconMenu {
        display: none;
        position: relative;
        right: 20%;

        @media only screen and (max-width: 428px) {
            display: flex;
        }
    }

    .iconSearch{
        position: relative;
        left: 22%;
        
        @media only screen and (max-width: 428px) {
            left: 20%;
        }
    }

    .logoImage {
        width: 195px;

        @media only screen and (max-width: 428px) {
            width: 143px;
        }

    }

`

//Wrap of Navegation

export const HeaderNavContainer = styled.div`
    display:flex;
    width:100%;
    justify-content: center;
    background-color: #389CD6;

    @media only screen and (max-width: 428px) {
        display: none;
    }

`

export const HeaderNavHover = styled.a`
    background-color: #9D8E8E;
    width: 100%;
    display: none;
    color: #fff;
    text-decoration: none;
    text-align: center;
    letter-spacing: 0.32px;
    font: normal normal bold 16px/22px Trebuchet MS;
    padding: 15px 24px 13px 24px;
`

export const HeaderNavLink = styled.a`
    color: #fff;
    text-decoration: none;
    text-align: center;
    letter-spacing: 0.32px;
    font: normal normal bold 16px/22px Trebuchet MS;
    padding: 15px 24px 13px 24px;
    :not(:first-child, :last-child) {
        margin: 0px 20px;
    }
    :hover ${HeaderNavHover} {
        display: flex;
        justify-content: center;
    }
`
