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

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
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
                element: <AboutUs />
            },
            {
                path: "/all_toys",
                element: <AllToys />
            },
            {
                path: "my_toys",
                element: <MyToys/>
            }
        ],

    },
]);

export default router;