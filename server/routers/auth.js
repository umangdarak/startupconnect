const express=require('express');

const Router=express.Router();

Router.get('/login',(req,res)=>{
    res.json("GET Request");
    res.end();
});


module.exports=Router;