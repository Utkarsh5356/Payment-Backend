const express=require('express');
const jwt=require('jsonwebtoken');
const router=express.Router();
const {users,account}=require('../database/db')
const {addUser,checkUser,updateUser}=require('../Type/types')
const JwtSecret=require('../config');
const authMiddleware = require('../Middleware/auth');
router.post("/SignUp",async (req,res)=>{
  const User=req.body;
    const parseUsers=addUser.safeParse(User);
    if(!parseUsers.success) return res.status(411).json({msg:"Your input is invalid"})
    const userExist=await users.findOne({UserName:req.body.UserName})
    if(userExist) return res.status(411).json({msg:"Email_Id is already Taken"})
    const createUser=await users.create({
      UserName:User.UserName,
      FirstName:User.FirstName,
      LastName:User.LastName,
      Password:User.Password
   })
   const userId=createUser._id;
   await account.create({
    userId,
    balance: 1 + Math.random() * 10000
   })
   const token=jwt.sign({userId},JwtSecret)
   res.json({
    msg:"User SignUp Successfull",
    token:token
   })
})
router.post("/SignIn",async (req,res)=>{
    const User=req.body;
    const {success}=checkUser.safeParse(User);
    if(!success) return res.status(411).json({msg:"Incorrect Inputs"})
    const check=await users.findOne({
        UserName:User.UserName,
        Password:User.Password
    })
    if(!check){
     return  res.status(411).json({msg:"Error while logging in"})
    } 
    const token=jwt.sign({userId:check._id},JwtSecret);
    res.json({Token:token})
    
})
router.put("/",authMiddleware,async (req,res)=>{
  const {success}=updateUser.safeParse(req.body);
  if(!success) return res.status(411).json({msg:"Error while updating information"});
  await users.updateOne(
    {_id:req.userId},
    {$set:req.body}
  ) 
  res.json({msg:"Updated Successfully"})
})
router.get("/search",async (req,res)=>{
const filter=req.query.filter || ""
const User=await users.find({
  $or:[{
    FirstName:{$regex:filter,$options:"i"}
  },{
    LastName:{$regex:filter,$options:"i"}
  }]
})
res.json({
  Users:User.map((data)=>({
    UserName:data.UserName,
    FirstName:data.FirstName,
    LastName:data.LastName,
    id:data._id
  }))
})
})
module.exports=router;