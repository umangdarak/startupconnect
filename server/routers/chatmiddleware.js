const express=require('express')
const Router=express.Router();


Router.post("/messages",async(req,res)=>{
    const {senderId,receiverId}=req.body;
    
})

Router.post("/updateMessages",async(req,res)=>{
    const {senderId,receiverId,message}=req.body;
})