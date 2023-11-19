import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user?.firstName) {
      toast.error("Please Login To Access");
    }
  }, [user]);

  return user?.firstName ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
