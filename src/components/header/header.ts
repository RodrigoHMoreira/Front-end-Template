import styled from 'styled-components';

//Wrap of Presentation

export const HeaderPresentContainer = styled.div`
    display: flex;
    width:87%;
    height:100%;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px #00000014;
    background-color: #FFFFFF;

    .icon{
        position: relative;
        left: 22%;
    }
`

//Wrap of Navegation

export const HeaderNavContainer = styled.div`
    display:flex;
    width:100%;
    justify-content: center;
    background-color: #389CD6;
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
