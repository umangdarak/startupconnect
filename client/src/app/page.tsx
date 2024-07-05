"use client";
import { Button ,Text} from '@radix-ui/themes';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { AppDispatch ,RootState} from '@/lib/store';
import { userLogin, userLogout } from '@/lib/slices/authSlice';
function Home() {
  const router=useRouter();
  useEffect(()=>{
    router.push('/auth/login');
  })
  // const dispatch=useDispatch<AppDispatch>();
  // const handle=()=>{
  //   dispatch(userLogin({
  //     user:{'works':false},
  //     token: '1234455'
  //   }))

  // }
  // const handleLogout=()=>{
  //   dispatch(userLogout());
  // }
  // const authstate=useSelector((state:RootState)=>state.auth.token)
  return (
   <div>
    {/* <Button onClick={handle}>
        login
    </Button>
    <Text>{authstate}</Text>
    <Button onClick={handleLogout}>
      logout
    </Button> */}
   </div>
  )
}

export default Home