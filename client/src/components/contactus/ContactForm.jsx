import { useState } from "react";
import { ArrowRightCircle } from "react-feather";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [comments, setComments] = useState("");

  return (
    <section className="section dull-bg">
      <div className="container">
        <h2 className="text-center mb-40">
          Reach out to us and let&apos;s smash your inquiries
        </h2>
        <form className="contact-us">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 mb-3">
              <label htmlFor="first-name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="first-name"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-12 col-sm-12 col-md-6 mb-3">
              <label htmlFor="last-name" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="col-12 col-sm-12 col-md-6 mb-3">
              <label htmlFor="e-mail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="e-mail"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-12 col-sm-12 col-md-6 mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Enter Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="comments" className="form-label">
              Comments
            </label>
            <textarea
              className="form-control"
              id="comments"
              rows="3"
              placeholder="Enter Comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-secondary d-flex align-items-center"
          >
            Submit
            <i className="ms-2">
              <ArrowRightCircle size={"15px"} />
            </i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
