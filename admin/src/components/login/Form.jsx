import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowRightCircle, Eye, EyeOff } from "react-feather";
import { toast } from "react-toastify";
import { LoginUser } from "../../state/api";
import { login } from "../../state/slices/userSlice";

const Form = () => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: LoginUser,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: (data) => {
      dispatch(login(data));

      navigate("/dashboard");
      toast.success("Login Successfull");
    },
  });

  const handleLoginFormSubmission = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All Fields are Mandatory.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password should be 8 characters long.");
      return;
    }

    mutate({ email, password });
  };

  return (
    <div className="col-12 col-sm-12  col-lg-6 no-padding">
      <div className="dull-pg">
        <div className="row no-margin vph-100 d-flex align-items-center justify-content-center">
          <div className="col-sm-10 col-md-10 col-lg-10 mx-auto">
            <header className="text-center">
              <img
                src="/img/logo-black.png"
                className="img-fluid"
                alt="Logo"
                width="110px"
              />
            </header>
            <div className="shadow-card">
              <h2>Welcome Back</h2>
              <p>Login into your account</p>

              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="user">
                  <form onSubmit={handleLoginFormSubmission}>
                    <div className="form-group">
                      <div className="group-img">
                        <i className="feather-user"></i>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="pass-group group-img">
                        <i
                          className="toggle-password"
                          onClick={() => setPasswordHidden((prev) => !prev)}
                        >
                          {isPasswordHidden ? (
                            <EyeOff size={"15px"} />
                          ) : (
                            <Eye size={"15px"} />
                          )}
                        </i>
                        <input
                          type={isPasswordHidden ? "password" : "text"}
                          className="form-control pass-input"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    {/* <div className="form-group d-sm-flex align-items-center justify-content-between">
                        <div className="form-check form-switch d-flex align-items-center justify-content-start">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="user-pass"
                          />
                          <label className="form-check-label" htmlFor="user-pass">
                            Remember Password
                          </label>
                        </div>
                        <span>
                          <a href="forgot-password.html" className="forgot-pass">
                            Forgot Password
                          </a>
                        </span>
                      </div> */}
                    <button
                      className="btn btn-secondary register-btn d-inline-flex justify-content-center align-items-center w-100 btn-block"
                      type="submit"
                      disabled={isLoading}
                    >
                      Sign In
                      <i className="ms-2">
                        <ArrowRightCircle size={"15px"} />
                      </i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
