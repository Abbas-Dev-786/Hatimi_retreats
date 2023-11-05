import ContentSection from "../components/aboutus/ContentSection";
import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <Banner text="About us" linkText="Home" link="/" />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
