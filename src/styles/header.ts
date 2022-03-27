import styled from 'styled-components';

export const WrapHeader = styled.body`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;    
`
export const HeaderPresentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 16px #00000014;
    background: #FFFFFF;
`
export const HeaderNavContainer = styled.div`
    background-color: #389CD6;
    display: flex;
    justify-content: center; 
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
    display: flex;
    justify-content: center;
    align-items: center;
`
