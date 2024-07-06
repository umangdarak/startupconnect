const express=require('express');
const Investor=require('../models/investor')
const Startup=require('../models/startup')
const Router=express.Router();
const bcrypt=require('bcryptjs');
const uid=require('uid');
const { json } = require('body-parser');

Router.post('/login',async(req,res)=>{
    const {email,password,userType}=req.body;
    try{
        if(userType==='Investor'){
            const investor=await Investor.findOne({email});
            if(investor){

            }else{
                
            }
        }else if(userType==='Startup'){

        }else{
            res.status(400).json({"error":"Invalid UserType"});
        }
    }
    catch(e){
        res.status(400).json({"error":e.message})
    }
})




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
Router.post('/registerstartup',async (req,res)=>{
    const {fullName,email,password,phoneNumber,companyName,patentApplicationNumber,industry,companySize,location,contactPerson,companyDescription,linkedInProfile,revenue}=req.body;
    const userExists=await Startup.findOne({email:email,fullName:fullName,phoneNumber:phoneNumber});
    if(!userExists){
        try{
        const startupId=uid.uid(16);
        const date= Date.now();
        bcrypt.hash(password,10).then(async(pass)=>{
            const startup=new Startup({
                startupId:startupId,
                fullName:fullName,
                email:email,
                password:pass,
                phoneNumber:phoneNumber,
                companyName:companyName,
                patentApplicationNumber:patentApplicationNumber,
                industry:industry,
                companySize:companySize,
                location:location,
                contactPerson:contactPerson,
                companyDescription:companyDescription,
                linkedInProfile:linkedInProfile,
                revenue:revenue,
                createdAt:date
            });
            
            await startup.save().then(()=>{
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

    
})


module.exports=Router;