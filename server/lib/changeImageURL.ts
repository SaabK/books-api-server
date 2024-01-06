import { Request } from "express";
import { getUrl } from "./constants";

export default async (book: any, req: Request) => {
    const url = getUrl(req);

    book.image = `${url}${book.image}`;
};
