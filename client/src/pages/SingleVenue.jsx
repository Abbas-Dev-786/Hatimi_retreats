import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Content from "../components/single-venue/Content";
import ImageGallerySection from "../components/single-venue/ImageGallerySection";
import InfoSection from "../components/single-venue/InfoSection";
import { getSingleCourt } from "../state/api";
import { useEffect } from "react";
import { setCourtData } from "../state/slices/courtSlice";
import Spinner from "../components/common/Spinner";

const SingleVenue = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["court", id],
    queryFn: getSingleCourt,
  });

  useEffect(() => {
    dispatch(setCourtData(data));
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <div className="full-screen d-flex align-items-center justify-content-center">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="full-screen d-flex align-items-center justify-content-center">
        <h5 className="text-center text-capitalize text-danger">
          Court Does not exists
        </h5>
      </div>
    );
  }

  return (
    <div className="venue-coach-details">
      <ImageGallerySection />
      <InfoSection />
      <Content />
    </div>
  );
};

export default SingleVenue;
