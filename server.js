import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


dotenv.config();

const app = express();
   connectDB();  

const PORT = process.env.PORT;

app.get("/", (req , res)=>{
    res.send("server is running....")
})
app.listen(PORT,()=>{
    console.log(`server is run on ${PORT}`);
})