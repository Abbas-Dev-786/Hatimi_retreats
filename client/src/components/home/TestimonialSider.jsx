// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import TestimonialSlide from "./TestimonialSlide";
import { getTop10Reviews } from "../../state/api";

const TestimonialSider = () => {
  const { data } = useQuery({
    queryKey: ["top-reviews"],
    queryFn: getTop10Reviews,
  });

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
      // loop={true}
      navigation={true}
      keyboard={true}
      modules={[Navigation, Keyboard]}
      className="owl-carousel testimonial-slide featured-venues-slider owl-theme"
    >
      {data?.map((item) => (
        <SwiperSlide key={item._id}>
          <TestimonialSlide {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSider;
