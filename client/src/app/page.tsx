"use client";
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function Home() {
  const router=useRouter();
  useEffect(()=>{
    router.push('/auth/login');
  })
  return (
   <></>
  )
}

export default Home