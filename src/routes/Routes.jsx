import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://b7a11-toy-marketplace-server-side-nagibgithub.vercel.app/users')
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/about",
                element: <AboutUs/>
            }
        ],

    },
]);

export default router;