import styled from "styled-components";
import { Card_FirstArticle } from "./article-01/article-01";
import { Card_SecondArticle } from "./article-02/article-02";
import { Card_ThirdArticle } from "./article-03/article-03";
import { Btn } from "../btn-primary";

const Root = styled.body`
    width: 1134px;
    height: 632px;
    margin: 120px 0px 0px;
    
    .title{
        display: flex;
        justify-content: center;
    }

    h1 {
        width: 744px;
        height: 46px;
        font-size: 39px;
        font: normal normal bold 39px/50px Trebuchet MS;
        text-align: center;
        color: #389CD6;
        letter-spacing: 0.78px;
    }

    .cards {
        display: flex;
        justify-content: space-between;
    }

    .btn {
        margin: 85px 0px 0px;
        display: flex;
        justify-content: center;    }
`

export function CardsArticles() {
    return(
        <Root>
            <div className="title">
                <h1>
                    keep up to date with our discoveries
                </h1>
            </div>
            <div className="cards">
                <Card_FirstArticle/>
                <Card_SecondArticle/>
                <Card_ThirdArticle/>
            </div>
            <div className="btn">
                <Btn/>
            </div>
        </Root>
    );
};