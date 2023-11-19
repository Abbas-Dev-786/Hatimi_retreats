import Banner from "../components/login/Banner";
import Form from "../components/login/Form";

const Login = () => {
  return (
    <div className="authendication-pages">
      <div className="content">
        <div className="container wrapper no-padding">
          <div className="row no-margin vph-100">
            <Banner />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
