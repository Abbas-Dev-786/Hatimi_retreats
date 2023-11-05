// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const data = [
  "/img/gallery/1.jpg",
  "/img/gallery/2.jpg",
  "/img/gallery/3.jpg",
  "/img/gallery/1.jpg",
  "/img/gallery/2.jpg",
  "/img/gallery/3.jpg",
];

const ImageSlider = () => {
  return (
    <Swiper
      slidesPerView={5}
      breakpoints={{
        240: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      spaceBetween={0}
      loop={true}
      freeMode={true}
      navigation={true}
      keyboard={true}
      modules={[Navigation, Keyboard, FreeMode]}
      className="main-gallery-slider owl-carousel owl-theme"
    >
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="gallery-widget-item">
            <img className="img-fluid" alt="Image" src={item} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
