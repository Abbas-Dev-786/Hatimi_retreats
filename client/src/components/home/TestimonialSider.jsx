// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import TestimonialSlide from "./TestimonialSlide";

const data = [
  {
    rating: 5.0,
    review: "Personalized Attention",
    comments:
      "Hatimi Retreats' coaching services enhanced my Box Cricket skills.Personalized attention from knowledgeable coaches propelled my game to new heights.",
    image: "/img/profiles/avatar-01.jpg",
    name: "Ariyan Rusov",
    propertyName: "Box Cricket",
  },
  {
    rating: 5.0,
    review: "Quality Matters !",
    comments:
      "Hatimi Retreats' coaching services enhanced my Box Cricket skills.Personalized attention from knowledgeable coaches propelled my game to new heights.",
    image: "/img/profiles/avatar-04.jpg",
    name: "Darren Valdez",
    propertyName: "Box Cricket",
  },
  {
    rating: 5.0,
    review: "Excellent Professionalism !",
    comments:
      "Hatimi Retreats' coaching services enhanced my Box Cricket skills.Personalized attention from knowledgeable coaches propelled my game to new heights.",
    image: "/img/profiles/avatar-03.jpg",
    name: "Elinor Dunn",
    propertyName: "Box Cricket",
  },
  {
    rating: 5.0,
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

  // <div className="owl-carousel testimonial-slide featured-venues-slider owl-theme">
  //   <div className="testimonial-group">
  //     <div className="testimonial-review">
  //       <div className="rating-point">
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <span> 5.0</span>
  //       </div>
  //       <h5>Personalized Attention</h5>
  //       <p>
  //         Hatimi Retreats' coaching services enhanced my Box Cricket skills.
  //         Personalized attention from knowledgeable coaches propelled my game
  //         to new heights.
  //       </p>
  //     </div>
  //     <div className="listing-venue-owner">
  //       <a className="navigation">
  //         <img src="/img/profiles/avatar-01.jpg" alt="User" />
  //       </a>
  //       <div className="testimonial-content">
  //         <h5>
  //           <a href="javascript:;">Ariyan Rusov</a>
  //         </h5>
  //         <a href="javascript:void(0);" className="btn btn-primary">
  //           Box Cricket
  //         </a>
  //       </div>
  //     </div>
  //   </div>

  //   <div className="testimonial-group">
  //     <div className="testimonial-review">
  //       <div className="rating-point">
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <span> 5.0</span>
  //       </div>
  //       <h5>Quality Matters !</h5>
  //       <p>
  //         Hatimi Retreats' advanced Box Cricket equipment has greatly improved
  //         my performance on the court. Their quality range of rackets and
  //         shoes made a significant impact.
  //       </p>
  //     </div>
  //     <div className="listing-venue-owner">
  //       <a className="navigation">
  //         <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
  //       </a>
  //       <div className="testimonial-content">
  //         <h5>
  //           <a href="javascript:;">Darren Valdez</a>
  //         </h5>
  //         <a href="javascript:void(0);" className="btn btn-primary">
  //           Box Cricket
  //         </a>
  //       </div>
  //     </div>
  //   </div>

  //   <div className="testimonial-group">
  //     <div className="testimonial-review">
  //       <div className="rating-point">
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <span> 5.0</span>
  //       </div>
  //       <h5>Excellent Professionalism !</h5>
  //       <p>
  //         Hatimi Retreats' unmatched professionalism and service excellence
  //         left a positive experience. Highly recommended for court rentals and
  //         equipment purchases.
  //       </p>
  //     </div>
  //     <div className="listing-venue-owner">
  //       <a className="navigation">
  //         <img src="assets/img/profiles/avatar-03.jpg" alt="User" />
  //       </a>
  //       <div className="testimonial-content">
  //         <h5>
  //           <a href="javascript:;">Elinor Dunn</a>
  //         </h5>
  //         <a href="javascript:void(0);" className="btn btn-primary">
  //           Box Cricket
  //         </a>
  //       </div>
  //     </div>
  //   </div>

  //   <div className="testimonial-group">
  //     <div className="testimonial-review">
  //       <div className="rating-point">
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <i className="fas fa-star filled"></i>
  //         <span> 5.0</span>
  //       </div>
  //       <h5>Quality Matters !</h5>
  //       <p>
  //         Hatimi Retreats' advanced Box Cricket equipment has greatly improved
  //         my performance on the court. Their quality range of rackets and
  //         shoes made a significant impact.
  //       </p>
  //     </div>
  //     <div className="listing-venue-owner">
  //       <a className="navigation">
  //         <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
  //       </a>
  //       <div className="testimonial-content">
  //         <h5>
  //           <a href="javascript:;">Darren Valdez</a>
  //         </h5>
  //         <a href="javascript:void(0);" className="btn btn-primary">
  //           Box Cricket
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //   );
};

export default TestimonialSider;
