import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { IMAGE_URL } from "../../constants";

// const data2 = [
//   "/img/gallery/1.jpg",
//   "/img/gallery/2.jpg",
//   "/img/gallery/3.jpg",
//   "/img/gallery/1.jpg",
//   "/img/gallery/2.jpg",
//   "/img/gallery/3.jpg",
// ];

const ImageSlider = () => {
  const { courtData } = useSelector((state) => state.court);

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
      loop={courtData?.images?.length > 5}
      freeMode={true}
      navigation={true}
      keyboard={true}
      modules={[Navigation, Keyboard, FreeMode]}
      className="main-gallery-slider owl-carousel owl-theme"
    >
      {courtData?.images?.map((fileName, i) => (
        <SwiperSlide key={i}>
          <div className="gallery-widget-item">
            <img
              className="img-fluid"
              alt="Image"
              src={`${IMAGE_URL}/${fileName}`}
              style={{ height: "380px" }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
