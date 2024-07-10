"use client";
import { Box,Text, TextField } from '@radix-ui/themes';
import React, { useState } from 'react'
import '../register/pages.css';

export default function RegisterStartup() {
    const [phoneNumber,setPhoneNumber]=useState<string>();
    const [email,setEmail]=useState<string>();
    const [password,setPassword]=useState<string>();
    const [companyName,setCompanyName]=useState<string>();
    const [registrationNo,setRegistrationNo]=useState<string>();
    const [industry,setIndustry]=useState<string>();
    const [location,setLocation]=useState<string>();
    const [contactPerson,setContactPerson]=useState<string>();
    const [companyDescription,setCompanyDescription]=useState<string>();
    const [linkedInProfile,setLinkedInProfile]=useState<string>();
    const [missionStatement,setMissionStatement]=useState<string>();
    const [revenue,setRevenue]=useState<string>();
    const [patentApplicationNumber,setpatentApplicationNumber]=useState<string>();
    const [documents,setDocuments]=useState<string>();
    const [createdAt,setCreatedAt]=useState<string>();
    const [errors,setErrors]=useState<{    email?: string;
      password?: string;
      phoneNumber?:string;
      companyName?:string;
      registrationNo?:string;
      industry?:string;
      location?:string;
      contactPerson?:string;
      companyDescription?:string;
      linkedInProfile?:string;
      missionStatement?:string;
      revenue?:string;
      patentApplicationNumber?:string;
      documents?:string;
      fetchError?: string;
    }>();

    const validate=()=>{
      const errors:{    email?: string;
        password?: string;
        phoneNumber?:string;
        companyName?:string;
        registrationNo?:string;
        industry?:string;
        location?:string;
        contactPerson?:string;
        companyDescription?:string;
        linkedInProfile?:string;
        missionStatement?:string;
        revenue?:string;
        patentApplicationNumber?:string;
        documents?:string;
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

      // if(!companyName) {
      //   errors.companyName = "Company Name is required";
      // }// else if (fullName.length < 11) {
      //   errors.password = "PhoneNumber must be of 10 characters";
      // }

      // if(!registrationNo) {
      //   errors.registrationNo = "Registration Number is required";
      // }
      // } else if (professionalTitle.length < 11) {
      //   errors.professionalTitle = "PhoneNumber must be of 10 characters";
      // }

      if(!industry) {
        errors.industry = "Industry is required";
      }

      if(!location) {
        errors.location = "Location is required";
      }

      if(!contactPerson) {
        errors.contactPerson = "Contact Person is required";
      }

      // if(!companyDescription) {
      //   errors.companyDescription = "Company Description is required";
      // }

      if(!linkedInProfile) {
        errors.linkedInProfile = "LinkedIn Profile is required";
      }

      // if(!missionStatement) {
      //   errors.missionStatement = "Mission Statement is required";
      // }

      // if(!revenue) {
      //   errors.revenue = "Revenue is required";
      // }

      if(!patentApplicationNumber) {
        errors.patentApplicationNumber = "Patent Application Number is required";
      }

      // if(!documents) {
      //   errors.documents = "Document is required";
      // }

      
      return errors;
    }


  return (
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
            placeholder='PhoneNumber'
            value={phoneNumber}
            onChange={(e)=>{setPhoneNumber(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='FullName'
            value={companyName}
            onChange={(e)=>{setCompanyName(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='ProfessionalTitle'
            value={registrationNo}
            onChange={(e)=>{setRegistrationNo(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='Company'
            value={industry}
            onChange={(e)=>{setIndustry(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='Location'
            value={location}
            onChange={(e)=>{setLocation(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='InvestmentPreferences'
            value={contactPerson}
            onChange={(e)=>{setContactPerson(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='ProfessionalBio'
            value={companyDescription}
            onChange={(e)=>{setCompanyDescription(e.target.value);}}
            />
            <TextField.Root
            type='url'
            placeholder='LinkedInProfile'
            value={linkedInProfile}
            onChange={(e)=>{setLinkedInProfile(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='PastInvestments'
            value={missionStatement}
            onChange={(e)=>{setMissionStatement(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='AccreditedInvestorStatus'
            value={revenue}
            onChange={(e)=>{setRevenue(e.target.value);}}
            />
            <TextField.Root
            type='date'
            placeholder='PatentApplicationNumber'
            value={patentApplicationNumber}
            onChange={(e)=>{setpatentApplicationNumber(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='Documents'
            value={documents}
            onChange={(e)=>{setDocuments(e.target.value);}}
            />
            <TextField.Root
            type='datetime-local'
            placeholder='CreatedAt'
            value={createdAt}
            onChange={(e)=>{setCreatedAt(e.target.value);}}
            />
        </Box>
    </Box>
  )
}
