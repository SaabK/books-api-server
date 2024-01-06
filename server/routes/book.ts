import { Router } from "express";
import { getBooks } from "../controllers/getAllBooks";
import { getSingleBook } from "../controllers/getSingleBook";
import { getCategories } from "../controllers/getCategories";
import { getCategory } from "../controllers/getCategory";

const router = Router();

router.get("/", getBooks);
router.get("/categories", getCategories);
router.get("/:id", getSingleBook);
router.get("/category/:categoryId", getCategory);

export default router;
