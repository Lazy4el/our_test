import { Swiper as SwiperPage, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCube, Autoplay } from "swiper";
import "swiper/css/bundle";

function Swiper() {
  return (
    <SwiperPage
      style={{ maxWidth: 300 }}
      modules={[Navigation, Pagination, A11y, EffectCube, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      slidesPerGroup={1}
      effect={"cube"}
      autoplay={{
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }}
      speed={2000}
      coubeEffect={{
        shadow: true,
        slideShadow: true,
        shadowOffset: 20,
        shadowScale: 1.44,
      }}
      loop={true}
      navigation={false}
      pagination={false}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiVVrzvJxFLcIOE9oE0OfI7UdITM_hz_flw" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiVVrzvJxFLcIOE9oE0OfI7UdITM_hz_flw" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiVVrzvJxFLcIOE9oE0OfI7UdITM_hz_flw" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiVVrzvJxFLcIOE9oE0OfI7UdITM_hz_flw" />
      </SwiperSlide>
    </SwiperPage>
  );
}

export default Swiper;
