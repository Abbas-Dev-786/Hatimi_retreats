import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../../state/slices/userSlice";
import { me } from "../../state/api";

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, isError } = useQuery({
    queryKey: ["me"],
    queryFn: me,
    enabled: Boolean(user?.email),
  });

  useEffect(() => {
    if (isError) {
      dispatch(logout());
      navigate("/");
      toast.error(error.message);
    }
  }, [isError, error, dispatch, navigate]);

  useEffect(() => {
    if (!user?.email) {
      toast.error("Please Login to access");
    }
  }, [user]);

  return !user?.email ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoute;
