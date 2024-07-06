"use client";
import {
  AlertDialog,
  Button,
  Flex,
  Text,
  
} from "@radix-ui/themes";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import TextField from '@mui/material/TextField';
import Link from "next/link";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../login/pages.css'

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [userType, setUserType] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [error, setError] = useState<{
    email?: string;
    password?: string;
    fetchError?: string;
  }>();
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  const validate = () => {
    const errors: { email?: string; password?: string } = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const err = validate();
    setError(err);
    if (Object.keys(err).length === 0) {
      // Handle successful validation
    } else {
      setAlertVisible(true);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      {!showForm ? (
        <motion.div
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: showForm?0:1, scale: 1 }}
          transition={{ duration: 0.5,ease:"linear" }}
          className="flex flex-col justify-center items-center px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 rounded-full"
        ><div className="p-10">
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
            <Button className="button1"
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
          transition={{ duration: 0.3 ,ease:"backIn"}}
          className="flex flex-col justify-center items-center w-1/2"

        >
          
           <div
    className="relative mx-auto w-full   px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <Button onClick={()=>{setUserType("");setShowForm(false);}} className="bg-transparent hover:">
            <ArrowBackIosIcon fontSize="small" sx={{ color: '#141619' }}/>
          </Button>
    <div className="w-full">
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Login</h1>
            {/* <p className="mt-2 text-gray-500">Sign in below to access your account</p> */}
        </div>
        <div className="mt-5">
            
                <div className="relative mt-6">
                    <TextField type="email" required id="outlined-basic" error={error?.email?true:false} name="email"  value={email} placeholder="Email Address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>setEmail(e.target.value)}/>
                {error?.email&&<Text>{error.email}</Text>}
                </div>
              
                <div className="relative mt-6">
                    <TextField required id="outlined-basic" type="password" name="password" error={error?.password?true:false}value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    {error?.password&&<Text>{error.password}</Text>}

                </div>
                
                <div className="my-6">
                    <Button className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none" onClick={handleSubmit}>Login</Button>
                </div>
                <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                    <Link href="/auth/register"
                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Register
                    </Link>.
                </p>
            
        </div>
    </div>
</div>
        </motion.div>
      )}
      {alertVisible && (
        <AlertDialog.Root open={alertVisible}>
          <AlertDialog.Content maxWidth="450px">
            <AlertDialog.Title>Login Unsuccessful</AlertDialog.Title>
            <AlertDialog.Description className="p-4 rounded">
              <Flex className="flex flex-col">
                {error?.email && <Text className="m-2">{error.email}</Text>}
                {error?.password && (
                  <Text className="m-2">{error.password}</Text>
                )}
                {error?.fetchError && (
                  <Text className="m-2">{error.fetchError}</Text>
                )}
              </Flex>
            </AlertDialog.Description>
            <Flex className="flex flex-row justify-center items-center w-full">
              <AlertDialog.Cancel onClick={() => setAlertVisible(false)}>
                <Button variant="soft" color="gray">
                  Ok
                </Button>
              </AlertDialog.Cancel>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      )}
    </div>
  );
}
