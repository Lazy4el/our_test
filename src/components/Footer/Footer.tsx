import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Button, Dialog, DialogTitle, Divider } from '@mui/material';
import { headerLinks } from '../Header/data';
import logoImg from '../../assets/img/logo.png';
import { Link, To } from 'react-router-dom';
import { footerMaterialStyle } from './footerMatStyle';

import s from './Footer.module.css';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import FormButton from '../FormGroup/FormButton';

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
      <Divider variant="middle" />
      <Grid
        wrap="nowrap"
        container
        spacing={1}
        columnSpacing={10}
        direction={{ xs: 'column-reverse', sm: 'row' }}
        sx={footerMaterialStyle.gridContainer}
      >
        <Grid item xs={4} md={6} sx={{ textAlign: { md: 'start', xs: 'initial' } }}>
          <Link to="/" className={`${s.logoImg} ${s.logo}`}>
            <img className="logo" src={logoImg} alt="Company Logo" />
            <span className={`logo-general-span ${s.logoSpan}`}>
              НефтеХим<span className="logo-ink-span">Полимер</span>
            </span>
          </Link>
          <div className={s.spanContainer}>
            <span className={s.text}> ООО «НефтеХимПолимер» Copyright © 2018.</span>
            <span className={s.lineBreak}>
              Все права защищены. ИНН: 16657082570 КПП: 165601001 КПП 165101001 ОГРН: 1091690005945.
            </span>
          </div>
        </Grid>
        <Grid item xs={4} md={3} sx={{ border: 'none', display: { xs: 'none', sm: 'block' } }}>
          <span className={s.company}>Компания</span>
          <ul className={s.list}>
            {headerLinks.map(
              (el: {
                key: React.Key | null | undefined;
                link: To;
                label:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                  | React.ReactFragment
                  | null
                  | undefined;
              }) => {
                return (
                  <Link
                    onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
                    key={el.key}
                    className={s.link}
                    to={el.link}
                  >
                    {el.label}
                  </Link>
                );
              }
            )}
          </ul>
        </Grid>
        <Grid item xs={4} md={3} sx={{ border: 'none', textAlign: { xs: 'center' } }}>
          <span className={s.company}>Контакты</span>
          <ul className={s.list}>
            <a className={s.contactLink} href="tel:+78432125700">
              <LocalPhoneIcon sx={null} />
              +78432125700
            </a>
            <a className={s.contactLink} href="mailto:office@nhpkazan.ru">
              {<AlternateEmailIcon sx={null} />}
              office@nhpkazan.ru
            </a>
            <FormButton isModal={true} />
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
