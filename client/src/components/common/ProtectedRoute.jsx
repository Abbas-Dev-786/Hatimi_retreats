import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  return user?.firstName ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
