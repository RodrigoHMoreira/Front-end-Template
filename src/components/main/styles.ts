import styled from "styled-components";

//Wrap of Main
export const WrapMain = styled.main`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
//Images
export const WarpImageBanner = styled.div`
    display:flex;

    #banner-image {
        width: 100%;
    }

    @media only screen and (max-width: 428px) {
        display: none;
    }
`

export const WarpImageBannerRes = styled.div`
    width: 100%;
    display:none;

    #banner-image-responsive{
        width: 100%;
    }

    @media only screen and (max-width: 428px) {
        display: flex;
    }
`

export const WarpImageBannerTwo = styled.div`
    display:flex;
    margin: 120px 0px 0px;

    #banner-image02{
        width: 100%;
    }

    @media only screen and (max-width: 428px) {
        display: none;
    }
`

export const WarpImageBannerTwoRes = styled.div`
    width: 100%;
    display:none;
    margin: 64px 0px 0px;

    #bannerimage02responsive{
        width: 100%;
    }

    @media only screen and (max-width: 428px) {
        display: flex;
    }
`

export const WrapImageFileIcons = styled.div`
    width: 59%;
    margin: 40px 0px 0px;
    display: flex;
    justify-content: center;

    #fileIcons{
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
    width: 1134px;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 1134px) {
        width: 100%;
        justify-content: start;
        margin-left: 20px;
        overflow-x: auto;
        overflow-y: hidden;

        &::-webkit-scrollbar {
            height: 0;
        }
    }
`

export const WrapCardBox = styled.div`
    box-shadow: 0px 3px 16px #00000014;
    width:356px;
    border-radius: 16px;
        :not(:last-child){
            margin: 0px 33px 0px 0px;
        }

        @media only screen and (max-width: 428px) {
            :last-child{
                margin: 0px 20px 0px 0px;
            }
        }   

`

export const WrapCardText = styled.div`
    padding: 24px 32px 32px 32px;
    font: normal normal normal 20px/28px Trebuchet MS;
    text-align: center;
    color: #7B7070;
    letter-spacing: 0.4px;
    line-height: 28px;
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
export const WrapBtn = styled.button`
    width: 16%;
    background: #389CD6;
    margin: 85px 0px 0px 0px;
    padding: 20px 22px;
    border: none;
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
