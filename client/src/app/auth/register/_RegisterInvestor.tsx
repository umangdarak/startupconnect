"use client";
import { Box,Text, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';


export default function RegisterInvestor() {
    const [phoneNumber,setPhoneNumber]=useState<string>();
    const [email,setEmail]=useState<string>();
    const [password,setPassword]=useState<string>();
    const [fullName,setFullName]=useState<string>();
    const [professionalTitle,setProfessionalTitle]=useState<string>();
    const [company,setCompany]=useState<string>();
    const [location,setLocation]=useState<string>();
    const [professionalBio,setProfessionalBio]=useState<string>();
    const [linkedInProfile,setLinkedInProfile]=useState<string>();
    const [accreditedInvestorStatus,setAccreditedInvestorStatus]=useState<string>();
    const [errors,setErrors]=useState<{    email?: string;
      password?: string;
      phoneNumber?:string;
      fullName?:string;
      professionalTitle?:string;
      company?:string;
      location?:string;
      investmentPreferences?:string;
      professionalBio?:string;
      linkedInProfile?:string;
      pastInvestments?:string;
      accreditedInvestorStatus?:string;
      fetchError?: string;
    }>();

    const validate=()=>{
      const errors:{    email?: string;
        password?: string;
        phoneNumber?:string;
        fullName?:string;
        professionalTitle?:string;
        company?:string;
        location?:string;
        professionalBio?:string;
        linkedInProfile?:string;
        accreditedInvestorStatus?:string;
        fetchError?: string;
      }={}
      if(!email){
        errors["email"]="Email does not exist";
      }else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid";
      }

      if (!password) {
        errors.password = "Password is required";
      } else if (password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }

      if(!phoneNumber) {
        errors.phoneNumber = "Phone Number is required";
      } else if (phoneNumber.length < 11) {
        errors.phoneNumber = "PhoneNumber must be of 10 characters";
      }

      if(!fullName) {
        errors.fullName = "Full Name is required";
      }// else if (fullName.length < 11) {
      //   errors.password = "PhoneNumber must be of 10 characters";
      // }

      if(!professionalTitle) {
        errors.professionalTitle = "Professional Title is required";
      }
      // } else if (professionalTitle.length < 11) {
      //   errors.professionalTitle = "PhoneNumber must be of 10 characters";
      // }

      if(!company) {
        errors.company = "Company Name is required";
      }

      if(!location) {
        errors.location = "Location is required";
      }

      if(!professionalBio) {
        errors.professionalBio = "Professional Bio is required";
      }

      if(!linkedInProfile) {
        errors.linkedInProfile = "LinkedIn Profile is required";
      }

      if(!accreditedInvestorStatus) {
        errors.accreditedInvestorStatus = "Accredited Investor Status is required";
      }

      
      return errors;
    }


  return (<div className='flex justify-center'>
    <Box className='flex flex-col w-screen items-center'>
        <Text>Register!!</Text>
        <Box className='bg-slate-500 w-1/2'>
           
           
            <TextField.Root
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value);}}
            />
            <TextField.Root
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e)=>{setPassword(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='FullName'
            value={fullName}
            onChange={(e)=>{setFullName(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='PhoneNumber'
            value={phoneNumber}
            onChange={(e)=>{setPhoneNumber(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='ProfessionalTitle'
            value={professionalTitle}
            onChange={(e)=>{setProfessionalTitle(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='Company'
            value={company}
            onChange={(e)=>{setCompany(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='Location'
            value={location}
            onChange={(e)=>{setLocation(e.target.value);}}
            />
      
            <TextField.Root
            type='text'
            placeholder='ProfessionalBio'
            value={professionalBio}
            onChange={(e)=>{setProfessionalBio(e.target.value);}}
            />
            <TextField.Root
            type='url'
            placeholder='LinkedInProfile'
            value={linkedInProfile}
            onChange={(e)=>{setLinkedInProfile(e.target.value);}}
            />
            
            <TextField.Root
            type='text'
            placeholder='AccreditedInvestorStatus'
            value={accreditedInvestorStatus}
            onChange={(e)=>{setAccreditedInvestorStatus(e.target.value);}}
            />
         
        </Box>
    </Box>
    </div>
  )
}
