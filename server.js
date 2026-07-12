import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";


dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use(express.json());
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);
app.use(errorHandler);
   connectDB();  

const PORT = process.env.PORT;

app.get("/", (req , res)=>{
    res.send("server is running....")
})
app.listen(PORT,()=>{
    console.log(`server is run on ${PORT}`);
})