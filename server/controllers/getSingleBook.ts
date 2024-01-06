import { Request, Response } from "express";
import mongoose from "mongoose";
import Book from "../model/Book";
import changeImageURL from "../lib/changeImageURL";

export const getSingleBook = async (req: Request, res: Response) => {
    const {
        params: { id },
    } = req;

    if (!mongoose.isValidObjectId(id))
        return res.json({
            message: "The product doesn't exist :(",
        });

    const thatOneBook = await Book.findById(id);

    if (!thatOneBook) {
        return res.json({
            message: "No such product exists",
        });
    }

    await changeImageURL(thatOneBook, req);

    return res.json(thatOneBook);
};
