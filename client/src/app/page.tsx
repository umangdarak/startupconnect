"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import {  RootState } from "@/lib/store";
function Home() {
  const router = useRouter();
  const authState = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!authState.authState) {
      router.push("/login");
    }else if(authState.userType=='Startup'){
      router.push("/dashboardStartup");
    }else{
      router.push('/dashboardInvestor');
    }
  },[authState]);

  return null;
}

export default Home;
