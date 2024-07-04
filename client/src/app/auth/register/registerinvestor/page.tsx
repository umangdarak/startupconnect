"use client";
import { Box,Text, TextField } from '@radix-ui/themes';
import React, { useState } from 'react'

export default function RegisterInvestor() {
    const [email,setEmail]=useState<string>();
    const [password,setPassword]=useState<string>();
  return (
    <Box className='flex flex-col w-screen items-center'>
        <Text>Register!!</Text>
        <Box className='bg-slate-500 w-1/2'>
            <TextField.Root
            type='email'
            placeholder='Email'
            onChange={(e)=>{setEmail(e.target.value);}}
            />
            <TextField.Root
            type="password"
            />
        </Box>
    </Box>
  )
}
