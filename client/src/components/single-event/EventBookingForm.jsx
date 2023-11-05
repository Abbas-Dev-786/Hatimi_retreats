import { useState } from "react";
import { ArrowRightCircle } from "react-feather";
import { Link } from "react-router-dom";

const EventBookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [comments, setComments] = useState("");

  return (
    <section className="section event-booking">
      <div className="container">
        <div className="row">
          <div className="col-12 offset-sm-12 offset-md-2 col-md-8 col-lg-8">
            <div className="text-center mb-40">
              <h3>Book an Event</h3>
              <p>
                Hi, we are always open for cooperation and suggestions,
                <br />
                contact us in one of the ways below
              </p>
            </div>
            <form>
              <div className="card">
                <h3 className="border-bottom">Enter Details</h3>
                <div className="mb-10">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-10">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-10">
                  <label htmlFor="name" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phonenumber"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="mb-10">
                  <label htmlFor="name" className="form-label">
                    Your Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
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
                <div className="d-flex align-items-center justify-content-center">
                  <Link
                    to="cage-details.html"
                    className="btn btn-secondary btn-icon"
                  >
                    Pay Now
                    <i className="ms-1">
                      <ArrowRightCircle size={"15px"} />
                    </i>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventBookingForm;
