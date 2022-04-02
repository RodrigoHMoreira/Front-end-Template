import { HeaderNavProps } from '.'

export const mock: HeaderNavProps[] = [
    {
        id:'nav01',
        link:'#',
        text: 'about us',
        nav: [
            {
                id:'nav05',
                link: '#brand-philosophy',
                text: 'brand philosophy'    
            },
            {
                id:'nav06',
                link: '#product-technology',
                text: 'product technology'    
            },
            {
                id:'navUndefined',
                link: '',
                text: ''    
            },
            {
                id:'navUndefined',
                link: '',
                text: ''    
            }
        ]
    },
    {
        id:'nav02',
        link:'#',
        text: 'our products',
        nav: [
            {
                id:'nav07',
                link: '#products',
                text: 'all products'    
            },
            {
                id:'nav08',
                link: '#products',
                text: 'intibiome wellness'    
            },
            {
                id:'nav09',
                link: '#products',
                text: 'intibiome active'    
            },
            {
                id:'nav10',
                link: '#products',
                text: 'intibiome agecare'    
            }
        ]
    },
    {
        id:'nav03',
        link:'#',
        text: 'intimate health',
        nav: [
            {
                id:'nav11',
                link: '#articles',
                text: 'article 1'    
            },
            {
                id:'nav12',
                link: '#articles',
                text: 'article 2'    
            },
            {
                id:'nav13',
                link: '#articles',
                text: 'article 3'    
            },
            {
                id:'nav14',
                link: '#',
                text: 'faq'    
            }
        ]
    },
    {
        id:'nav04',
        link:'#',
        text: 'contact us',
    }
]
