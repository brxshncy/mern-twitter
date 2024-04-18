import asyncHandler from "express-async-handler";
import { Tweet } from "../model/tweetModel.js";
import { User } from "../model/userModel.js";

export const getTweets = asyncHandler(async (req, res) => {
    const tweets = await Tweet.find().populate("user");
    res.status(200).json({ tweets });
});

export const createTweet = asyncHandler(async (req, res) => {
    // Deconstruct payload
    const { tweet } = req.body;

    if (!tweet) {
        res.status(403);
        throw new Error("Tweet cannot be empty");
    }

    const postedTweet = await Tweet.create({
        tweet,
        user: req.user.id,
    });

    if (postedTweet) {
        res.status(203).json({
            tweet: postedTweet,
        });
    }
});

export const viewTweet = asyncHandler(async (req, res) => {
    const viewedTweet = await Tweet.findById(req.params.id).populate("user");

    if (viewedTweet) {
        res.status(200).json({
            tweet: viewedTweet,
        });
    } else {
        res.status(404);
        throw new Error("Tweet not found");
    }
});

export const updateTweet = asyncHandler(async (req, res) => {
    const tweet = await Tweet.findById(req.params.id);

    if (!tweet) {
        res.status(404);
        throw new Error("Tweet not found");
    }

    const user = await User.findById(req.user.id);

    if (tweet.user.toString() !== user.id) {
        res.status(403);
        throw new Error("Invalid Action");
    }

    const updatedTweet = await Tweet.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );

    res.status(200).json({
        tweet: updatedTweet,
    });
});

export const deleteTweet = asyncHandler(async (req, res) => {
    const deleteTweet = await Tweet.findById(req.params.id);

    if (!deleteTweet) {
        res.status(404);
        throw new Error("Tweet not found");
    }
    const user = await User.findById(req.user.id);

    if (tweet.user.toString() !== user.id) {
        res.status(403);
        throw new Error("Invalid Action");
    }

    await deleteTweet.deleteOne();
    res.status(200).json({
        id: req.params.id,
    });
});
