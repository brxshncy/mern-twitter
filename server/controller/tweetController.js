import asyncHandler from "express-async-handler";

export const getTweets = asyncHandler(async (req, res) => {
    res.json({
        message: "GET TWEET",
    });
});

export const createTweet = asyncHandler(async (req, res) => {
    res.json({
        message: "TWEET",
    });
});

export const viewTweet = asyncHandler(async (req, res) => {
    res.json({
        message: "VIEW TWEET",
    });
});

export const updateTweet = asyncHandler(async (req, res) => {
    res.json({
        message: "UPDATE TWEET",
    });
});

export const deleteTweet = asyncHandler(async (req, res) => {
    res.json({
        message: "DELETE TWEET",
    });
});
