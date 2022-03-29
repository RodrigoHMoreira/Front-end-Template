import bannerImage from '../../assets/banner/banner.png';
import bannerImage02 from "../../assets/banner02/banner02.png";
import iconsImage from "../../assets/file-icons/file-icons.png";
import blueMask from "../../assets/blue-mask/bluemask.png";
import greenMask from "../../assets/green-mask/greenmask.png";
import pinkMask from "../../assets/pink-mask/pinkmask.png";
import card01 from "../../assets/card01/card01.png"
import card02 from "../../assets/card02/card02.png"
import card03 from "../../assets/card03/card03.png"

import {
    WrapMain, 
    WrapMainTitle, 
    WrapMainText01, 
    WrapMainText02, 
    WrapMainParagraph, 
    WrapCardProductName, 
    WrapCardMain, 
    WrapCardBox, 
    WrapCardText, 
    WrapBtn 
} from "./main"; 

type CardsProductsProps = {
    id: string,
    src: string,
    text: string,
    name: string,
    background: string
}

type CardsArticlesProps = {
    id: string,
    src: string,
    text: string,
    name: string,
}

const cardProduct: CardsProductsProps[] = [
    {
        id: 'wellness',
        src:  blueMask,
        text: 'intibiome wellness daily intimate wash',
        name: 'wellness',
        background: '#389CD6'
    },
    {
        id: 'active',
        src:  greenMask,
        text: 'intibiome active extra protection intimate wash',
        name: 'active',
        background: '#309D5F'
    },
    {
        id: 'agecare',
        src:  pinkMask,
        text: 'intibiome agecare dryness relief intimate wash',
        name: 'agecare',
        background: '#EE6381'
    }
]

const cardArticles: CardsArticlesProps[] = [
    {
        id: 'card01',
        src:  card01,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name: 'card01'
    },
    {
        id: 'card02',
        src: card02,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name: 'card02'
    },
    {
        id: 'card03',
        src:  card03,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name: 'card03'
    }
]


export function Main() {
    return(
        <WrapMain>
            <img className="banner" src={bannerImage} alt='banner image' style={{width:"100%", height:"28%"}}/>
            <WrapMainTitle id="brand-philosophy">we’re here to help</WrapMainTitle>
            <WrapMainText01>
                <WrapMainParagraph>
                    When it comes to caring for our most intimate areas, we’ve lost our connection.
                </WrapMainParagraph>
                <WrapMainParagraph>
                    Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting the parts of our bodies that need it most.
                </WrapMainParagraph>
                <WrapMainParagraph>
                    We’re here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care.
                </WrapMainParagraph>
            </WrapMainText01>
            <img className="icons" src={iconsImage} alt='icons image' style={{width:"59%", height:"13%", marginTop:"2%"}}/>
            <WrapMainTitle id="product-technology">whatever your age. whatever your lifestyle. whatever your interests. </WrapMainTitle>
            <WrapMainText02>
                <WrapMainParagraph>
                    Co-created with gynaecologists, our revolutionary products have been expertly developed to support your intimate microbiome and pH balance, and strengthen overall natural health.
                </WrapMainParagraph>
                <WrapMainParagraph>
                    As the experts in intimate hygiene, we want to bring discussion about intimate wellness care out of the dark and demystify the taboos that surround it.
                </WrapMainParagraph>
            </WrapMainText02>
            <WrapMainTitle id="products">our products</WrapMainTitle>
            <WrapCardMain>
                {cardProduct.map((item) => (
                    <WrapCardBox id={item.id}>
                        <img key={item.name} src={item.src} alt={item.name} style={{width:'100%', height:'18%'}}/>
                        <WrapCardText>
                            {item.text}
                        </WrapCardText>
                        <WrapCardProductName style={{background:item.background}}>
                            {item.name}
                        </WrapCardProductName>
                    </WrapCardBox>
                ))}
            </WrapCardMain>
            <img  src={bannerImage02} alt='banner-Image02' style={{width:"100%", height:"22%", marginTop:"6%"}}/>
            <WrapMainTitle id="articles">keep up to date with our discoveries</WrapMainTitle>
            <WrapCardMain>
                {cardArticles.map((item) => (
                    <WrapCardBox id={item.id}>
                        <img key={item.name} id={item.id} src={item.src} alt={item.name} style={{width:'100%', height:'12%'}}/>
                        <WrapCardText>
                            {item.text}
                        </WrapCardText>
                    </WrapCardBox>
                ))}
            </WrapCardMain>
            <WrapBtn>see more</WrapBtn>
        </WrapMain>
    );
};