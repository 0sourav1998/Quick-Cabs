import dotenv from "dotenv"
dotenv.config();
import express from "express";
import connectToDB from "./db/config.js";
const app = express();
const PORT = process.env.PORT || 4000 ;

import userRoute from "../backend/routes/user.routes.js"

app.use(express.json());

connectToDB();

app.get("/",(req,res)=>{
    res.send("HEllo World")
})


app.use("/api/v1/user",userRoute)


app.listen(PORT,()=>{
    console.log(`App is listening to PORT ${PORT}`)
})
