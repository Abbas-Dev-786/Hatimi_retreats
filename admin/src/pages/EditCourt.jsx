import { ArrowRightCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Navbar from "../components/common/Navbar";
import OptionTabLists from "../components/new-court/OptionTabLists";
import InfoSection from "../components/new-court/InfoSection";
import PriceSection from "../components/new-court/PriceSection";
import RulesSection from "../components/new-court/RulesSection";
import AmenitySection from "../components/new-court/AmenitySection";
import LocationSection from "../components/new-court/LocationSection";
import { createCourt, getSingleCourt } from "../state/api";
import { useEffect } from "react";
import { setNewCourtData } from "../state/slices/courtSlice";

const EditCourt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form } = useSelector((state) => state.court);

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["edit-court"],
    mutationFn: createCourt,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courts"] });

      navigate("/dashboard/courts");
      toast.success(`Court created Successfully`);
    },
  });

  const { data } = useQuery({
    queryKey: ["single-court", id],
    queryFn: getSingleCourt,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!Object.values(form).every((field) => Boolean(field))) {
      toast.error("All Fields Are Mandantory");
      return;
    }

    mutate(form);
  };

  useEffect(() => {
    if (data?.name) {
      dispatch(setNewCourtData(data));
    }
  }, [data, dispatch]);

  return (
    <div className="add-court venue-coach-details">
      <div className="container-fluid px-0 pb-5">
        <Navbar />
        <Breadcrumbs isCourt={true} />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <OptionTabLists />

                <form
                  className="accordion"
                  id="accordionPanel"
                  onSubmit={handleFormSubmit}
                >
                  <InfoSection />

                  <PriceSection />

                  <RulesSection />

                  <AmenitySection />

                  {/* <GallerySection /> */}

                  <LocationSection />

                  <div className="text-center btn-row">
                    <button
                      className="btn btn-secondary btn-icon"
                      type="submit"
                    >
                      Edit Court{" "}
                      <i className="ms-1">
                        <ArrowRightCircle size={"15px"} />
                      </i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourt;
