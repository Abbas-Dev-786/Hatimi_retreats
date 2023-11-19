import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    // <section className="page_404">
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="col-12 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center my-5">404</h1>
            </div>

            <div className="contant_box_404">
              <h2>Looks like you are lost</h2>

              <p>The page you are looking for is not avaible!</p>

              <Link to="/">
                <button className="btn btn-success mt-2">Go To Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default PageNotFound;
