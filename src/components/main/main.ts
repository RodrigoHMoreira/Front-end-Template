import styled from "styled-components";

//Wrap of Main
export const WrapMain = styled.body`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
//Images
export const WarpImageBanner = styled.div`
    display:flex;

    @media only screen and (max-width: 428px) {
        display: none;
    }
`

export const WarpImageBannerRes = styled.div`
    display:none;

    @media only screen and (max-width: 428px) {
        display: flex;
    }
`

export const WarpImageBannerTwo = styled.div`
    display:flex;
    margin: 120px 0px 0px;

    @media only screen and (max-width: 428px) {
        display: none;
    }
`

export const WarpImageBannerTwoRes = styled.div`
    display:none;
    margin: 64px 0px 0px;

    @media only screen and (max-width: 428px) {
        display: flex;
    }
`

export const WrapImageFileIcons = styled.div`
    margin: 40px 0px 0px;
    display: flex;
    justify-content: center;
    width: 59%;

    .fileIcons{
        width:100%
    }

    @media only screen and (max-width: 428px) {
        width: 91.5%
    }

`

//Texts

//Titles 
export const WrapMainTitleZero = styled.h1`
    margin: 80px 0px 40px 0px;
    width: 39%;
    font: normal normal bold 39px/50px Trebuchet MS;
    text-align: center;
    color: #389CD6;
    letter-spacing: 0.78px;

    @media only screen and (max-width: 428px) {
        margin: 40px 0px 32px 0px;
        width: 91.5%;

    }
`

export const WrapMainTitleOne = styled.h1`
    margin: 120px 0px 80px 0px;
    width: 39%;
    font: normal normal bold 39px/50px Trebuchet MS;
    text-align: center;
    color: #389CD6;
    letter-spacing: 0.78px;

    @media only screen and (max-width: 428px) {
        margin: 80px 0px 40px 0px;
        width: 91.5%;
    }
`

//Box
export const WrapMainText = styled.div`
    width:39%;

    @media only screen and (max-width: 428px) {
        width: 91.5%;
    }
`

//Paragraph
export const WrapMainParagraph = styled.p`
    :not(:last-child) {
        padding-bottom: 16px;
    }
    font: normal normal normal 20px/28px Trebuchet MS;
    text-align: center;
    color: #7B7070;
    letter-spacing: 0.4px;
    line-height: 28px;
`

//Cards
export const WrapCardMain = styled.div`
    width: 59%;
    display: flex;
    justify-content: center;
`
export const WrapCardBox = styled.div`
    box-shadow: 0px 3px 16px #00000014;
    width: 33.3%;
    height: 18%;
    border-radius: 16px;
    :not(:last-child) {
        margin: 0px 33px 0px 0px;
    }
`
export const WrapCardText = styled.div`
    padding: 24px 32px 32px 32px;
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
    margin: 85px 0px 0px 0px;
    padding: 20px 22px;
    border-radius: 16px;
    text-align: center;
    font: normal normal bold 20px/28px Trebuchet MS;
    letter-spacing: 0.4px;
    color: #FFFFFF;

    @media only screen and (max-width: 428px) {
        width: 81.5%;
        margin: 40px 0px 0px 0px;
    }
`
