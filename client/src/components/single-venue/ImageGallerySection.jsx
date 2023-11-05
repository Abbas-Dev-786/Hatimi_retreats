import ImageSlider from "./ImageSlider";

const ImageGallerySection = () => {
  return (
    <div className="bannergallery-section">
      <ImageSlider />
      <div className="showphotos corner-radius-10">
        <a href="/img/gallery/gallery1/gallery-03.png" data-fancybox="gallery1">
          <i className="fa-regular fa-images"></i>More Photos
        </a>
      </div>
    </div>
  );
};

export default ImageGallerySection;
