const ImageContainer = () => {
  return (
    <div className="row d-flex align-items-center">
      <div className="col-12 col-sm-3 col-md-3 col-lg-3">
        <div className="banner text-center">
          <img
            src="/img/aboutus/banner-01.jpg"
            className="img-fluid corner-radius-10"
            alt="Banner-01"
          />
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-6">
        <div className="banner text-center">
          <img
            src="/img/aboutus/banner-02.jpg"
            className="img-fluid corner-radius-10"
            alt="Banner-02"
          />
        </div>
      </div>
      <div className="col-12 col-sm-3 col-md-3 col-lg-3">
        <div className="banner text-center">
          <img
            src="/img/aboutus/banner-03.jpg"
            className="img-fluid corner-radius-10"
            alt="Banner-03"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
