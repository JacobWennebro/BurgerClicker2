import { NextApiRequest, NextApiResponse } from 'next'
import { Server } from 'socket.io'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // @ts-ignore
    if (!res.socket.server.io) {
        console.log('*First use, starting socket.io')

        // @ts-ignore
        console.log(res.socket.server);

        // @ts-ignore
        const io = new Server(res.socket.server)

        io.on('connection', socket => {
            console.log("REE");

            socket.on('game-click', data => {
                console.log(data);
            });
        });

        // @ts-ignore
        res.socket.server.io = io
    } else {
        console.log('socket.io already running')
    }
    res.end()
}

export const config = {
    api: {
        bodyParser: false
    }
}