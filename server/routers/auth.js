const express=require('express');
const Investor=require('../models/investor')
const Router=express.Router();
const bcrypt=require('bcryptjs');
const uid=require('uid')
Router.post('/registerinvestor',(req,res)=>{
    const {email,fullName,password,phoneNumber,professionalTitle,companyOrganization,location,investmentPreferences,professionalBio,linkedInProfile,pastInvestments,accreditedInvestorStatus}=req.body;
    const userExists=Investor.findOne({email:email,fullName:fullName,phoneNumber:phoneNumber});
    if(!userExists){
        try{
        const investorId=uid(16);
        bcrypt.hash(password,10).then((pass)=>{
            const investor=new Investor({
                investorId:investorId,
                fullName:fullName,
                email:email,
                password:pass,
                phoneNumber:phoneNumber,
                professionalTitle:professionalTitle,
                companyOrganization:companyOrganization,
                location:location,
                investmentPreferences:investmentPreferences,
                professionalBio:professionalBio,
                linkedInProfile:linkedInProfile,
                pastInvestments:pastInvestments,
                accreditedInvestorStatus:accreditedInvestorStatus
            });
            investor.save().then(()=>{
                res.state(200).json({"message":"User succesfully created"});
            })
        })}
        catch(e){
            res.state(400).json({"error":e});
        }
    }
    else{
        res.status(400).json({"error":"User Already Exists"});
    }
})


module.exports=Router;