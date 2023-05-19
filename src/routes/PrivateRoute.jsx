import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="h-5/6 py-11 flex justify-center items-center">
                <h1 className="text-5xl text-center">Loading...</h1>
                <FontAwesomeIcon className="text-5xl" icon={faCircleNotch} spin size="2xl" />
            </div>
        );
    }

    if (user) {
        return children;
    }
    return (
        <Navigate state={{ from: location }} to={'/login'} replace></Navigate>
    );
};

export default PrivateRoute;