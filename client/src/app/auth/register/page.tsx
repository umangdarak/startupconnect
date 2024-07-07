"use client";
import { Button, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import RegisterInvestor from "./_RegisterInvestor";
import RegisterStartup from "./_RegisterStartup";
import { motion } from "framer-motion";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { RootState } from "@/lib/store";
import router from "next/router";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";


export default function Register() {
  const [userType, setUserType] = useState<string>("");
  const router=useRouter();
  const [showForm, setShowForm] = useState<boolean>(false);
  const authState = useSelector((state: RootState) => state.auth);
  useEffect(()=>{
    if(authState.authState){
      router.push("/");
    }
  })
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      {" "}
      {!showForm ? (
        <motion.div
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: showForm ? 0 : 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="flex flex-col justify-center items-center px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 rounded-full"
        >
          <div className="p-10">
            <Text className="text-customBlack">
              Are you an Investor or an Entrepreneur/Startup Company?
            </Text>
            <div className="flex flex-row justify-between w-full px-6 mt-8">
              <Button
                className="button1"
                onClick={() => {
                  setUserType("Investor");
                  setShowForm(true);
                }}
              >
                <Text className="text-customBlack">Investor</Text>
              </Button>
              <Button
                className="button1"
                onClick={() => {
                  setUserType("Startup");
                  setShowForm(true);
                }}
              >
                <Text className="text-customBlack">Entrepreneur/Startup</Text>
              </Button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "backIn" }}
          className="flex flex-col items-center h-screen"
        ><div className="flex flex-row items-start w-1/2 justify-self-center ">
           <Button onClick={()=>{setUserType("");setShowForm(false);}} className="bg-transparent button1">
            <ArrowBackIosIcon fontSize="small" sx={{ color: '#141619' }}/>
          </Button>
          
          </div>
          {userType === "Investor" ? (
            <div>
              <RegisterInvestor />
            </div>
          ) : (
            <div>
              <RegisterStartup />
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
