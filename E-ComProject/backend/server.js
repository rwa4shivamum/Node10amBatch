import { connectDB } from './config/db.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { routes } from './routes/routes.js';
dotenv.config();

var app = express();

app.use(express.json());
app.use(cors());

await connectDB();


const PORT = process.env.PORT;
app.use("/api/v1", routes)
app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})