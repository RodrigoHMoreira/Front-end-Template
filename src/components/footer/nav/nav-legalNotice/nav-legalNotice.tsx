import styled from "styled-components";

const Root = styled.body`
    width: 138px;
    height: 100%;
    background-color: transparent;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font: normal normal bold 16px/22px Trebuchet MS;
    letter-spacing: 0.32px;
    
`
export function LegalNotice() {
    return (
        <Root>
            <p>legal notice</p>
        </Root>
    );
};
