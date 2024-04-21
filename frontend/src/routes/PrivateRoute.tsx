import { lazy } from "react";
import Layout from "../components/Layout";

const NewsFeed = lazy(() => import("../pages/Newsfeed"));

const PrivateRoute = () => {
    return {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <NewsFeed />,
            },
        ],
    };
};

export default PrivateRoute;
