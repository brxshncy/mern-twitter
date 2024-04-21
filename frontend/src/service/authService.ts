import axios from "axios";
const USER_API_URL = "/api/user";

const register = async (userData) => {
    const response = await axios.post(`${USER_API_URL}/register`, userData);
    console.log(response);
};

const authService = {
    register,
};
export default authService;
