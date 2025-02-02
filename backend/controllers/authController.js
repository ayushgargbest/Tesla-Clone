const User=require("../models/User");
const registerUser=async(req,res)=>{
    const{name,email,password}=req.body;
    try{
        const userExists=await User.findOne({email});
        if(userExists)
            return res.status(400).json({messaage:"User already exists"});
        const user=new User({name,email,password});
        await User.save();
        res.status(201).json({message:"User registered successfully"});
    }
    catch(error){
        res.status(500).json({messaage:"Server Error"});
    }
}
module.exports={registerUser};