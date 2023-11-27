import PropTypes from "prop-types";

const Breadcrumbs = ({ isCourt }) => {
  return (
    <>
      <section className="breadcrumb breadcrumb-list mb-0">
        <span className="primary-right-round" />
        <div className="container">
          <h1 className="text-white">
            {isCourt ? "List New Court" : "Admin Dashboard"}
          </h1>
        </div>
      </section>
    </>
  );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  isCourt: PropTypes.bool,
};
