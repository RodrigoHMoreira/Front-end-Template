import styled from "styled-components";
import { Banner } from "./banner/banner";
import { FirstText } from "./texts/text-01";
import { Icons } from "./file-icons/icons";
import { SecondText } from "./texts/text-02";
import { CardsProducts } from "./cards/cards-products";
import { Asset } from "./asset/asset";
import { CardsArticles } from "./cards/cards-article";


const Root = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export function Main() {
    return(
        <Root>
            <Banner/>
            <FirstText/>
            <Icons/>
            <SecondText/>
            <CardsProducts/>
            <Asset/>
            <CardsArticles/>
        </Root>
    );
};