const express=require('express');
const {account}=require("../database/db");
const authMiddleware=require("../Middleware/auth");
const { default: mongoose } = require('mongoose');
const {transfer}=require("../Type/types")
const router=express.Router();

router.post("/balance",authMiddleware,async (req,res)=>{
    const Account=await account.findOne({
        userId:req.userId
    })
    res.json({
        balance:Account.balance
    })
})
router.post("/transaction",authMiddleware,async (req,res)=>{
    const session=await mongoose.startSession();
    session.startTransaction();
    const {amount,to}=req.body;
    const {success}=transfer.safeParse(req.body)
    if(!success) return res.status(411).json({msg:"Invalid Inputs"})
    const Account=await account.findOne({
        userId:req.userId,    
    }).session(session);
    if(!Account || Account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
          msg:"Insufficient balance"
        })
    }
    const toAccount=await account.findOne({
        userId:to
    }).session(session);
    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            msg:"Invalid account"
        })
    }

    await account.updateOne(
        {userId:req.userId},
        {$inc:{balance:-amount}}
    ).session(session);
    await account.updateOne(
        {userId:to},
        {$inc:{balance:amount}}
    ).session(session)

    await session.commitTransaction();
    res.json({
        msg:"Transaction Successfull"
    })
})
module.exports=router