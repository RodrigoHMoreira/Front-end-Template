import bannerImage from '../../assets/banner-principal/banner-principal.png'
import bannerImageResponsive from '../../assets/banner-responsivo/banner-responsive.png'
import bannerImage02 from '../../assets/banner-intermediario/banner-intermediario.png'
import bannerImage02Responsive from '../../assets/banner-responsive/banner02-responsive.png'
import iconsImage from '../../assets/file-icons/file-icons.png'
import {
  mocksProducts as cardsProducts,
  mocksArticles as cardsArticles
} from './mock'

import {
  WrapMain,
  WarpImageBanner,
  WarpImageBannerRes,
  WarpImageBannerTwo,
  WarpImageBannerTwoRes,
  WrapImageFileIcons,
  WrapMainTitleZero,
  WrapMainTitleOne,
  WrapMainText,
  WrapMainParagraph,
  WrapCardProductName,
  WrapCardMain,
  WrapCardBox,
  WrapCardText,
  WrapBtn
} from './styles'

export type CardsProductsProps = {
  id: string
  src: string
  text: string
  name: string
  background: string
}

export type CardsArticlesProps = {
  id: string
  src: string
  text: string
  name: string
}

export const Main = () => (
  <WrapMain>
    <WarpImageBanner>
      <img id="banner-image" src={bannerImage} alt="banner-image" />
    </WarpImageBanner>
    <WarpImageBannerRes>
      <img
        id="banner-image-responsive"
        src={bannerImageResponsive}
        alt="banner-image-responsive"
      />
    </WarpImageBannerRes>
    <WrapMainTitleZero id="brand-philosophy">
      we’re here to help
    </WrapMainTitleZero>
    <WrapMainText>
      <WrapMainParagraph>
        When it comes to caring for our most intimate areas, we’ve lost our
        connection.
      </WrapMainParagraph>
      <WrapMainParagraph>
        Embarrassed, unwilling, or unable to communicate with others, we’re
        needlessly neglecting the parts of our bodies that need it most.
      </WrapMainParagraph>
      <WrapMainParagraph>
        We’re here to help. Providing you with the expertise, knowledge and
        products you need to feel confident in your personal care.
      </WrapMainParagraph>
    </WrapMainText>
    <WrapImageFileIcons>
      <img id="fileIcons" src={iconsImage} alt="icons image" />
    </WrapImageFileIcons>
    <WrapMainTitleZero id="product-technology">
      whatever your age. whatever your lifestyle. whatever your interests.{' '}
    </WrapMainTitleZero>
    <WrapMainText>
      <WrapMainParagraph>
        Co-created with gynaecologists, our revolutionary products have been
        expertly developed to support your intimate microbiome and pH balance,
        and strengthen overall natural health.
      </WrapMainParagraph>
      <WrapMainParagraph>
        As the experts in intimate hygiene, we want to bring discussion about
        intimate wellness care out of the dark and demystify the taboos that
        surround it.
      </WrapMainParagraph>
    </WrapMainText>
    <WrapMainTitleOne id="products">our products</WrapMainTitleOne>
    <WrapCardMain id="cardMainProducts">
      {cardsProducts.map((item) => (
        <WrapCardBox>
          <img
            key={item.name}
            src={item.src}
            alt={item.name}
            style={{ width: '356px', height: '351px' }}
          />
          <WrapCardText>{item.text}</WrapCardText>
          <WrapCardProductName style={{ background: item.background }}>
            {item.name}
          </WrapCardProductName>
        </WrapCardBox>
      ))}
    </WrapCardMain>
    <WarpImageBannerTwo>
      <img id="banner-image02" src={bannerImage02} alt="banner-image02" />
    </WarpImageBannerTwo>
    <WarpImageBannerTwoRes>
      <img
        id="bannerimage02responsive"
        src={bannerImage02Responsive}
        alt="banner-image02-responsive"
      />
    </WarpImageBannerTwoRes>
    <WrapMainTitleOne id="articles">
      keep up to date with our discoveries
    </WrapMainTitleOne>
    <WrapCardMain id="cardMainArticles">
      {cardsArticles.map((item) => (
        <WrapCardBox id={item.id}>
          <img
            key={item.name}
            src={item.src}
            alt={item.name}
            style={{ width: '356px', height: '351px' }}
          />
          <WrapCardText>{item.text}</WrapCardText>
        </WrapCardBox>
      ))}
    </WrapCardMain>
    <WrapBtn
      id="buttonSeeMore"
      onClick={() => {
        console.log('Button it´s work!')
      }}
    >
      see more
    </WrapBtn>
  </WrapMain>
)
