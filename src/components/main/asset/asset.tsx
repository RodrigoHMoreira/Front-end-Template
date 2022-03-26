import assetImage from '../../../assets/asset/Asset 22@2x.png'
import styled from 'styled-components'

const Root = styled.body`
    .asset {
        width: 1920px;
        height: 437px; 
        margin: 120px 0px;       
    }
`

export function Asset() {
    return(
        <Root>
            <img className="asset" src={assetImage} alt='asset image'/>
        </Root>
    )
}
