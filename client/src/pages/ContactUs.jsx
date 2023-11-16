import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";
// import ContactForm from "../components/contactus/ContactForm";
import ContactInfoContainer from "../components/contactus/ContactInfoContainer";

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <Banner text="Contact us" linkText="Home" link="/" />
      <div className="content blog-details contact-group">
        <ContactInfoContainer />
        {/* <ContactForm /> */}
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
