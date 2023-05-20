import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import AboutUs from "../pages/AboutUs";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys";
import TermsConditions from "../pages/TermsConditions";
import PrivateRoute from "./PrivateRoute";
import AddMyToy from "../pages/AddMyToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: "/", element: <Home />, },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/blog", element: <PrivateRoute><Blog /></PrivateRoute> },
            { path: "/about", element: <AboutUs /> },
            { path: "/all_toys", element: <AllToys /> },
            { path: "my_toys", element: <MyToys /> },
            { path: "terms_conditions", element: <TermsConditions /> },
            { path: "add_toy", element: <PrivateRoute><AddMyToy /></PrivateRoute> }
        ]

    }
]);

export default router;