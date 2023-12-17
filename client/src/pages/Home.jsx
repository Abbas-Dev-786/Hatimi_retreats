import { useSearchParams } from "react-router-dom";

import HeroSection from "../components/home/HeroSection";
import ConvenientSection from "../components/home/ConvenientSection";
import FeaturedSection from "../components/home/FeaturedSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialSection from "../components/home/TestimonialSection";
import WorkSection from "../components/home/WorkSection";
import Footer from "../components/common/Footer";
import ValidateITS from "./ValidateITS";

const Home = () => {
  const [searchParams] = useSearchParams();

  // console.log(searchParams.toString());

  if (searchParams.size > 1) {
    return <ValidateITS />;
  }

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
