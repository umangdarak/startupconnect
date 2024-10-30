"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import GlobeDemo from "./_globe/page";

function Home() {
  const router = useRouter();
  const authState = useSelector((state: RootState) => state.auth);

  useEffect(() => {
   
    if (authState.userType === 'Startup') {
      router.push("/dashboardStartup");
    } else if (authState.userType === 'Investor') {
      router.push("/dashboardInvestor");
    }
  }, [authState]);

  if (!authState.authState && !authState.userType) {
    // Show the globe if user is logged in but has no userType yet
    return <GlobeDemo />;
  }

  return null; // Return null when redirecting
}

export default Home;
