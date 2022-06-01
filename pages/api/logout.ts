import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';
import argon from 'argon2';
import jwt from "jsonwebtoken";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        console.log("Hello");
        res.setHeader("set-cookie", `auth-token=deleted; path=/; samesite=lax;`);
        res.send("Success");
    }

    return res.send(`Invalid method ${req.method}`);

}