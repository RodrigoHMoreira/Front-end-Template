import styled from "styled-components";
import article02Image from '../../../../../assets/screen-shot02/Screen Shot 2021-02-26 at 17.23.47@2x.png' 

const Root = styled.body`
    width: 356px;
    height: 355px;
    margin: 80px 0px 0px;
    box-shadow: 0px 3px 16px #00000014;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 357px;
        height: 232px;    
    }

    .description{
        display: flex;
        justify-content: center;
        color: #7B7070;
        margin: 24px 0px 0px;
        width: 292px;
        height: 51px;
    }

    .textDescription {
        text-align: center;
        font: normal normal normal 20px/28px Trebuchet MS;
        font-size: 20px;
        letter-spacing: 0.4px
    }    
`

export function Card_SecondArticle() {
    return(
        <Root>
            <img className="article02-Image" src={article02Image} alt='article02-Image'/>
            <div className="description">
                <p className="textDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </Root>
    );
};
