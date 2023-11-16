import TestimonialSider from "./TestimonialSider";

const TestimonialSection = () => {
  return (
    <section className="section our-testimonials">
      <div className="container">
        <div className="section-heading aos" data-aos="fade-up">
          <h2>
            Our <span>Testimonials</span>
          </h2>
          <p className="sub-title">
            Glowing testimonials from passionate Box Cricket enthusiasts
            worldwide, showcasing our exceptional services.
          </p>
        </div>
        <div className="row">
          <div className="featured-slider-group aos" data-aos="fade-up">
            <TestimonialSider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
