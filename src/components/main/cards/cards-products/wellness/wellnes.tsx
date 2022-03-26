import styled from "styled-components";
import blueMask from '../../../../../assets/blue-mask/image mask@2x.png' 

const Root = styled.body`
    width: 356px;
    height: 530px;
    margin: 80px 0px 0px;
    box-shadow: 0px 3px 16px #00000014;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 100%;
        height: 351px;
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

    .footerCard{
        width: 100%;
        height: 73px;
        display: flex;
        align-items: center;
        margin: 32px 0px 0px;
        display: flex;
        justify-content: center;
        color: #7B7070;
        background-color: #389CD6;
        border-radius:  0px 0px 16px 16px;
    }

    .footerCardText {
        width: 312px;
        height: 29px;
        text-align: center;
        font: normal normal bold 25px/36px Trebuchet MS;
        letter-spacing: 0.5px;
        color: #FFFFFF;
    }
    
`

export function Card_Wellness() {
    return(
        <Root>
            <img className="blue-mask" src={blueMask} alt='blue mask'/>
            <div className="description">
                <p className="textDescription">intibiome wellness daily intimate wash</p>
            </div>
            <div className="footerCard">
                <p className="footerCardText">wellness</p>
            </div>
        </Root>
    );
};