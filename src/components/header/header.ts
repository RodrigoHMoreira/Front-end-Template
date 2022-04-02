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
        border:none;
        background-color: transparent;

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
    display: none;
    color: #fff;
    text-decoration: none;
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
    }
`

export const WrapHeaderNavHover =  styled.div`
    width: 100%;
    background-color: #9D8E8E;
    position: absolute;
    left: 0px;
    top: 19.5%;
    display: flex;
    justify-content: start;
    padding-left: 10%;
`

export const WrapMenuResponsive = styled.div`
    display: none;
    align-items: start;
    flex-direction: column;
    width: 100%;
    background: #389CD6;
    text-align: center;
    font: normal normal bold 16px/22px Trebuchet MS;
    letter-spacing: 0.32px;
    color: #FFFFFF;

    a {
        display: flex;
        padding: 15px 24px 13px;
        margin: 20px 0px 0px;
        :first-child {
            margin: 40px 0px 0px;
        }
    }

    #navUndefined {
            display: none;
        }

        @media only screen and (max-width: 428px) {
            display: flex;
    }


`
