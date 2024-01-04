import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
    name: String,
    description: String,
    stock: Number,
    price: Number,
    ratings: Number,
    category: String,
    author: {
        name: String,
        about: String,
    },
});

export default mongoose.model("Book", bookSchema);
