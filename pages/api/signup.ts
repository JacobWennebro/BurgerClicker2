import { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from 'http-status-codes';
import { PrismaClient } from '@prisma/client';
import argon from 'argon2';
import jwt from "jsonwebtoken";

const prisma = new PrismaClient;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if(req.method === "POST") {

    const {
      username,
      password,
      email
    } = req.body;

    if(!username || !password || !email) {
      res.status(StatusCodes.BAD_REQUEST).send('Route requires username, email and password!');
      return;
    }

    try {

      const User = await prisma.user.create({
        data: {
          username,
          email,    
          hash: await argon.hash(password)
        }
      });

      /* @ts-ignore */
      delete User.hash;

      const secret = "test";

      return res.send({
        token: jwt.sign({
          username
        }, secret)
      });

    } catch(error) {
      return res.send(error);
    }

  }

  return res.send(`Invalid method ${req.method}`);
}