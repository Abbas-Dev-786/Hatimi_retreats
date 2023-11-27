import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UploadWidget from "../common/UploadWidget";
import { setNewCourtData } from "../../state/slices/courtSlice";

const GallerySection = () => {
  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState();

  function handleOnCoverUpload(error, result) {
    if (error) return;
    setCoverImage(result?.info?.secure_url);
  }

  function handleOnImagesUpload(error, result) {
    if (error) return;
    setImages((prev) => [...prev, result?.info?.secure_url]);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      coverImage: coverImage?.split("/")?.at(-1) || "",
      images: images?.map((img) => img.split("/").at(-1)) || [],
    };

    dispatch(setNewCourtData(data));
  }, [dispatch, images, coverImage]);

  return (
    <div className="accordion-item mb-4" id="gallery">
      <h4 className="accordion-header" id="panelsStayOpen-gallery">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseEight"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseEight"
        >
          Gallery <span className="text-danger">*</span>
        </button>
      </h4>
      <div
        id="panelsStayOpen-collapseEight"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-gallery"
      >
        <div className="accordion-body">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="file-upload-text appointment-upload">
                <div className="input-space">
                  <p>Upload Cover Image</p>{" "}
                  <UploadWidget
                    onUpload={handleOnCoverUpload}
                    extraOptions={{ multiple: false }}
                  >
                    {({ open }) => {
                      function handleOnClick(e) {
                        e.preventDefault();
                        open();
                      }
                      return (
                        <button
                          className="btn btn-primary"
                          onClick={handleOnClick}
                        >
                          Upload Cover Image
                        </button>
                      );
                    }}
                  </UploadWidget>
                </div>

                <h5 className={`text-${coverImage ? "success" : "danger"}`}>
                  {coverImage
                    ? "Image Uploaded Successfully"
                    : "Please Upload images"}
                </h5>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="file-upload-text appointment-upload">
                <div className="input-space">
                  <p>Upload Images for Gallery</p>{" "}
                  <UploadWidget
                    onUpload={handleOnImagesUpload}
                    extraOptions={{ maxFiles: 15 }}
                  >
                    {({ open }) => {
                      function handleOnClick(e) {
                        e.preventDefault();
                        open();
                      }
                      return (
                        <button
                          className="btn btn-primary"
                          onClick={handleOnClick}
                        >
                          Upload Gallery Images
                        </button>
                      );
                    }}
                  </UploadWidget>
                </div>

                <h5 className={`text-${images.length ? "success" : "danger"}`}>
                  {images.length
                    ? "Images Uploaded Successfully"
                    : "Please Upload images"}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
