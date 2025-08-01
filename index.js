import express from "express";
import cors from "cors";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
import router from "./routes/doctor.js";

const app = express();
connectDB();
dotenv.config();
app.use(cors());

app.use(express.json());

app.use("/doctor", router);


app.listen(3001, ()=>{
    console.log("Server is running on port 3001");
})