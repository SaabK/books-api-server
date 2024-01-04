import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.MONGO_URI as string;

export default async () => {
    mongoose
        .connect(URL)
        .then(() => console.log("Connected To Mongo successfully"))
        .catch((err) => console.log(err));
};
