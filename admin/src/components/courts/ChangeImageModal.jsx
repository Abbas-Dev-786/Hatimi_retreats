import { useEffect, useState } from "react";
import { Trash2, X } from "react-feather";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import UploadWidget from "../common/UploadWidget";
import { IMAGE_URL } from "../../constants";
import { editCourt } from "../../state/api";
import { resetEditCourtData } from "../../state/slices/courtSlice";

const ChangeImageModal = () => {
  const dispatch = useDispatch();
  const { editForm } = useSelector((state) => state.court);

  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState();
  const [newCoverImage, setNewCoverImage] = useState();
  const [newImages, setNewImages] = useState([]);

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["edit-court"],
    mutationFn: editCourt,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courts"] });

      toast.success(`Court edited Successfully`);
    },
  });

  function handleOnCoverUpload(error, result) {
    if (error) return;

    setCoverImage(result?.info?.secure_url);
    setNewCoverImage(result?.info?.secure_url);
  }

  function handleOnImagesUpload(error, result) {
    if (error) return;
    setImages((prev) => [...prev, result?.info?.secure_url]);
    setNewImages((prev) => [...prev, result?.info?.secure_url]);
  }

  function handleRemoveImage(imageToRemove) {
    const currentImages = images.filter((img) => img != imageToRemove);
    setImages(currentImages);
  }

  const handleEditCourt = () => {
    if (!coverImage) return toast.error("Please Upload cover image");
    if (!images.length) return toast.error("Please Upload atleast 3 images");

    const data = {
      coverImage: coverImage?.split("/")?.at(-1),
      images: images?.map((img) => img.split("/")?.at(-1)),
      id: editForm?._id,
    };

    mutate(data);
  };

  useEffect(() => {
    if (!editForm?.name) return;

    setCoverImage(editForm?.coverImage);
    setImages(editForm?.images);
  }, [editForm]);

  return (
    <div
      className="modal custom-modal fade request-modal"
      role="dialog"
      id="imageModal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="form-header modal-header-title">
              <h4 className="mb-0">Change Images</h4>
            </div>
            <a className="close" data-bs-dismiss="modal" aria-label="Close">
              <span className="align-center" aria-hidden="true">
                <i>
                  <X size={"15px"} />
                </i>
              </span>
            </a>
          </div>
          <div className="modal-body">
            <div className="row mb-1">
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

                  <h5
                    className={`text-${newCoverImage ? "success" : "danger"}`}
                  >
                    {newCoverImage
                      ? "Image Uploaded Successfully"
                      : "Upload New Cover Image"}
                  </h5>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="file-upload-text appointment-upload">
                  <div className="input-space">
                    <p>Upload Images for Gallery</p>{" "}
                    <div className="d-flex align-items-center justify-content-start gap-2 flex-wrap">
                      {images?.map((img, i) => (
                        <div key={i} style={{ position: "relative" }}>
                          <span
                            className="d-flex align-items-center justify-content-center"
                            style={{
                              position: "absolute",
                              top: "5px",
                              cursor: "pointer",
                              right: "5px",
                              background: "red",
                              height: "30px",
                              width: "30px",
                              borderRadius: "50%",
                              color: "white",
                              objectFit: "cover",
                            }}
                            onClick={() => handleRemoveImage(img)}
                          >
                            <Trash2 size={"18px"} />
                          </span>
                          <img
                            src={`${IMAGE_URL}/${img}`}
                            style={{
                              height: "150px",
                              width: "150px",
                            }}
                          />
                        </div>
                      ))}
                    </div>
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
                            className="btn btn-primary mt-4"
                            onClick={handleOnClick}
                          >
                            Upload Gallery Images
                          </button>
                        );
                      }}
                    </UploadWidget>
                  </div>

                  <h5
                    className={`text-${
                      newImages.length ? "success" : "danger"
                    }`}
                  >
                    {newImages.length
                      ? "Images Uploaded Successfully"
                      : "Please Upload New images"}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="table-accept-btn">
              <button
                data-bs-dismiss="modal"
                className="btn cancel-table-btn me-3"
                onClick={() => {
                  dispatch(resetEditCourtData());
                }}
              >
                Cancel
              </button>
              <button
                data-bs-dismiss="modal"
                className="btn btn-primary"
                onClick={handleEditCourt}
              >
                Change Images
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeImageModal;
