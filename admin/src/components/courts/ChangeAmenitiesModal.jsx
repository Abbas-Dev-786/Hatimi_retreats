import { useEffect, useState } from "react";
import { X } from "react-feather";
import { toast } from "react-toastify";
import Select from "react-select";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { editCourt, getAllAmenities, getAllRules } from "../../state/api";
import { resetEditCourtData } from "../../state/slices/courtSlice";

const textCapitalise = (text) => {
  return text
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1, w.length))
    .join(" ");
};

const ChangeAmenitiesModal = () => {
  const dispatch = useDispatch();
  const { editForm } = useSelector((state) => state.court);
  const [amenities, setAmenities] = useState([]);
  const [rules, setRules] = useState();

  const { data: amenitiesData } = useQuery({
    queryKey: ["amenities"],
    queryFn: getAllAmenities,
  });

  const { data: rulesData } = useQuery({
    queryKey: ["rules"],
    queryFn: getAllRules,
  });

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

  const handleEditAmenity = () => {
    if (!amenities.length) {
      toast.error("Amenities could not be empty");
      return;
    }

    if (!rules?.value) {
      toast.error("Rules could not be empty");
      return;
    }

    const data = {
      id: editForm?._id,
      rules: rules.value,
      amenities: amenities.map((amenity) => amenity.value),
    };

    mutate(data);
  };

  useEffect(() => {
    const includedAmenities = editForm?.amenities
      ?.map((item) => amenitiesData.find((amenity) => amenity._id === item))
      ?.map((item) => ({
        label: textCapitalise(item.name),
        value: item._id,
      }));
    setAmenities(includedAmenities);

    const oldRule = rulesData?.find((rule) => rule._id == editForm?.rules);
    setRules(oldRule?._id ? { label: oldRule?.text, value: oldRule?._id } : "");
  }, [editForm, amenitiesData, rulesData]);

  return (
    <div
      className="modal custom-modal fade request-modal"
      role="dialog"
      id="amenityModal2"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="form-header modal-header-title">
              <h4 className="mb-0">Change Amenities and Rules</h4>
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
              <div className="col-12">
                <div className="input-space">
                  <p>Amenities</p>
                  <Select
                    isMulti
                    name="amenities"
                    options={
                      amenitiesData?.map((item) => ({
                        label: textCapitalise(item.name),
                        value: item._id,
                      })) || []
                    }
                    className="basic-multi-select"
                    placeholder="Select Amenities"
                    classNamePrefix="select"
                    value={amenities}
                    onChange={(e) => setAmenities(e)}
                  />
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12">
                <div className="input-space">
                  <p>Rules</p>
                  <Select
                    name="colors"
                    options={
                      rulesData?.map((item) => ({
                        label: textCapitalise(item.text),
                        value: item._id,
                      })) || []
                    }
                    className="basic-multi-select"
                    placeholder="Select Rule"
                    classNamePrefix="select"
                    value={rules}
                    onChange={(e) => setRules(e)}
                  />
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
                onClick={handleEditAmenity}
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeAmenitiesModal;
