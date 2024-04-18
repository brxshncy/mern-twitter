import mongoose from "mongoose";

const tweetSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        tweet: {
            type: String,
            required: [true, "Please add a tweet"],
        },
    },
    {
        timestamps: true,
    }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
