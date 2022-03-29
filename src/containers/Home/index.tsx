import { Header } from '../../components/header';
import { Main } from '../../components/main';
import { Footer } from '../../components/footer';
import { Board } from './home';

export function Home() {
    return(
        <Board>
            <Header/>
            <Main/>
            <Footer/>  
        </Board>
    )
}