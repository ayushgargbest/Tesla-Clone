const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const connectDB=require("./config/db");
const authRoutes=require("./routes/authRoutes");
dotenv.config();
connectDB();
const app=express();

//Middleware
app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoutes);

//Routes
app.get("/",(req,res)=>{
    res.send("API is running");
});

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));