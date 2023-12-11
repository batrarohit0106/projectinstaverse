import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import storyRoutes from "./routes/stories.js";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
const app=express();
dotenv.config();
app.use(bodyParser.json({limit:"32mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"32mb",extended:true}));
app.use(cors());

app.use("/stories",storyRoutes);
app.use("/user",userRoutes);

const MONGO_URI="mongodb+srv://snapy:GOHARDWORKme11@cluster0.mpu2bhw.mongodb.net/?retryWrites=true&w=majority";
const PORT=process.env.PORT||5001;

const connectDB=async()=>{
    try{
        await mongoose.connect(MONGO_URI);
        app.listen(PORT,()=>console.log(`Server Running on Port: ${PORT}`));
    }
    catch(err){
        console.log("Error in Connection");
    }
}
connectDB();

mongoose.connection.on("open",()=>console.log("Connection Estabilished"));


