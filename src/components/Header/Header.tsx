import { FC,  useState, useEffect, useContext} from "react";
import {AppBar, Toolbar,  Container, Drawer, Button, Divider, Dialog, DialogTitle } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {Link, useLocation } from "react-router-dom";
import { MyContext } from "../../Store/Store";
import FeedbackButton from "../Buttons/FeedbackButton";
import './Header.css'
import {style} from './headerMatStyle'
import logoImg from '../../assets/img/logo.png'
import FeedbackForm from "../FeedbackForm/FeedbackForm";



const Header: FC = () => {
    // используем контекст, нужны импорты
    const store = useContext(MyContext)
    const { homeLinks } = store

    const { pathname } = useLocation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [items, setItems] = useState([...homeLinks]);
    const [curPage, setCurPage] = useState(pathname)
    const [isOpen, setIsOpen] = useState(false)
    
    useEffect(()=> {
        setCurPage(pathname);
        handleActiveButton()
    }, [curPage, pathname, isOpen])

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
    const handleOpen = () => {
        setIsOpen(()=> !isOpen)
        setIsDrawerOpen(()=> !isDrawerOpen)
    }
    return (
        <div>
                <Dialog
                    open={isOpen}
                    onClose={()=>setIsOpen(false)}
                    >
                     <DialogTitle id="alert-dialog-title">
                       <FeedbackForm/>
                    </DialogTitle>
              </Dialog>
              
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
                        <Button 
                        sx={style.feedbackButton} 
                        variant="contained"
                        onClick={handleOpen}
                        >Оставить заявку</Button>
                        <Container sx={style.nohidden}>
                            <MenuIcon onClick={() =>  setIsDrawerOpen(true)} sx={style.drawerIcon}/>
                            <Drawer onClose={ () => setIsDrawerOpen(false)} sx={style.drawer} anchor='right' open={isDrawerOpen}>
                                <CloseIcon
                                    onClick={() =>  setIsDrawerOpen(false)}
                                    sx ={style.drawerIntoIcon}/>
                                <Divider  sx={style.divider} variant="middle"/>
                                {
                                    items.map(el => {
                                        return (

                                                <Link
                                                    key={el.key}
                                                    onClick={()=> setIsDrawerOpen(false)}
                                                    className={`test-link nav-link ${el.isActive && 'test-link--active'}`}
                                                     to={el.link}>
                                                     {el.label}
                                                    {el.label==='Главная' && <HomeIcon sx={style.linkIcons}/>}
                                                    {el.label==='Продукты' && <PrecisionManufacturingIcon sx={style.linkIcons}/>}
                                                    {el.label==='Контакты' && <MenuBookIcon sx={style.linkIcons}/>}
                                                </Link>
                                        )
                                    })
                                }
                                <Divider  sx={style.divider} variant="middle"/>
                                <span className='contacts'>Контакты</span>
                                <label className='contacts contacts-label'>
                                    <a className='contacts-link' href='tel:+78432125700'>Позвоните нам</a>
                                    <LocalPhoneIcon sx={style.linkIcons}/>
                                </label>

                                <label className='contacts contacts-label'>
                                    <a className='contacts-link' href='mailto:office@nhpkazan.ru'>Напишите нам</a>
                                    <AlternateEmailIcon sx={style.linkIcons}/>
                                </label>
                                <Divider sx={style.divider} variant="middle"/>
                                <Button 
                                sx={style.feedbackButtonAside} 
                                onClick={handleOpen}
                                variant="contained">Оставить заявку</Button>
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
