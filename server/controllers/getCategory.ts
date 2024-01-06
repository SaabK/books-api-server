import { Request, Response } from "express";
import Category from "../model/Category";

export const getCategory = async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    console.log(categoryId);

    try {
        const category = await Category.findById(categoryId).populate("books");

        if (!category)
            return res
                .status(404)
                .json({ message: "Couldn't find that category" });

        return res.json(category);
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
