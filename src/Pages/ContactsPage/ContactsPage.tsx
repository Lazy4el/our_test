import { FC } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Paper, Typography, Divider } from '@mui/material';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import logoImg from '../../assets/img/logo.png';
import s from './ContactsPage.module.css';
import contactsStyle from './ContactPageMUI';
import contactsImg from '../../assets/img/contacts.jpg';
import YandexMap from './Map';

const ContactsPage: FC = (props) => {
  return (
    <Box>
      <Grid container spacing={2} sx={contactsStyle.container}>
        <Grid item xs={12} sx={{ ...contactsStyle.img, ...contactsStyle.item, borderBottom: 'none' }}>
          <img className={s.img} src={contactsImg} alt="contacts logo" />
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' }, ...contactsStyle.item }}>
          <Paper square variant="elevation" sx={contactsStyle.paper}>
            <Typography variant="h3" sx={{ ...contactsStyle.typography, marginBottom: { md: '25px' } }}>
              ООО"НефтеХимПолимер"
            </Typography>
            <Typography variant="body2" sx={contactsStyle.typography}>
              Юр. Адрес:420076, г. Казань ул. Пороховая, д. 25
              <br /> Почтовый адрес: 420076, г. Казань, а/я22
              <br /> ИНН: 16657082570 <br /> КПП: 165601001 <br /> ОГРН: 1091690005945
            </Typography>
            <Typography variant="h3" sx={contactsStyle.typography}>
              Наш фактический адрес
            </Typography>
            <Typography variant="body2" sx={contactsStyle.typography}>
              г.Казань ул. Восстания, д. 100 корп. 266Д
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} sx={{ ...contactsStyle.item }}>
          <Box>
            <img className={s.logo} src={logoImg} alt="Company Logo" />
            <div className={s.spanContainer}>
              <span className={`logo-general-span ${s.logoSpan}`}>
                НефтеХим<span className="logo-ink-span">Полимер</span>
              </span>
            </div>
            <Typography
              variant="h3"
              sx={{ ...contactsStyle.typography, display: 'inline-block', margin: '0 auto 5px auto' }}
            >
              ООО"НефтеХимПолимер"
            </Typography>
            <Typography variant="body2" sx={{ ...contactsStyle.typography, textAlign: 'center' }}>
              Для заказа, а также уточнения любых вопросов о доставке и отгрузке оптовых партий товаров вы можете
              обратиться к нам по телефонам: +7 (843) 212-57-00 (Казань).
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: { xs: 'block', md: 'none' }, ...contactsStyle.item }}>
          <Paper square variant="elevation" sx={contactsStyle.paper}>
            <Typography variant="h3" sx={{ ...contactsStyle.typography, marginBottom: { md: '25px' } }}>
              ООО"НефтеХимПолимер"
            </Typography>
            <Typography variant="body2" sx={contactsStyle.typography}>
              Юр. Адрес:420076, г. Казань ул. Пороховая, д. 25 Почтовый адрес: 420076, г. Казань, а/я22 ИНН:
              16657082570, КПП: 165601001, ОГРН: 1091690005945
            </Typography>
            <Typography variant="h3" sx={contactsStyle.typography}>
              Наш фактический адрес
            </Typography>
            <Typography variant="body2" sx={contactsStyle.typography}>
              г.Казань ул. Восстания, д. 100 корп. 266Д
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} sx={{ ...contactsStyle.item, borderBottom: 'none' }}>
          <Paper square variant="elevation" sx={contactsStyle.paper}>
            <Typography variant="h3" sx={{ ...contactsStyle.typography, marginBottom: { md: '25px' } }}>
              NefteKhimPolymer. OOO
            </Typography>
            <Typography variant="body2" sx={contactsStyle.typography}>
              Address: 420076, Kazan, st. Porokhovaya Ste. 25
              <br /> Post address: 420076, Kazan, P.O. Box 22
              <br /> TIN: 1657082570
              <br />
              KPP: 165601001
              <br /> OGRN: 1091690005945
            </Typography>
            <Typography variant="h3" sx={contactsStyle.typography}>
              Actual address
            </Typography>
            <Typography variant="body2" sx={contactsStyle.typography}>
              Kazan, st. Vosstaniya Ste. 100 bldg. 266D
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} sx={{ ...contactsStyle.item, borderBottom: 'none' }}>
          <FeedbackForm closeIcon={false} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ ...contactsStyle.item, borderBottom: 'none' }}>
          <Typography variant="h3" sx={{ margin: '0 0 30px 0' }}>
            Мы на карте
          </Typography>
          <YandexMap />
        </Grid>
      </Grid>
    </Box>
  );
};
export default ContactsPage;
