import styled from "styled-components";

const Root = styled.body`
    width: 744px;
    height: 287px;
    margin: 80px 0px 0px;

    h1 {
        width: 100%;
        height: 96px;    
        font-size: 39px;
        font: normal normal bold 39px/50px Trebuchet MS;
        text-align: center;
        color: #389CD6;
        letter-spacing: 0.78px;
    }

    .text {
        margin: 40px 0px 0px;
        width: 100%;
        height: 151px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;        
    }

    p {
        font-size: 20px;
        font: normal normal normal 20px/28px Trebuchet MS;
        text-align: center;
        color: #7B7070;
        letter-spacing: 0.4px;
        line-height: 28px;
    }
`

export function SecondText() {
    return(
        <Root>
            <div className="title">
                <h1>
                    whatever your age. whatever your lifestyle. whatever your interests.
                </h1>
            </div>
            <div className="text">
                <p className="paragraph-01">
                    Co-created with gynaecologists, our revolutionary products have been expertly developed to support your intimate microbiome and pH balance, and strengthen overall natural health.
                </p>
                <p className="paragraph-02">
                    As the experts in intimate hygiene, we want to bring discussion about intimate wellness care out of the dark and demystify the taboos that surround it.
                </p>
            </div>
        </Root>
    );
};