import express from "express";
import dotenv from "dotenv";
import { AUTH_ROUTE } from "./routes/authRoute.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import colors from "colors";
import { connectDB } from "./config/db.js";
import { TWEET_ROUTE } from "./routes/tweetRoute.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use("/api/user", AUTH_ROUTE);
app.use("/api/tweets", TWEET_ROUTE);
app.use(errorMiddleware);
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
