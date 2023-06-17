const User = require('../models/userModel');



// register a user

exports.registerUser=async(req,res)=>{
   try{
     const {name,email,password}=req.body;
     const user =await User.create({
        name,email,password,
        avatar:{
            public_id:"Sample id",
            url:"sample url"
        }

     })
const token=user.getJWTToken();
     res.status(201).json({
        success:true,
        user,
        token,

     })
   }
   catch(err){
      res.json({error:err})
   }
}