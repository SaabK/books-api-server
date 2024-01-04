import { Router } from "express";
import { getBooks } from "../controllers/getAllBooks";

const router = Router();

router.get("/", getBooks);

export default router;
