// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import FeatureSlide from "./FeatureSlide";
import { useQuery } from "@tanstack/react-query";
import { getTop10Courts } from "../../state/api";

// const tempData = [
//   {
//     image: "/img/venues/venues-01.jpg",
//     link: "3457873578",
//     // features: ["featured"],
//     price: 450,
//     rating: 4.2,
//     ratingQuantity: 300,
//     title: "Box Cricket Venus",
//     desc: "Elevate your athletic journey at Sarah Sports Academy, where excellence meets opportunity.",
//     address: "Port Alsworth, AK",
//     availabilityDate: new Date(),
//     isBookmarked: false,
//   },
//   {
//     image: "/img/venues/venues-01.jpg",
//     link: "6875678767",
//     // features: ["top rated"],
//     price: 200,
//     rating: 5.0,
//     ratingQuantity: 150,
//     title: "Box Cricket Venus",
//     desc: "Unleash your Box Cricket potential at our premier Box Cricket Academy, where champions are made.",
//     address: "Guysville, OH",
//     availabilityDate: new Date(),
//     isBookmarked: false,
//   },
//   {
//     image: "/img/venues/venues-01.jpg",
//     link: "8475685767",
//     // features: [],
//     price: 350,
//     rating: 4.7,
//     ratingQuantity: 120,
//     title: "Box Cricket Venus",
//     desc: "Manchester Academy: Where dreams meet excellence in sports education and training.",
//     address: "Little Rock, AR",
//     availabilityDate: new Date(),
//     isBookmarked: true,
//   },
//   {
//     image: "/img/venues/venues-01.jpg",
//     link: "457416545456",
//     // features: [],
//     price: 350,
//     rating: 4.7,
//     ratingQuantity: 120,
//     title: "Box Cricket Venus",
//     desc: "Manchester Academy: Where dreams meet excellence in sports education and training.",
//     address: "Little Rock, AR",
//     availabilityDate: new Date(),
//     isBookmarked: true,
//   },
// ];

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
