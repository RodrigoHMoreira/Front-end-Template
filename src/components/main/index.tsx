import bannerImage from '../../assets/banner/banner.png'
import bannerImage02 from "../../assets/banner02/banner02.png"
import iconsImage from "../../assets/file-icons/file-icons.png"
import { WrapMain, WrapMainTitle, WrapMainText01, WrapMainText02, WrapMainParagraph, WrapCardProductName, WrapCardMain, WrapCardBox, WrapCardText, WrapBtn } from "./main"; 

type CardsProductsProps = {
    src: string,
    text: string,
    name: string,
    background: string
}

type CardsArticlesProps = {
    src: string,
    text: string,
    name: string,
}

const cardProduct: CardsProductsProps[] = [
    {
        src:  '../../assets/blue-mask/bluemask.png',
        text: 'intibiome wellness daily intimate wash',
        name: 'wellness',
        background: '#389CD6'
    },
    {
        src:  '../../assets/green-mask/greenmask.png',
        text: 'intibiome active extra protection intimate wash',
        name: 'active',
        background: '#309D5F'
    },
    {
        src:  '../../assets/pink-mask/pinkmask.png',
        text: 'intibiome agecare dryness relief intimate wash',
        name: 'agecare',
        background: '#EE6381'
    }
]

const cardArticles: CardsArticlesProps[] = [
    {
        src:  '../../assets/card01/card01.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name: 'card01'
    },
    {
        src:  '../../assets/card02/card02.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name: 'card02'
    },
    {
        src:  '../../assets/card03/card03.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name: 'card03'
    }
]


export function Main() {
    return(
        <WrapMain>
            <img className="banner" src={bannerImage} alt='banner image' style={{width:"100%", height:"550px"}}/>
            <WrapMainTitle>we’re here to help</WrapMainTitle>
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
            <img className="icons" src={iconsImage} alt='icons image' style={{width:"59%", height:"259px", marginTop:"40px"}}/>
            <WrapMainTitle>whatever your age. whatever your lifestyle. whatever your interests. </WrapMainTitle>
            <WrapMainText02>
                <WrapMainParagraph>
                    Co-created with gynaecologists, our revolutionary products have been expertly developed to support your intimate microbiome and pH balance, and strengthen overall natural health.
                </WrapMainParagraph>
                <WrapMainParagraph>
                    As the experts in intimate hygiene, we want to bring discussion about intimate wellness care out of the dark and demystify the taboos that surround it.
                </WrapMainParagraph>
            </WrapMainText02>
            <WrapMainTitle>
                our products
            </WrapMainTitle>
            <WrapCardMain>
                {cardProduct.map((item) => (
                    <WrapCardBox>
                        <img key={item.name} src={item.src} alt={item.name} style={{width:'356px', height:'351px'}}/>
                        <WrapCardText>
                            {item.text}
                        </WrapCardText>
                        <WrapCardProductName style={{background:item.background}}>
                            {item.name}
                        </WrapCardProductName>
                    </WrapCardBox>
                ))}
            </WrapCardMain>
            <img  src={bannerImage02} alt='banner-Image02' style={{width:"100%", height:"437px", marginTop:"120px"}}/>
            <WrapMainTitle>keep up to date with our discoveries</WrapMainTitle>
            <WrapCardMain>
                {cardArticles.map((item) => (
                    <WrapCardBox>
                        <img key={item.name} src={item.src} alt={item.name} style={{width:'357px', height:'232px'}}/>
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