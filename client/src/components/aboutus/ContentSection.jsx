import ImageContainer from "./ImageContainer";
import VisionContainer from "./VisionContainer";

const ContentSection = () => {
  return (
    <div className="content">
      <section className="aboutus-info">
        <div className="container">
          <ImageContainer />

          <VisionContainer />
        </div>
      </section>
    </div>
  );
};

export default ContentSection;
