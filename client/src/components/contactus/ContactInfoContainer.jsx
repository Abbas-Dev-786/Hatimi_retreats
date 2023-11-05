import { Mail, MapPin, PhoneCall } from "react-feather";
import GoogleMap from "./GoogleMap";

const contactData = [
  {
    icon: <Mail size={"35px"} />,
    title: "Email Address",
    text: "[email protected]",
  },
  {
    icon: <PhoneCall size={"35px"} />,
    title: "Phone Number",
    text: "+1 8164 164654",
  },
  {
    icon: <MapPin size={"35px"} />,
    title: "Location",
    text: "3365 Central AvenueTeterboro, NJ 07608",
  },
];

const ContactInfoContainer = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-40">Contact Information</h2>
      <div className="row mb-40">
        {contactData.map((data) => (
          <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={data.title}>
            <div className="d-flex justify-content-start align-items-center details">
              <i className="d-flex justify-content-center align-items-center">
                {data.icon}
              </i>
              <div className="info">
                <h4>{data.title}</h4>
                <p>{data.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <GoogleMap />
    </div>
  );
};

export default ContactInfoContainer;
