import styled from 'styled-components';

export const WrapHeader = styled.body`
    width: 100%;
    display: flex;
    align-items:center;
    flex-direction: column;    
`

//Wrap of Presentation

export const HeaderPresentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px #00000014;
    background: #FFFFFF;
`

//Wrap of Navegation

export const HeaderNavContainer = styled.div`
    display: flex;
    justify-content: center; 
    background-color: #389CD6;
    width: 100%;
`

export const HeaderNavLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-decoration: none;
    text-align: center;
    letter-spacing: 0.32px;
    font: normal normal bold 16px/22px Trebuchet MS;
    padding: 15px 24px 13px 24px;
    :not(:first-child, :last-child) {
        margin: 0px 20px;
    }
`
export const HeaderNavHover = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #9D8E8E
`