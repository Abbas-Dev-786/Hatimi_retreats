import Footer from "../components/common/Footer";
import ConvenientSection from "../components/home/ConvenientSection";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WorkSection from "../components/home/WorkSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <ConvenientSection />
      <ServicesSection />
      <Footer />
    </>
  );
};

export default Home;
