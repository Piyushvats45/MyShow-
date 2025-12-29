import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"


const app = express();
const port = 3000;

await connectDB()

// Allow multiple origins
// const allowedOrigins = ['http://localhost:5173']

// MiddleWare configuration
app.use(express.json())
// app.use(cookieParser())
app.use(cors())
app.use(clerkMiddleware())

// API Routes
app.get('/', (req,res) => res.send("Only Backend is deployed"));
app.use('/api/inngest', serve({ client: inngest, functions }))

app.listen(port, ()=> {
    console.log(`server is running on http://localhost:${port}`)
})
