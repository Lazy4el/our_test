import { createContext } from 'react';

export type IheaderLinks = {
  label: string;
  link: string;
  name: string;
  isActive: boolean;
  key: string;
};
export type IproductInfo = {
  title: string;
  gost: boolean;
  text: string;
  category?: string;
  org?: string;
};
export const productOwn: IproductInfo[] = [
  { title: 'МОНОЭТАНОЛАМИН ВР8-80', gost: true, text: `ТУ 2014-002-60316123-2017` },
  { title: 'ДИЭТАНОЛАМИН ВР85', gost: true, text: `ТУ 2014-001-60316123-2017` },
  { title: 'РИЭТАНОЛАМИН технический', gost: true, text: `Согласно т/з заказчика.` },
  { title: 'ЭТИЛЕНГЛИКОЛЬ Водный Раствор', gost: true, text: `Согласно т/з заказчика.` },
  { title: 'Бочка 216л. металлическая новая', gost: true, text: `ГОСТ 13950-91` },
  { title: 'Бочка 227л. пластиковая б/у', gost: true, text: `ГОСТ Р 51760-2001` },
  { title: 'Куб пластиковый 1000л. новый', gost: true, text: `ГОСТ З53211-2008` },
  { title: 'Куб пластиковый 1000л. б/у', gost: true, text: `Согласно т/з заказчика.` },
  {
    title:
      'АНТИФРИЗ НОВОГО ПОКОЛЕНИЯ С ПОВЫШЕННЫМИ ЭКСПЛУАТАЦИОННЫМИ СВОЙСТВАМИ НА ОСНОВЕ ЭФФЕКТИВНОГО ПАКЕТА ОРГАНИЧЕСКИХ ИНГИБИТОРОВ.',
    gost: false,
    text: `Обладает увеличенным ресурсом эксплуатации: не менее 5 лет или 250 000км.`,
  },
  { title: 'ТОНКОСЛОЙНЫЕ КОНСЕРВАЦИОННОЕ ПОКРЫТИЕ', gost: true, text: `ТУ 2145-045-13002578-2000` },
  {
    title: 'ПОРОШКОВАЯ КРАСКА НА ОСНОВЕ ПОЛИЭТИЛЕНА',
    gost: false,
    text: `Краска предназначена для защиты строителных конструкций нефтепромыслового оборудования различного вида ограждений.`,
  },
  { title: 'ДИПРОКСАМИН 157(Концентрация 65%-90%)', gost: false, text: `` },
];
export const productPartners: IproductInfo[] = [
  {
    title: 'МОНОЭТАНОЛАМИН',
    gost: true,
    text: `ТУ 2423-159-00203335-2004`,
    category: '«АМИНЫ»',
    org: 'ПАО «Казаньоргсинтез»',
  },
  {
    title: 'ДИЭТАНОЛАМИН марки «A»',
    gost: true,
    text: `У 2423-178-00203335-2007`,
    category: '«АМИНЫ»',
    org: 'ПАО «Казаньоргсинтез»',
  },
  {
    title: 'ТРИЭТАНОЛАМИН марки «A»',
    gost: true,
    text: `ту 2423-168-0023335-2007`,
    category: '«АМИНЫ»',
    org: 'ПАО «Казаньоргсинтез»',
  },
  {
    title: 'ДИПРОКСАМИН 157 - 100%',
    gost: true,
    text: `ту 6-14-614-76`,
    category: '«АМИНЫ»',
    org: 'ПАО «Казаньоргсинтез»',
  },
  {
    title: 'ДИПРОКСАМИН 157 - 65ДМ',
    gost: true,
    text: `ту 2483-194-00203335-2010`,
    category: '«АМИНЫ»',
    org: 'ПАО «Казаньоргсинтез»',
  },

  {
    title: 'ЭТИЛЕНГЛИКОЛЬ в/с',
    gost: true,
    text: `ГОСТ 19710-83`,
    category: '«ГЛИКОЛИ»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'ДИЭТИЛЕНГЛИКОЛЬ',
    gost: true,
    text: `ГОСТ 10136-77`,
    category: '«ГЛИКОЛИ»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'ПЭГ-200; ПЭГ-300; ПЭГ-400',
    gost: true,
    text: `ТУ 2226-074-05766801-2006`,
    category: '«ГЛИКОЛИ»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'ТРИЭТИЛЕНГЛИКОЛЬ техн.',
    gost: true,
    text: `ту 2422-075-05766801-2006`,
    category: '«ГЛИКОЛИ»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },

  {
    title: 'НЕОНОЛ АФ 9-6',
    gost: true,
    text: `ТУ 2483-077-05766801-98`,
    category: '«ПАВы»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'НЕОНОЛ АФ 9-10,9-12',
    gost: true,
    text: `ТУ 2483-077-05766801-98`,
    category: '«ПАВы»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },

  {
    title: 'ЛАПРОЛ 3603-2-12',
    gost: true,
    text: `ТУ 2226-015-10488057-94`,
    category: '«Полиэфиры»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'ЛАПРОЛ 4003-2-16',
    gost: true,
    text: `ТУ 2226-019-05766801-2005`,
    category: '«Полиэфиры»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'ЛАПРОЛ 4503',
    gost: true,
    text: `ТУ 2226-016-10488057-94`,
    category: '«Полиэфиры»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'ЛАПРОЛ 5503',
    gost: true,
    text: `ТУ 2226-016-10488057-94`,
    category: '«Полиэфиры»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'ЛАПРОЛ 5003-2-15; 5003-2Б-10',
    gost: true,
    text: `ТУ 2226-016-10488057-94`,
    category: '«Полиэфиры»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'ЛАПРОЛ 3003',
    gost: true,
    text: `ТУ 2226-016-10488057-94`,
    category: '«Полиэфиры»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'ЛАПРОЛ 373',
    gost: true,
    text: `ТУ 2226-048-05766801-2006`,
    category: '«Полиэфиры»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'ЛАПРОЛ 6003-2Б18',
    gost: true,
    text: `ТУ 2226-020-10488057-94`,
    category: '«Полиэфиры»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },

  {
    title: 'БУТИЛЦЕЛЛОЗОЛЬВ техн.',
    gost: true,
    text: `ТУ 6-01-646-84`,
    category: '«Продукты органического синтеза»',
    org: 'ПАО «Казаньоргсинтез»',
  },
  {
    title: 'ЭТИЛЦЕЛЛОЗОЛЬВ техн.',
    gost: true,
    text: `ГОСТ 8313-88`,
    category: '«Продукты органического синтеза»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'ЭТИЛКАРБИТОЛ техн.',
    gost: true,
    text: `ТУ 2422-125-05766801-2003`,
    category: '«Продукты органического синтеза»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },

  {
    title: 'ЖИДКИЕ ПРОДУКТЫ ПИРОЛИЗА марки "Е1"',
    gost: true,
    text: `ООО «Сибур»`,
    category: '«Продукты органического синтеза»',
    org: 'ПАО «Казаньоргсинтез»',
  },
  {
    title: 'ФЛОТОРЕАГЕНТ Т-66',
    gost: true,
    text: `ТУ 2452-029-05766801-99`,
    category: '«Продукты органического синтеза»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'ФЛОТОРЕАГЕНТ Т-92 ОКСАЛЬ',
    gost: true,
    text: `ТУ 2542-029-05766801-99`,
    category: '«Продукты органического синтеза»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'ПЫЛЕПОДАВИТЕЛЬ калийных солей',
    gost: true,
    text: `ТУ 2422-083-05766801-98`,
    category: '«Продукты органического синтеза»',
    org: 'ПАО «Нижнекамскнефтехим»',
  },
  {
    title: 'Бочка 216л. металлическая новая',
    gost: true,
    text: `ГОСТ 13950-91`,
    category: '«Продукты органического синтеза»',
  },
  {
    title: 'Бочка 227л. пластиковая б/у',
    gost: true,
    text: `Бочка 227л. пластиковая б/у`,
    category: '«Продукты органического синтеза»',
  },
  {
    title: 'Куб пластиковый 1000л. новый',
    gost: true,
    text: `ГОСТ З53211-2008`,
    category: '«Продукты органического синтеза»',
  },
  {
    title: 'Куб пластиковый 1000л. б/у',
    gost: true,
    text: `Согласно т/з заказчика.`,
    category: '«Продукты органического синтеза»',
  },
];

export const headerLinks: IheaderLinks[] = [
  {
    label: 'Главная',
    link: '/',
    name: 'home',
    isActive: true,
    key: 'werewrwe',
  },
  {
    label: 'Продукты',
    link: '/products',
    name: 'products',
    isActive: false,
    key: 'werewrw',
  },
  {
    label: 'Контакты',
    link: '/contacts',
    name: 'about',
    isActive: false,
    key: 'werwerwww',
  },
];
export const products = { productOwn, productPartners };
export const storeData = {
  homeLinks: headerLinks,
  products: products,
};

export const MyContext = createContext<any>(null);
