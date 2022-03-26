import styled from "styled-components";

const Root = styled.body`
    width: 356px;
    height: 64px;
    background: #389CD6;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
        width: 312px;
        height: 23px;
        text-align: center;
        font: normal normal bold 20px/28px Trebuchet MS;
        letter-spacing: 0.4px;
        color: #FFFFFF;
    }

`
export function Btn() {
    return(
        <Root>
            <div className="text">
                see more
            </div>
        </Root>
    );
};