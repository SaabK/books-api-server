import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./db/db";
import dotenv from "dotenv";

dotenv.config();

import books from "./routes/book";

const app = express();
const port = 3000;

connectDB();

app.use(cors());
app.use(express.static("public"));

// Routes
app.use("/books", books);

app.get("/", (req: Request, res: Response) => res.send("Hello World!"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
