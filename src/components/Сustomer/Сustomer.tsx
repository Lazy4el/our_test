import Title from '../Title/Title';
// import BodyText from '../BodyText/BodyText';
import './Customers.css';
import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';

const steps = [
  'Поставка гарантированно качественной продукции в картчайшие сроки',
  'Изготовление продукции по заданной рецептуре.',
  'Экономическая эффективность и экологическая безопасность.',
  '1',
  '2',
  '3',
  '4',
];
export default function Customers() {
  return (
    <div className="Customers">
      <Title title="Преимущества для заказчиков" h2="h2" />
      {/* <BodyText text="Блягодаря накопленному опыту и техническим возможностям компания «НефтеХимПолимер» дает ряд приемуществ для заказчиков." /> */}
      <Box sx={{ maxWidth: 400 }} className="Customers__box">
        <Stepper activeStep={steps.length} orientation="vertical">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <Typography>
                  <span className="Customers__span">{label}</span>{' '}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
