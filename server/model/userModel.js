import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a name"],
        },
        username: {
            type: String,
            required: [true, "Please add an username."],
        },
        email: {
            type: String,
            required: [true, "Please add an email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please add a password"],
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model("User", userSchema);
