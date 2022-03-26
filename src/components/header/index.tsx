import logoImage from '../../assets/header/Module 1 - Header 970x60025.png';
import searchIcon from '../../assets/ic.search.svg';
import styled from 'styled-components';
import { Nav } from './nav';

const Root = styled.body`
    width: 1920px;
    height: 129px;
    background: #FFFFFF;

    .rectangle05 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 62%;
        box-shadow: 0px 4px 16px #00000014;    
    }

    .logo {
        width: 195px;
        height: 79px;
    }

    .icon {
        width: 24px;
        height: 24px;
        position: relative;
        left: calc(1920px - 1469px);    
    }

`

export function Header(){
    return(
        <Root>
            <div className='rectangle05'>
                <img className='logo' src={logoImage} alt='logo image'/>
                <img className='icon' src={searchIcon} alt='serach icon'/>
            </div>
            <div className='rectangle26'>
                <Nav/>
            </div>
        </Root>
    );
};