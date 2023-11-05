import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Banner = ({ text, linkText, link }) => {
  return (
    <div className="breadcrumb breadcrumb-list mb-0">
      <span className="primary-right-round"></span>
      <div className="container">
        <h1 className="text-white">{text}</h1>
        <ul>
          <li>
            <Link to={link}>{linkText}</Link>
          </li>
          <li>{text}</li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;

Banner.propTypes = {
  text: PropTypes.string,
  linkText: PropTypes.string,
  link: PropTypes.string,
};
