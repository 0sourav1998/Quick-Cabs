import dotenv from "dotenv"
dotenv.config();
import express from "express";
import connectToDB from "./db/config.js";

import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 4000 ;

import userRoute from "../backend/routes/user.routes.js"
import captainRoute from "../backend/routes/captain.routes.js"

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser())

connectToDB();


app.use("/api/v1/user",userRoute)
app.use("/api/v1/captain",captainRoute)



app.listen(PORT,()=>{
    console.log(`App is listening to PORT ${PORT}`)
})
