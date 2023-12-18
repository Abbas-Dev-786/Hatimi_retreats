import { useEffect } from "react";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
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
      navigate("/login");
      toast.error(error.message);
    }
  }, [isError, error, dispatch, navigate]);

  useEffect(() => {
    if (user?.role === "user") {
      dispatch(logout());
      navigate("/login");
      toast.error("You are Not Allowed to access this route");
    }
  }, [user, dispatch, navigate]);

  return !user?.email ? <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedRoute;
