"use client";
import { Button ,Text} from '@radix-ui/themes';
import React, { useState } from 'react'
import RegisterInvestor from './_RegisterInvestor';
import RegisterStartup from './_RegisterStartup';

export default function Register() {
    const [userType, setUserType] = useState<string>("");

  return (
    <div className='flex flex-row justify-center items-center h-screen'> {userType?.length==0?
        <div className="flex flex-col justify-center items-center border-solid border-customBlack border rounded-full p-10"
        >
           <Text className="text-customBlack font-mono">
             Are you a Investor or an Entrepreneur/Startup Company?
           </Text>
           <div className="flex flex-row justify-between w-full px-6">
           <Button className=" mb-5" onClick={(e)=>setUserType("Investor")}>
             <Text className="text-white font-mono">Investor</Text>
           </Button>
           <Button className="" onClick={(e)=>setUserType("Startup")}>
             <Text className="text-white font-mono">Entrepreneur/Startup</Text>
           </Button></div>
         </div>:userType==="Investor"?<RegisterInvestor />:<RegisterStartup />}</div>
  )
}
