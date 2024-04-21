import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

const PublicRoute = () => {
    return [
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        { path: "*", element: <Navigate to='/login' replace /> },
    ];
};

export default PublicRoute;
