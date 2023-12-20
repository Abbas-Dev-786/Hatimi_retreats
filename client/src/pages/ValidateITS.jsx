import { useSearchParams, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../components/common/Spinner";
import { loginUser } from "../state/api";
import { login } from "../state/slices/userSlice";
import { useEffect } from "react";

const ValidateITS = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onError: () => {
      toast.error("Login Failed");
      navigate("/");
    },
    onSuccess: (data) => {
      dispatch(login(data));

      navigate("/");
      toast.success("Login Successfull");
    },
  });

  useEffect(() => {
    if (searchParams.size > 1) {
      mutate({ url: searchParams.toString() });
    }
  }, [searchParams, mutate]);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        width: "100vw",
        height: "100vh",
        background: "#192335",
        zIndex: -1,
      }}
    >
      {isPending && (
        <>
          <Spinner />
          <h5 className="text-white text-center mt-2">Logging You in ......</h5>
        </>
      )}
    </div>
  );
};

export default ValidateITS;
