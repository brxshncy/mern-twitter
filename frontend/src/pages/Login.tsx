import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Login = () => {
    const { user } = useSelector((state: RootState) => state.auth);

    return <div>Login</div>;
};

export default Login;
