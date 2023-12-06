// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import FeatureSlide from "./FeatureSlide";
import { useQuery } from "@tanstack/react-query";
import { getTop10Courts } from "../../state/api";

const FeaturedSlider = () => {
  const { data } = useQuery({ queryKey: ["top10"], queryFn: getTop10Courts });

  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={30}
      loop={data?.length > 3}
      navigation={true}
      keyboard={true}
      modules={[Navigation, Keyboard]}
      className="owl-carousel featured-venues-slider owl-theme"
    >
      {data?.map((item) => (
        <SwiperSlide key={item._id}>
          <FeatureSlide {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedSlider;
