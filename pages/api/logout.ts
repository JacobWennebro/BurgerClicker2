import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        res.setHeader("set-cookie", `auth-token=deleted; path=/; samesite=lax;`);
        return res.send("Success");
    }

    return res.send(`Invalid method ${req.method}`);

}