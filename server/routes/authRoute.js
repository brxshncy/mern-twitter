import express from "express";
import {
    loginUser,
    registerUser,
    viewProfile,
} from "../controller/authController.js";
import { protectedRoute } from "../middleware/authMiddleware.js";

const AUTH_ROUTE = express.Router();

AUTH_ROUTE.post("/login", loginUser);
AUTH_ROUTE.post("/register", registerUser);
AUTH_ROUTE.get("/me", protectedRoute, viewProfile);
export { AUTH_ROUTE };
