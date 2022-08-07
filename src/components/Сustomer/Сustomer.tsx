import Title from '../Title/Title';
import './Customers.css';
import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const steps = [
  'Поставка гарантированно качественной продукции в картчайшие сроки.',
  'Изготовление продукции по заданной рецептуре.',
  'Экономическая эффективность и экологическая безопасность.',
];

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
export default function Customers() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={blockAnimation}
      viewport={{ amount: 0.4, once: true }}
      className="Customers"
    >
      <Title title="Преимущества для заказчиков" h2="h2" />
      <Box sx={{ maxWidth: 400 }} className="Customers__box">
        <Stepper activeStep={steps.length} orientation="vertical">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <Typography variant="body2">
                  <span className="Customers__span">{label}</span>
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </motion.div>
  );
}
