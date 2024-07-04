"use client";
import { Box,Text, TextField } from '@radix-ui/themes';
import React, { useState } from 'react'

export default function RegisterInvestor() {
    const [startUpID,setStartUpID]=useState<string>();
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
    const [verificationDate,setVerificationDate]=useState<string>();
    const [documents,setDocuments]=useState<string>();
    const [createdAt,setCreatedAt]=useState<string>();

  return (
    <Box className='flex flex-col w-screen items-center'>
        <Text>Register!!</Text>
        <Box className='bg-slate-500 w-1/2'>
            <TextField.Root
            type='text'
            placeholder='StartUpID'
            value={startUpID}
            onChange={(e)=>{setStartUpID(e.target.value);}}
            />
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
            placeholder='VerificationDate'
            value={verificationDate}
            onChange={(e)=>{setVerificationDate(e.target.value);}}
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
