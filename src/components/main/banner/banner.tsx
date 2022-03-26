import bannerImage from '../../../assets/banner/banner-hero.png'
import styled from 'styled-components'

const Root = styled.body`
    .banner {
        width: 100%;
        height: 550px;
        box-shadow: 0px 4px 16px #00000014;
    }
`

export function Banner() {
    return(
        <Root>
            <img className="banner" src={bannerImage} alt='banner image'/>
        </Root>
    )
}
