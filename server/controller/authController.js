import asyncHandler from "express-async-handler";
import { User } from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Generate Token
const generateToken = (id) => {
    return jwt.sign(
        {
            id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
    );
};

// Register User
export const registerUser = asyncHandler(async (req, res) => {
    // Deconstruct payload
    const { email, username, name, password } = req.body;

    // Check if all fields are fill up

    if (!email || !username || !name || !password) {
        res.status(403);
        throw new Error("Please enter all fields.");
    }
    // Check if email already registered
    const emailAlreadyRegistered = await User.findOne({ email });
    if (emailAlreadyRegistered) {
        res.status(403);
        throw new Error("Email already registered.");
    }
    // Check if username exist
    const userNameExist = await User.findOne({ username });
    if (userNameExist) {
        res.status(403);
        throw new Error("Username already exist.");
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    // Create User

    const user = await User.create({
        name,
        email,
        username,
        password: hashPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid credentials.");
    }
});

export const loginUser = asyncHandler(async (req, res) => {
    // Deconstruct payload
    const { usernameOrEmail, password } = req.body;

    if (!usernameOrEmail || !password) {
        res.status(400);
        throw new Error("Please enter your login credentials.");
    }
    // check if username or email is registered
    const user =
        (await User.findOne({
            email: usernameOrEmail,
        })) ||
        (await User.findOne({
            username: usernameOrEmail,
        }));
    // If user exist then check if password matches

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid credentials.");
    }
});

export const viewProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        user,
    });
});
