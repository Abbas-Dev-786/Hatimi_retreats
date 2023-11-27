import { useState } from "react";
import { X } from "react-feather";
import { toast } from "react-toastify";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createAmenity } from "../../state/api";

const AddNewAmenityModal = () => {
  const [name, setName] = useState("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
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

  const handleNewAmenity = () => {
    if (!name) {
      toast.error("Amenity Name is mandatory");
      return;
    }

    mutate({ name });
  };

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
              <h4 className="mb-0">Add New Amenity</h4>
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
                      className="form-control mt-1"
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
              >
                Cancel
              </button>
              <button
                data-bs-dismiss="modal"
                className="btn btn-primary"
                onClick={handleNewAmenity}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewAmenityModal;
