// https://brand-nft-gamma.vercel.app/
import express from "express";
const app = express();
// Importing library
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

const PORT = process.env.PORT || 5000;

// cors ---------------
app.use(cors());


dotenv.config();
app.use(express.json());
app.use(cookieParser());

// Mongoose connection
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connection successful")
}).catch((error)=>{
    console.log("No connection")
})

import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import nftRoute from "./routes/nft.js";
import collectionRoute from "./routes/collection.js";
import sliderRoute from "./routes/slider.js";

// Routes
app.use("/auth",authRoute);
app.use("/user",userRoute);
app.use("/nft",nftRoute);
app.use("/collection",collectionRoute);
app.use("/slider",sliderRoute);

app.listen(PORT,()=>{
    console.log("Server is running at port no 5000");
})