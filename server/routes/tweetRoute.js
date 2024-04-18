import express from "express";
import {
    createTweet,
    deleteTweet,
    getTweets,
    updateTweet,
    viewTweet,
} from "../controller/tweetController.js";
import { protectedRoute } from "../middleware/authMiddleware.js";

const TWEET_ROUTE = express.Router();

TWEET_ROUTE.route("/")
    .get(protectedRoute, getTweets)
    .post(protectedRoute, createTweet);
TWEET_ROUTE.route("/:id")
    .get(protectedRoute, viewTweet)
    .put(protectedRoute, updateTweet)
    .delete(protectedRoute, deleteTweet);

export { TWEET_ROUTE };
