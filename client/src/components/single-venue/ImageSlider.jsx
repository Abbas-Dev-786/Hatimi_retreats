import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, FreeMode } from "swiper/modules";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { IMAGE_URL } from "../../constants";

const ImageSlider = () => {
  const { courtData } = useSelector((state) => state.court);

  return (
    <Gallery
      options={{
        zoom: true,
        loop: true,
        pinchToClose: false,
        preloaderDelay: 500,
        bgOpacity: 0.8,
      }}
    >
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
        style={{ cursor: "pointer" }}
      >
        {courtData?.images?.map((fileName, i) => (
          <SwiperSlide key={i}>
            <Item
              original={`${IMAGE_URL}/${fileName}`}
              // thumbnail={`${IMAGE_URL}/${fileName}`}
              width="1024"
              height="768"
              originalSrcset={`${IMAGE_URL}/${fileName}`}
              alt="gallery image"
              id={i}
            >
              {({ ref, open }) => (
                <div className="gallery-widget-item">
                  <img
                    ref={ref}
                    onClick={open}
                    className="img-fluid"
                    alt="Image"
                    src={`${IMAGE_URL}/${fileName}`}
                    style={{ height: "380px" }}
                  />
                </div>
              )}
            </Item>
          </SwiperSlide>
        ))}
      </Swiper>
    </Gallery>
  );
};

export default ImageSlider;
