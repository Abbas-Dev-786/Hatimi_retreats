import Footer from "../components/common/Footer";
import ConvenientSection from "../components/home/ConvenientSection";
import FeaturedSection from "../components/home/FeaturedSection";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialSection from "../components/home/TestimonialSection";
import WorkSection from "../components/home/WorkSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <FeaturedSection />
      <ConvenientSection />
      <ServicesSection />
      <TestimonialSection />
      <Footer />
    </>
  );
};

export default Home;
