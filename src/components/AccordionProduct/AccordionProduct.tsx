import * as React from 'react';
import Title from '../Title/Title';
import BodyText from '../BodyText/BodyText';

import './AccordionProduct.css';
import ProductCard from '../ProductCard/ProductCard';
import { MyContext } from '../../Store/Store';

export default function AccordionProduct() {
  const store = React.useContext(MyContext);
  const { products } = store;
  const { productOwn, productPartners } = products;
  let TitleCategory: string;

  return (
    <div className="AccordionProduct">
      <Title title="Cобственное производство" h2="h2" />
      <BodyText
        body2="body2"
        text="Изготовление продуктов, удолетворяющих повышенные требования заказчиков по всем видам характеристик. Производственная площадка так же дает техническую возможность производства химических продуктов по рецептуре заказчика."
      />
      <div className="AccordionProduct__Accordion_item">
        {productOwn.map((element: any, index: number) => {
          return <ProductCard key={index} element={element}></ProductCard>;
        })}
      </div>

      <Title title="Производство заводов партнеров" h2="h2" />
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

      <Title title="Услуги Грузоперевозок" h2="h2" />
      <div>
        <BodyText
          body2="body2"
          text="Огранизация доставки продукции авто и ж/д транспортом в любую точку России и СНГ с соблюдением всех технических требований к транспотрировке."
        />
      </div>
    </div>
  );
}
