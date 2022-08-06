import { Swiper as SwiperPage, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCube, Autoplay } from "swiper";
import "swiper/css/bundle";
import logo from "../../assets/img/logo.png";
import "./Swiper.css";

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
      loop={true}
      navigation={false}
      pagination={false}
    >
      <SwiperSlide
        style={{
          textAlign: "center",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <img src={logo} style={{ width: 100, height: 100 }} />
        <p
          className="swiper__text"
          style={{
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          НефтеХимПолимер
          {/* <span style={{ color: "#385b95" }}>НефтеХим</span>
          <span style={{ color: "#62caec" }}>Полимер</span> */}
        </p>
      </SwiperSlide>
    </SwiperPage>
  );
}

export default Swiper;
