import styled from "styled-components";

const Root = styled.body`
    width: 190px;
    height: 48px; 
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    font: normal normal bold 16px/22px Trebuchet MS;
    color: #FFFF;  
`

export function About(){
    return(
        <Root>
            <p>about us</p>
        </Root>
    );
};