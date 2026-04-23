import express from 'express'
import { connectDb } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors'
import { employeeRouter } from './routes/employeeRoutes.js';
import { authRouter } from './routes/authRoutes.js';
dotenv.config()

const app = express();
app.use(express.json());
app.use(cors())

await connectDb();

//Routes
app.use("/api/employees", employeeRouter)
app.use("/api/authRoutes", authRouter)
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`)
})