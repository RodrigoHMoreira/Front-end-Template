import styled from "styled-components";

export const WrapMain = styled.body`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
//Texts

export const WrapMainTitle = styled.h1`
    margin: 80px 0px 0px;
    width: 39%;
    font-size: 39px;
    font: normal normal bold 39px/50px Trebuchet MS;
    text-align: center;
    color: #389CD6;
    letter-spacing: 0.78px;
`
export const WrapMainText01 = styled.div`
    margin: 40px 0px 0px;
    width:29%;
`
export const WrapMainText02 = styled.div`
    margin: 40px 0px 0px;
    width:39%;
`
export const WrapMainParagraph = styled.p`
    :not(:last-child) {
        padding-bottom: 16px;
    }
    font-size: 20px;
    font: normal normal normal 20px/28px Trebuchet MS;
    text-align: center;
    color: #7B7070;
    letter-spacing: 0.4px;
    line-height: 28px;
`
//Cards

export const WrapCardMain = styled.div`
    margin: 80px 0px 0px;
    width: 59%;
    display: flex;
    justify-content: center;
`
export const WrapCardBox = styled.div`
    box-shadow: 0px 3px 16px #00000014;
    width: 33.3%;
    height: 100%;
    border-radius: 16px;
    :not(:last-child) {
        margin: 0px 33px 0px 0px;
    }
`
export const WrapCardText = styled.div`
    padding: 24px 32px 32px 32px;
    font-size: 20px;
    font: normal normal normal 20px/28px Trebuchet MS;
    text-align: center;
    color: #7B7070;
    letter-spacing: 0.4px;
    line-height: 28px;
    word-wrap: break-word;
`
export const WrapCardProductName = styled.div`
    text-align: center;
    font: normal normal bold 25px/36px Trebuchet MS;
    letter-spacing: 0.5px;
    color: #FFFFFF;
    border-radius: 0px 0px 16px 16px;
    padding: 20px 23px 24px 21px;
`
//Button

export const WrapBtn = styled.div`
    width: 16%;
    background: #389CD6;
    border-radius: 16px;
    text-align: center;
    font: normal normal bold 20px/28px Trebuchet MS;
    letter-spacing: 0.4px;
    color: #FFFFFF;
    padding: 20px 22px;
    margin-top: 85px;
`
