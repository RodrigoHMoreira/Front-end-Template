import { CardsProductsProps, CardsArticlesProps } from ".";
import blueMask from "../../assets/produto-azul/produto-azul.png";
import greenMask from "../../assets/produto-verde/produto-verde.png";
import pinkMask from "../../assets/produto-rosa/produto-rosa.png";
import card01 from "../../assets/cards-mulher/cards-mulher.png"
import card02 from "../../assets/cards-mulher-perfil/cards-mulher-perfil.png"
import card03 from "../../assets/cards-gotas/cards-gotas.png"

export const mocksProducts: CardsProductsProps[] = [
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

export const mocksArticles: CardsArticlesProps[] = [ 
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
