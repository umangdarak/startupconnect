"use client";
import { Button, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { userLogin, userLogout } from "@/lib/slices/authSlice";
function Home() {
  const router = useRouter();
  const authState = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!authState.authState) {
      router.push("/auth/login");
    }
  });

  return <div>{JSON.stringify(authState.user)}</div>;
}

export default Home;
