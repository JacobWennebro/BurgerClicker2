import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';
import argon from 'argon2';
import jwt from "jsonwebtoken";

const prisma = new PrismaClient;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "POST") {

    const {
      password,
      email
    } = req.body;

    if (!password || !email) {
      res.status(StatusCodes.BAD_REQUEST).send('Route requires username, email and password!');
      return;
    }

    try {

      const User = await prisma.jabweo_User.findUnique({
        where: {
          email
        }
      });

      // Correct password
      if(User && await argon.verify(User.hash, password)) {
        const secret = "test";
        const token = jwt.sign({
          username: User.username
        }, secret);
  
        res.setHeader("set-cookie", `auth-token=${token}; path=/; samesite=lax;`);  
        
        return res.send({
          message: "Success"
        });
      } else return res.send("Invalid user or password");

    } catch (error) {
      console.log(error);
      return res.send(error);
    }


  }

  return res.send(`Invalid method ${req.method}`);

}