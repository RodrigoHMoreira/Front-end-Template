import iconsImage from '../../../assets/icons/icons.png'
import styled from 'styled-components'

const Root = styled.body`
    .icons {
        width: 1132px;
        height: 259px;
        margin: 40px 0px 0px;
    }
`

export function Icons() {
    return(
        <Root>
            <img className="icons" src={iconsImage} alt=' icons image'/>
        </Root>
    )
}
