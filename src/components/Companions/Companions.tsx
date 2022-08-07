import Title from '../Title/Title';
import { motion } from 'framer-motion';
import SwiperCompanions from '../SwiperCompanions/SwiperCompanions';

const blockAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default function Companions() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={blockAnimation}
      viewport={{ amount: 0.4, once: true }}
      className="Companions"
    >
      <Title title="Наши партнеры" h2="h2" />
      <SwiperCompanions />
    </motion.div>
  );
}
