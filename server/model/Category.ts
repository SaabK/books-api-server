import { Schema, Types, model } from "mongoose";

const categorySchema = new Schema({
    name: String,
    books: [
        {
            type: Schema.Types.ObjectId,
            ref: "Book",
        },
    ],
});

export default model("Category", categorySchema);
