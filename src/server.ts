
import { Server } from "http"
import express from "express"
import { connectAndSync } from "./config/db";
import app from "./app";

let server: Server;
const PORT = process.env.PORT || 5000;

( async () => {
    try {
        await connectAndSync();

        app.listen(PORT, () => {
            console.log(`🚀 Server is Running on http://localhost:${PORT}`);
        })
    } catch (error) {
        console.error("❌ Failed To Start Server: ", error);
        process.exit(1);
    }
})()