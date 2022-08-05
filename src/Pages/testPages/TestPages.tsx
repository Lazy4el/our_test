import {FC, useState} from "react";
import {AppBar, Toolbar,  Container, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import './TestPages.css'

import logoImg from '../../assets/img/logo.png'



const TestPages: FC = () => {
    const style = {
        app: {
            ['background-color']:'white'
        },
        hidden: {
            ['margin-right']: '0',
            width: 'auto',
            margin: '0 0 0 0',
            display:  { xs: 'none', sm: 'block' }
        },
        nohidden: {
            color: 'black',
            ['margin-left']: '0',
            ['margin-right']: '0',
            width: 'auto',
            display:  { xs: 'block', sm: 'none' }
        },
        drawer: {
            display:  { xs: 'block', sm: 'none' }
        },
        drawerIcon: {
            cursor:'pointer'
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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleDrawerIcon = (): void => {
        setIsDrawerOpen(true)
    }
    const handleDrawer = (): void => {
        setIsDrawerOpen(false)
    }

    return (
    <div>
        <AppBar sx={style.app} position='sticky' >
            <Container maxWidth='md'>
            <Toolbar disableGutters >
                <button className='button' type='button'>
                <img className='logo' src={logoImg} alt='Company Logo'/>
                </button>
                <Container sx={style.hidden} component='ul'>
                {
                    headerLinks.map(el => {
                        return <Link className='test-link' to={el.link}>{el.label}</Link>
                    })
                }
                </Container>
                <Container sx={style.nohidden}>
                    <MenuIcon onClick={handleDrawerIcon} sx={style.drawerIcon}/>
                    <Drawer onClose={ handleDrawer} sx={style.drawer} anchor='right' open={isDrawerOpen}>
                        {
                            headerLinks.map(el => {
                                return <Link className='test-link' to={el.link}>{el.label}</Link>
                            })
                        }
                    </Drawer>
                </Container>
            </Toolbar>
            </Container>
        </AppBar>
    </div>
    )
}
export  default  TestPages
