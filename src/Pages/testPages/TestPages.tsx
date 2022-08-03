import {FC} from "react";
import {AppBar, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import './TestPages.css'




const TestPages: FC = () => {
    const style = {
        app: {
            ['background-color']:'white'
        }
    }
    type IheaderLinks = {
        label:string,
        link: string,
        name:string,
    }
    const headerLinks: IheaderLinks[] = [
        {
            label: 'Главная',
            link: '/1',
            name: 'home'
        },
        {
            label: 'Продукты',
            link: '/2',
            name: 'products'
        },
        {
            label: 'О нас',
            link: '/3',
            name: 'about'
        },

    ]

    return (
    <div>
        <AppBar sx={style.app} position='sticky' >
            <Toolbar>
                {
                    headerLinks.map(el => {
                        return <Link className='test-link' to={el.link}>{el.label}</Link>
                    })
                }
            </Toolbar>
        </AppBar>
    </div>
    )
}
export  default  TestPages