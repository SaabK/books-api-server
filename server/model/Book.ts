import mongoose, { Schema } from "mongoose";

export const bookSchema = new Schema({
    name: String,
    description: String,
    stock: Number,
    price: Number,
    ratings: Number,
    category: String,
    image: String,
    author: {
        name: String,
        about: String,
    },
});

export default mongoose.model("Book", bookSchema);
