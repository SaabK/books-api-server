import { Request, Response } from "express";
import Category from "../model/Category";

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Category.find().populate("books");

        return res.json(categories);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};
