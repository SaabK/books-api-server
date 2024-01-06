import { Request, Response } from "express";
import Book from "../model/Book";
import changeImageURL from "../lib/changeImageURL";

export const getBooks = async (req: Request, res: Response) => {
    const {
        query: { limit = 30, q },
        query,
    } = req;

    let books = [];

    try {
        if (limit) {
            books = await Book.find({}, "", {
                limit: Number(limit),
            });
        } else if (q) {
            books = await Book.find({
                name: {
                    $regex: `^${q}`,
                    $options: "i",
                },
            });
        } else {
            books = await Book.find();
        }

        books.map((book) => {
            changeImageURL(book, req);
        });

        return res.status(200).json(books);
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
