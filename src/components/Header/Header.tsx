
import { FC,  useState, useEffect} from "react";
import {headerLinks} from './data'
import {AppBar, Toolbar,  Container, Drawer, Button, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LastPageIcon from '@mui/icons-material/LastPage';
import HomeIcon from '@mui/icons-material/Home';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {Link, useLocation } from "react-router-dom";
import './Header.css'
import {style} from './headerMatStyle'
import logoImg from '../../assets/img/logo.png'



const Header: FC = () => {
    
    const { pathname } = useLocation();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [items, setItems] = useState([...headerLinks]);
    const [curPage, setCurPage] = useState(pathname)

    
    useEffect(()=> {
        setCurPage(pathname);
        handleActiveButton()
    }, [curPage, pathname])

    const handleActiveButton = (key?:string ):void => {
       setItems(()=> {
           return items.map(item => {
               if(curPage === item.link){
                   return {...item, isActive: true}
               }
               return {...item, isActive: false}
           })

       })
    }

    return (
        <div>
            <AppBar sx={style.app} position='sticky' >
                <Container sx={style.mainContainer} >
                    <Toolbar sx={style.toolbar}>

                        <Link to='/'  className='button button-logo' >
                            <img className='logo' src={logoImg} alt='Company Logo'/>
                            <span className='logo-general-span'>НефтеХим<span className='logo-ink-span'>Полимер</span></span>
                        </Link>
                        <Container sx={style.hidden} component='ul'>
                            {
                                items.map(el => {
                                    return <Link
                                        key={el.key}
                                        onClick={() => handleActiveButton(el.key) }
                                        className={`test-link nav-link ${el.isActive && 'test-link--active'}`}
                                        to={el.link}>{el.label}</Link>
                                })
                            }

                        </Container>
                        <Button sx={style.feedbackButton} variant="contained">Оставить заявку</Button>
                        <Container sx={style.nohidden}>
                            <MenuIcon onClick={() =>  setIsDrawerOpen(true)} sx={style.drawerIcon}/>
                            <Drawer onClose={ () => setIsDrawerOpen(false)} sx={style.drawer} anchor='right' open={isDrawerOpen}>
                                <LastPageIcon
                                    onClick={() =>  setIsDrawerOpen(false)}
                                    sx ={style.drawerIntoIcon}/>
                                <Divider variant="middle"/>
                                {
                                    items.map(el => {
                                        return (

                                                <Link
                                                    key={el.key}
                                                    onClick={()=> setIsDrawerOpen(false)}
                                                     className='test-link' to={el.link}>
                                                     {el.label}
                                                    {el.label==='Главная' && <HomeIcon sx={style.linkIcons}/>}
                                                    {el.label==='Продукты' && <PrecisionManufacturingIcon sx={style.linkIcons}/>}
                                                    {el.label==='О нас' && <MenuBookIcon sx={style.linkIcons}/>}
                                                </Link>
                                        )
                                    })
                                }
                                <Divider variant="middle"/>
                                <span className='contacts'>Контакты</span>
                                <label className='contacts contacts-label'>
                                    <a className='contacts-link' href='tel:+78432125700'>Позвоните нам</a>
                                    <LocalPhoneIcon sx={style.linkIcons}/>
                                </label>

                                <label className='contacts contacts-label'>
                                    <a className='contacts-link' href='mailto:office@nhpkazan.ru'>Напишите нам</a>
                                    <AlternateEmailIcon sx={style.linkIcons}/>
                                </label>
                                <Divider sx={{marginTop: '20px'}} variant="middle"/>
                                <Button sx={style.feedbackButtonAside} variant="contained">Оставить заявку</Button>
                                <img className='logo aside-logo' src={logoImg} alt='Company Logo'/>
                                <span className='logo-aside-span'>НефтеХим<span className='logo-ink-span'>Полимер</span></span>
                                <span className='copyright-aside-span'>ООО «НефтеХимПолимер» <br/> Copyright © 2018<br/> Все права защищены.</span>
                            </Drawer>
                        </Container>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
export  default  Header
