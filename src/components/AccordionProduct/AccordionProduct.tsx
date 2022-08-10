import * as React from 'react';
import Title from '../Title/Title';
import BodyText from '../BodyText/BodyText';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import './AccordionProduct.css';
import ProductCard from '../ProductCard/ProductCard';
import { MyContext } from '../../Store/Store';
import { Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import { motion } from 'framer-motion';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}
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

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function AccordionProduct() {
  const [value, setValue] = React.useState(0);
  const store = React.useContext(MyContext);
  const { products } = store;
  const { productOwn, productPartners } = products;
  let TitleCategory: string;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="AccordionProduct">
      <Box className="AccordionProduct__box">
        <Tabs className="AccordionProduct__tabs" value={value} onChange={handleChange}>
          <Tab label="Cобственное производство" {...a11yProps(0)} />
          <Tab label="Производство заводов партнеров" {...a11yProps(1)} />
          <Tab label="Услуги Грузоперевозок" {...a11yProps(2)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <div className="AccordionProduct__TabPanel">
            <BodyText
              body2="body2"
              text="Изготовление продуктов, удолетворяющих повышенные требования заказчиков по всем видам характеристик. Производственная площадка так же дает техническую возможность производства химических продуктов по рецептуре заказчика."
            />
            <div className="AccordionProduct__Accordion_item">
              {productOwn.map((element: any, index: number) => {
                return <ProductCard key={index} element={element}></ProductCard>;
              })}
            </div>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className="AccordionProduct__TabPanel">
            <BodyText
              body2="body2"
              text="Прямое сотрудничество с ведущими нефтехимическими предприятиями страны позволяет поддерживать и постоянно расширять линейку продукции. Бесперебойные поставки продукции с сохранением оптимальных ценовых показателей один из продуктов работы компании."
            />
            <div className="AccordionProduct__Accordion_item">
              {productPartners.map((element: any, index: number) => {
                return (
                  <React.Fragment key={index}>
                    {TitleCategory !== element.category ? (
                      <div className="AccordionProduct__titleCategory">{(TitleCategory = element.category)}</div>
                    ) : null}
                    <ProductCard element={element}></ProductCard>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className="AccordionProduct__TabPanel AccordionProduct__TabPanel_transport">
            <Title title="Транспортные услуги" h3="h3" />
            <BodyText
              body2="body1"
              text="Огранизация доставки продукции авто и ж/д транспортом в любую точку России и СНГ с соблюдением всех технических требований к транспотрировке."
            />
            <BodyText
              body2="body1"
              text="Организация доставки продукции авто и ж/д транспортом в любую точку России и СНГ с соблюдением всех технических требований к транспортировке. Поставка продукции возможна при любой фасовке так как в автопарк входят шторные полуприцепы объёмом до 92 м3, а наличие автоцистерн-термосов объёмом от 28 до 32 м3 позволяет не задумываться о температурных условиях."
            />
            <BodyText
              body2="body1"
              text="Грузоперевозки по России и СНГ осуществляются собственным транспортом компании, в числе которого имеются как шторные полуприцепы, так и специализированные автоцистерны-термосы."
            />
            <Title title="Характеристики полуприцепов:" h3="h3" />
            <BodyText body2="body2" text="Длина/Ширина/Высота - 13,6/2,5/2,7 метров." />
            <BodyText body2="body2" text="Грузоподъемность – 20 тонн." />
            <BodyText body2="body2" text="Объём кузова – 92 м3." />
            <BodyText body2="body2" text="Тип кузова – шторный полуприцеп со сдвижными боковыми стойками." />
            <BodyText body2="body2" text="Загрузка/разгрузка - Верхняя/боковая/задняя." />
            <BodyText body2="body2" text="Опции – закладные коники, ремни крепления груза, деревянная обрешетка." />
            <Title title="Характеристик автоцистерн:" h3="h3" />
            <BodyText body2="body2" text="Тип кузова – автоцистерна-термос." />
            <BodyText body2="body2" text="Загрузка/разгрузка – верхняя/нижняя." />
            <BodyText body2="body2" text="Количество секций – 3 и 4 секции." />
            <BodyText body2="body2" text="Объём – 28 и 32 м3." />
            <BodyText body2="body2" text="Грузоподъемность - 23,5 тонны." />
            <BodyText body2="body2" text="Опции – нержавеющая сталь, наличие ДОПОГ." />
            <Alert severity="success">
              Желаете заказать грузоперевозки по России? Позвоните прямо сейчас и узнайте, сколько денег и времени
              сможете сэкономить, наши логисты рассчитают оптимальный маршрут и стоимость перевозки. Каждый день наша
              загрузка меняется, как изменяется и плавающая система скидок. Поэтому, сделав заказ сегодня, вы можете
              заплатить меньше, чем если позвоните через неделю.
            </Alert>
            <BodyText
              body1="body1"
              text="Все автомобили оснащены современными электронными системами, это позволяет устанавливать кратчайшие сроки доставки и отслеживать товар на протяжении всего пути, что называется, «от склада до склада»."
            />
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
