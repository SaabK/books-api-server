import { Request } from "express";
import url from "url";

export function getUrl(req: Request) {
    const URL = url.format({
        protocol: req.protocol,
        host: req.get("host"),
    });

    return URL;
}
