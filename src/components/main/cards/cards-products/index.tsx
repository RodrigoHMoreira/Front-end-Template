import styled from "styled-components";
import { Card_Active } from "./active/active";
import { Card_Agecare } from "./agecare/agecare";
import { Card_Wellness } from "./wellness/wellnes";

const Root = styled.body`
    width: 1134px;
    height: 657px;
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
`

export function CardsProducts() {
    return(
        <Root>
            <div className="title">
                <h1>
                    our products
                </h1>
            </div>
            <div className="cards">
                <Card_Wellness/>
                <Card_Active/>
                <Card_Agecare/>
            </div>
        </Root>
    );
};