import { useEffect, useState } from "react";
import { X } from "react-feather";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createAmenity, editAmenity } from "../../state/api";
import { resetAmenityData } from "../../state/slices/amenitySlice";

const AddNewAmenityModal = () => {
  const { form, isNew } = useSelector((state) => state.amenity);
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const queryClient = useQueryClient();
  const { mutate: createAmenityFn } = useMutation({
    mutationKey: ["add-amenity"],
    mutationFn: createAmenity,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["amenities"] });

      toast.success(`Amenity created Successfully`);
    },
  });

  const { mutate: editAmenityFn } = useMutation({
    mutationKey: ["delete-amenity"],
    mutationFn: editAmenity,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["amenities"] });

      toast.success(`Amenity edited Successfully`);
    },
  });

  const handleNewAmenity = () => {
    if (!name) {
      toast.error("Amenity Name is mandatory");
      return;
    }

    createAmenityFn({ name });
  };

  const handleEditAmenity = () => {
    if (!name) {
      toast.error("Amenity Name is mandatory");
      return;
    }

    editAmenityFn({ id: form?._id, name });
  };

  useEffect(() => {
    if (!isNew && form?.name) {
      setName(form.name);
    } else {
      setName("");
    }
  }, [form, isNew]);

  return (
    <div
      className="modal custom-modal fade request-modal"
      role="dialog"
      id="amenityModal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="form-header modal-header-title">
              <h4 className="mb-0">
                {!isNew ? "Edit Amenity" : "Add New Amenity"}
              </h4>
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
            <div className="row">
              <div className="col-lg-12">
                <div className="card dashboard-card court-information">
                  <div className="card-header">
                    <h6>Amenity Name</h6>
                    <input
                      type="text"
                      className="form-control mt-1 text-capitalize"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
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
                  dispatch(resetAmenityData());
                }}
              >
                Cancel
              </button>
              {isNew ? (
                <button
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                  onClick={handleNewAmenity}
                >
                  Create
                </button>
              ) : (
                <button
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                  onClick={handleEditAmenity}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewAmenityModal;
