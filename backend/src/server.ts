import http from 'http';
import app from './app';
import { connectRedis } from './database/redis';
import { initializeWebSocket } from './websockets/socket.server';
const PORT = process.env.PORT!;

async function startServer(){
    try {
        await connectRedis();
        console.log("Redis is Connected !");

        const server = http.createServer(app);
        initializeWebSocket(server);

        server.listen(PORT,()=>{
            console.log(`🚀 Server Running On Port ${PORT}`);
        })
        
    } catch (error) {
        console.error("❌ Startup Failed:", error);
    }
}

startServer();