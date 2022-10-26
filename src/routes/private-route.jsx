import { VscLoading } from "react-icons/vsc";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../contexts/user-provider";

const PrivateRoute = ({ children }) => {
  const { user, isUserLoaded } = useUser();
  const location = useLocation();
  if (!isUserLoaded)
    return <VscLoading className='animate-spin text-3xl w-full h-12 mt-12' />;
  if (user?.uid) return children;

  return <Navigate to={"/login"} state={{ from: location.pathname }} replace />;
};

export default PrivateRoute;
