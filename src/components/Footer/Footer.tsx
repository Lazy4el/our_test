import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import logoImg from '../../assets/img/logo.png'
import {Link } from "react-router-dom";
import s from './Footer.module.css'

const footerMaterialStyle = {

    gridContainer: {
        border: '1px solid red',
        marginTop: '10%'
    }
}

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}  sx={footerMaterialStyle.gridContainer}>
        <Grid  item xs={6} >

            <Link to='/'  className='button button-logo' >
                    <img className='logo' src={logoImg} alt='Company Logo'/>
                    <span className='logo-general-span'>НефтеХим<span className='logo-ink-span'>Полимер</span></span>
            </Link>
            <span className={s.text} >ООО «НефтеХимПолимер» Copyright © 2018.<br/> Все права защищены. 
            ИНН: 16657082570 КПП: 165601001 КПП 165101001 ОГРН: 1091690005945.
            </span>

        </Grid>
        <Grid  item xs={3}   sx={{border: '1px solid red'}}>
        text2
        </Grid>
        <Grid item xs={3} sx={{border: '1px solid red'}}>
        text3
        </Grid>
        </Grid>
    </Box>
  )
}

export default Footer