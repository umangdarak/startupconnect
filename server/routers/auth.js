const express=require('express');
const Investor=require('../models/investor')
const Startup=require('../models/startup')
const Router=express.Router();
const bcrypt=require('bcryptjs');
const uid=require('uid');
const jwt=require('jsonwebtoken');
Router.post('/login',async(req,res)=>{
    const {email,password,userType}=req.body;
    try{
        if(userType==='Investor'){
            const investor=await Investor.findOne({email:email});
            if(investor){
                bcrypt.compare(password,investor.password,((err,valid)=>{
                    if (err) {
                        return res.status(500).json({ error: "Error comparing passwords" });
                      }
                      if(valid){
                        const token = jwt.sign({ user:investor }, process.env.privatekey,{"expiresIn":"3h"});
                        res.status(200).json({"message":"Login Succesful",token:token,user:investor});
                      }
                }));
            }else{
                res.status(400).json({"error":"User does not exist"});
            }
        }else if(userType==='Startup'){
            const startup=await Startup.findOne({email:email});
            if(startup){
                bcrypt.compare(password,startup.password,((err,valid)=>{
                    if (err) {
                        return res.status(500).json({ error: "Error comparing passwords" });
                      }
                      if(valid){
                        const token = jwt.sign({ user:startup }, process.env.privatekey,{"expiresIn":"3h"});
                        res.status(200).json({"message":"Login Succesful",token:token,user:startup});
                      }
                }));
            }else{
                res.status(400).json({"error":"User does not exist"});
            }

        }else{
            res.status(400).json({"error":"Invalid UserType"});
        }
    }
    catch(e){
        res.status(400).json({"error":e.message})
    }
})

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) return res.sendStatus(401);
  
    jwt.verify(token, process.env.privatekey, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };
  
  // Protected route
  Router.get('/api/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
  });
  



Router.post('/registerinvestor',async (req,res)=>{
    const {email,fullName,password,phoneNumber,professionalTitle,companyOrganization,location,professionalBio,linkedInProfile,accreditedInvestorStatus}=req.body;
    const userExists=await Investor.findOne({email:email,fullName:fullName,phoneNumber:phoneNumber});
    if(!userExists){
        try{
        const investorId=uid.uid(16);
        const date= Date.now();
        bcrypt.hash(password,10).then(async(pass)=>{
            const investor=new Investor({
                investorId:investorId,
                fullName:fullName,
                email:email,
                password:pass,
                phoneNumber:phoneNumber,
                professionalTitle:professionalTitle,
                companyOrganization:companyOrganization,
                location:location,
                professionalBio:professionalBio,
                linkedInProfile:linkedInProfile,
                accreditedInvestorStatus:accreditedInvestorStatus,
                createdAt:date
            });
            
            await investor.save().then(()=>{
                res.status(200).json({"message":"User succesfully created"});
            });
        })
        
    }
        catch(e){
            res.status(400).json({"error":e.message});
        }
    }
    else{
        res.status(400).json({"error":"User Already Exists"});
    }
});
Router.post('/registerstartup',(req,res)=>{
    
})


module.exports=Router;