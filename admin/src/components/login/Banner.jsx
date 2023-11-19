const Banner = () => {
  return (
    <div className="col-12 col-sm-12 col-lg-6 no-padding">
      <div className="banner-bg login">
        <div className="row no-margin h-100">
          <div className="col-sm-10 col-md-10 col-lg-10 mx-auto">
            <div className="h-100 d-flex justify-content-center align-items-center">
              <div className="text-bg register text-center">
                <button
                  type="button"
                  className="btn btn-limegreen text-capitalize"
                >
                  <i className="fa-solid fa-thumbs-up me-3"></i>Login Admin
                </button>
                <p>
                  Log in right away for our advanced sports software solutions,
                  created to address issues in regular sporting events and
                  activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
