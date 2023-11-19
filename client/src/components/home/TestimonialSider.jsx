// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import TestimonialSlide from "./TestimonialSlide";

const data = [
  {
    rating: 3,
    review: "Personalized Attention",
    comments:
      "Hatimi Retreats' coaching services enhanced my Box Cricket skills.Personalized attention from knowledgeable coaches propelled my game to new heights.",
    image: "/img/profiles/avatar-01.jpg",
    name: "Ariyan Rusov",
    propertyName: "Box Cricket",
  },
  {
    rating: 5,
    review: "Quality Matters !",
    comments:
      "Hatimi Retreats' coaching services enhanced my Box Cricket skills.Personalized attention from knowledgeable coaches propelled my game to new heights.",
    image: "/img/profiles/avatar-04.jpg",
    name: "Darren Valdez",
    propertyName: "Box Cricket",
  },
  {
    rating: 1.5,
    review: "Excellent Professionalism !",
    comments:
      "Hatimi Retreats' coaching services enhanced my Box Cricket skills.Personalized attention from knowledgeable coaches propelled my game to new heights.",
    image: "/img/profiles/avatar-03.jpg",
    name: "Elinor Dunn",
    propertyName: "Box Cricket",
  },
  {
    rating: 2.5,
    review: "Quality Matters !",
    comments:
      "Hatimi Retreats' coaching services enhanced my Box Cricket skills.Personalized attention from knowledgeable coaches propelled my game to new heights.",
    image: "/img/profiles/avatar-01.jpg",
    name: "Darren Valdez",
    propertyName: "Box Cricket",
  },
];

const TestimonialSider = () => {
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
      loop={true}
      navigation={true}
      keyboard={true}
      modules={[Navigation, Keyboard]}
      className="owl-carousel testimonial-slide featured-venues-slider owl-theme"
    >
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <TestimonialSlide {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSider;
