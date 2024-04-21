import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { isAuthenticated } from "./utils/authUtils";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const router = createBrowserRouter([
    isAuthenticated ? PrivateRoute() : {},
    ...PublicRoute(),
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
