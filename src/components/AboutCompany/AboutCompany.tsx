import Title from '../../components/Title/Title';
import Container from '@mui/material/Container';
import BodyText from '../BodyText/BodyText';
import Swiper from '../SwiperLogo/SwiperLogo';
import './AboutCompany.css';
import { motion } from 'framer-motion';

const blockAnimationLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};
const blockAnimationRight = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

function AboutCompany() {
  return (
    <Container>
      <div className="AboutCompany">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blockAnimationLeft}
          viewport={{ amount: 0.4, once: true }}
          className="AboutCompany__title"
        >
          <Title title="О компании" h2="h2" xStart={-100} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blockAnimationRight}
          viewport={{ amount: 0.4, once: true }}
          className="AboutCompany__swiper"
        >
          <Swiper></Swiper>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blockAnimationLeft}
          viewport={{ amount: 0.4, once: true }}
        >
          <Title title="ООО «НефтеХимПолимер»" h3="h3" xStart={-100} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blockAnimationLeft}
          viewport={{ amount: 0.4, once: true }}
        >
          <BodyText text="Компания ООО «НефтеХимПолимер» основана в феврале 2009 года." />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blockAnimationLeft}
          viewport={{ amount: 0.4, once: true }}
        >
          <BodyText text="Основными видами деятельности компании является производство и поставка химической продукции различного назначения, сервиные услуги и техническая поддержка решений заказчиков." />
        </motion.div>
      </div>
    </Container>
  );
}

export default AboutCompany;
