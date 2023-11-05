import Content from "../components/single-venue/Content";
import ImageGallerySection from "../components/single-venue/ImageGallerySection";
import InfoSection from "../components/single-venue/InfoSection";

const SingleVenue = () => {
  return (
    <div className="venue-coach-details">
      <ImageGallerySection />
      <InfoSection />
      <Content />
    </div>
  );
};

export default SingleVenue;
