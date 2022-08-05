 export  type IheaderLinks = {
    label:string,
    link: string,
    name:string,
    isActive: boolean,
    key: string,
}
export const headerLinks: IheaderLinks[] = [
    {
        label: 'Главная',
        link: '/',
        name: 'home',
        isActive: true,
        key:'werewrwe'

    },
    {
        label: 'Продукты',
        link: '/products',
        name: 'products',
        isActive: false,
        key: 'werewrw'

    },
    {
        label: 'О нас',
        link: '/about',
        name: 'about',
        isActive: false,
        key:'werwerwww'

    },

]