import { Request, Response } from "express";
import Book from "../model/Book";

export const getBooks = async (req: Request, res: Response) => {
    const books = await Book.find();

    return res.json(books);
};
