"use client";
import { Box,Text, TextField } from '@radix-ui/themes';
import React, { useState } from 'react'

export default function RegisterInvestor() {
    const [investorId,setInvestorID]=useState<string>();
    const [email,setEmail]=useState<string>();
    const [password,setPassword]=useState<string>();
    const [fullName,setFullName]=useState<string>();
    const [professionalTitle,setProfessionalTitle]=useState<string>();
    const [company,setCompany]=useState<string>();
    const [location,setLocation]=useState<string>();
    const [investmentPreferences,setInvestmentPreferences]=useState<string>();
    const [professionalBio,setProfessionalBio]=useState<string>();
    const [linkedInProfile,setLinkedInProfile]=useState<string>();
    const [pastInvestments,setPastInvestments]=useState<string>();
    const [accreditedInvestorStatus,setAccreditedInvestorStatus]=useState<string>();
    const [createdAt,setCreatedAt]=useState<string>();

  return (
    <Box className='flex flex-col w-screen items-center'>
        <Text>Register!!</Text>
        <Box className='bg-slate-500 w-1/2'>
            <TextField.Root
            type='text'
            placeholder='InvestorID'
            value={investorId}
            onChange={(e)=>{setInvestorID(e.target.value);}}
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
            value={fullName}
            onChange={(e)=>{setFullName(e.target.value);}}
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
            placeholder='InvestmentPreferences'
            value={investmentPreferences}
            onChange={(e)=>{setInvestmentPreferences(e.target.value);}}
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
            placeholder='PastInvestments'
            value={pastInvestments}
            onChange={(e)=>{setPastInvestments(e.target.value);}}
            />
            <TextField.Root
            type='text'
            placeholder='AccreditedInvestorStatus'
            value={accreditedInvestorStatus}
            onChange={(e)=>{setAccreditedInvestorStatus(e.target.value);}}
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
