"use client";
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function Home() {
  const router=useRouter();
  useEffect(()=>{
    router.push('/login');
  },[])
  return (
    <div>Home new text added i made some changes
      
    </div>
  )
}

export default Home