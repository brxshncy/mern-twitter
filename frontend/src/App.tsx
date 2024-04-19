import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Newsfeed } from "./pages/Newsfeed";
import { Register } from "./pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Newsfeed />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
