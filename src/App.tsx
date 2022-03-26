import { Header } from './components/header/index';
import { Main } from './components/main';
import { Footer } from './components/footer';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global';

const Prancheta = styled.div`
  width: 1920px;
  height: 4210px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export function App() {
  return (
    <Prancheta>
      <Header/>
      <Main/>
      <Footer/>
      <GlobalStyle/>
    </Prancheta>
  );
}

