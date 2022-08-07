import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import './SwiperCompanions.css';

const arrayLogos = [
  'https://acdn.tinkoff.ru/static/documents/30dd69e2-8364-4984-9cd4-92d5d9c85aba.png',
  'https://www.zaks.ru/f/2020/September/SN/CBERBANK_LOGO_NOW.png.png',
  'https://regnum.ru/uploads/pictures/news/2019/06/19/regnum_picture_156094561360792_normal.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVcuAeSXKrXnOQjIKAYnXXS-nGnszDsUZrQ&usqp=CAU',
  'https://upload.wikimedia.org/wikipedia/ru/e/e3/Logo_novikombank.jpg',
  'https://alfabank.ru/f/media/logo-ogp.png',
  'https://upload.wikimedia.org/wikipedia/ru/thumb/c/cc/VTB24_Logo.svg/1280px-VTB24_Logo.svg.png',
  'https://public.superjob.ru/images/clients_logos.ru/1979020_5c0866089d7a63554fa1626b476c3d83.png',
  'https://www.rshb.ru/download-file/434673/',
  'https://tadviser.ru/images/1/15/Agroprombank_Tiraspol_logo_2019.jpg',
  'https://cdn5.vedomosti.ru/image/2020/s/14a6zs/original-1g7h.jpg',
  'https://cdnn21.img.ria.ru/images/49760/08/497600883_0:0:0:0_600x0_80_0_0_a4c481d21210d26aa048d406994642e1.jpg',
];

export default function SwiperCompanions() {
  return (
    <Swiper
      className="SwiperCompanions"
      modules={[Navigation, Pagination, A11y, Autoplay]}
      breakpoints={{
        1140: { slidesPerView: 4 },
        992: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
      }}
      spaceBetween={50}
      centerInsufficientSlides={true}
      grabCursor={true}
      autoHeight={true}
      autoplay={{
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }}
      speed={2000}
      loop={true}
      navigation={false}
      pagination={false}
    >
      <div className="SwiperCompanions__box"></div>
      {arrayLogos.map((element, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="SwiperCompanions__item">
              <img src={element} className="SwiperCompanions__img" alt="X" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
