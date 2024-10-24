"use client";
import { AlertDialog, Button, Flex, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, px } from "framer-motion";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import "./pages.css";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "@/lib/slices/authSlice";
import styled from "styled-components";


export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userType, setUserType] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [error, setError] = useState<{
    email?: string;
    password?: string;
    fetchError?: string;
  }>();
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [otpEmailSent, setOtpEmailSent] = useState(false);
  const [otpEmail, setOtpEmail] = useState("");
  const [otpError, setOtpError] = useState("");

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
      try {
        const emailRes = await fetch(`http://localhost:8000/auth/login`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
            userType: userType,
          }),
        });
        if (!emailRes.ok) {
          throw new Error("Failed to send OTP to email");
        }
        const data = await emailRes.json();
        dispatch(
          userLogin({
            user: data.user,
            token: data.token,
            userType: userType,
          })
        );
        router.push("/");
      } catch (error) {
        console.error("Error sending OTP:", error);
        setAlertVisible(true); // Show error alert
      }
    } else {
      setAlertVisible(true); // Show validation errors
    }
  };

  // const handleVerifyOTP = async () => {
  //   try {
  //     const res = await fetch(`http://localhost:8000/auth/verify-otp-email`, {
  //       method: "POST",
  //       headers: { "Content-type": "application/json" },
  //       body: JSON.stringify({ otpEmail }),
  //     });
  //     if (!res.ok) {
  //       throw new Error('OTP verification failed');
  //     }
  //     const data = await res.json();
  //     dispatch(userLogin({
  //       user: data.user,
  //       token: data.token,
  //       userType: userType,
  //     }));
  //     router.push("/");
  //   } catch (error) {
  //     console.error('Error verifying OTP:', error);
  //     setOtpError('OTP verification failed. Please try again.');
  //   }
  // };

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


  return (
    <div className="overflow-hidden">
      {!showForm ? (
        <div className="flex flex-row justify-center items-center" style={{ height: 'calc(100vh - 64px)' }}>

          <motion.div
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: showForm ? 0 : 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="flex flex-col justify-center items-center px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 rounded-full"
          >
          {/* <div className="card">
          <div className="bg"></div>
  <div className="blob"></div> */}
            <div className="p-10 styled">
              <div className=" flex flex-row justify-center items-center">
              <Text className="text-black font">
                Are you an Investor or an Entrepreneur/Startup Company?
              </Text>
              </div>
              <div className="flex flex-row justify-between w-full px-6 mt-8">
                <button
                  className="button4 border-yellow-200 mx-6"
                  onClick={() => {
                    setUserType("Investor");
                    setShowForm(true);
                  }}
                >
                Investor
                </button>
                <button
                  className="button4"
                  onClick={() => {
                    setUserType("Startup");
                    setShowForm(true);
                  }}
                >
                    Entrepreneur/Startup
                </button>
              </div>
              </div>
            {/* </div>
            </div> */}
          </motion.div>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center" style={{ height: 'calc(100vh - 64px)' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "backIn" }}
            className="flex flex-col justify-end items-center w-2/3"
          >
            <div className="flex justify-center items-cneter object-cover w-full h-full bg-white shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl mt-1">
              <div className="w-1/2 h-full flex justify-center">
                {/* <Image
                //   src="/images/login2.png"
                //   alt="Login Image"
                //   width={600}
                //   height={600}
                //   className="h-full w-full object-cover sm:rounded-xl shadow-xl"
                // /> */}
              </div>
              <div className="w-1/2 px-6 pt-10 pb-8">
                <button
                  onClick={() => {
                    setUserType("");
                    setShowForm(false);
                  }}
                  className=" button4"
                >
                  <ArrowBackIosIcon fontSize="small"  />
                </button>
                <div className="w-full items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-3xl font-semibold text-customBlack">
                      Login
                    </h1>
                  </div>
                  <div className="mt-5">
                    <div className="relative mt-6">
                      {/* <TextField
                        type="email"
                        required
                        id="outlined-basic"
                        error={error?.email ? true : false}
                        name="email"
                        value={email}
                        placeholder="Email Address"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e) => setEmail(e.target.value)}
                      /> */}
                      <StyledWrapper>
                      <div className="group">
          
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={1.5}
              stroke="#141B34"
              d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"
            />
            <path
              strokeLinejoin="round"
              strokeWidth={1.5}
              stroke="#141B34"
              d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
            />
          </svg>
          <input
            title="Inpit title"
            className="input"
            type="email"
            id="email_field"
                        required
                        name="email"
                        value={email}
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        </StyledWrapper>
                      {error?.email && <Text className="text-red-600">{error.email}</Text>}
                    </div>
                    <div className="relative mt-6">
                      {/* <TextField
                        type="password"
                        required
                        id="outlined-basic"
                        error={error?.password ? true : false}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      /> */}
                      <StyledWrapper>
      <div className="group">
        <svg
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
        <input className="input" type="password" 
         required
         name="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="Password"
    />
      </div>
    </StyledWrapper>
                      {error?.password && <Text className="text-red-600">{error.password}</Text>}
                    </div>

                    <div className="my-6 flex flex-row justify-center w-full">
                      <button
                        className="button4"
                        onClick={handleSubmit}
                      >
                      Login
                      </button>
                    </div>
                    <p className="text-center text-sm text-gray-500">
                      Don&#x27;t have an account yet?
                      <Link
                        href="/register"
                        className="font-semibold text-gray-600 hover:text-customPurple hover:tracking-wider focus:text-gray-800 focus:outline-none"
                      
                      >
                        Register
                      </Link>

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      {/* {otpEmailSent && (
        <div className="flex flex-col items-center justify-center mt-8">
          <TextField
            id="otpEmail"
            label="Enter OTP sent to your Email"
            variant="outlined"
            value={otpEmail}
            onChange={(e) => setOtpEmail(e.target.value)}
            className="mb-4"
          />
          <Button onClick={handleVerifyOTP}>Verify OTP</Button>
          {otpError && <Text className="mt-2 text-red-500">{otpError}</Text>}
        </div>
      )} */}
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
                <Button variant="soft" className="button4">
                  <Text className="text-white text-lg font-light"> Ok</Text>
                </Button>
              </AlertDialog.Cancel>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      )}
    </div>
  );
}

const StyledWrapper = styled.div`
  .group {
  display: flex;
  line-height: 30px;
  align-items: center;
  position: relative;
  
}

.input_container {
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 5px;
}


.input_field {
  width: auto;
  height: 40px;
  padding: 0 0 0 40px;
  border-radius: 7px;
  outline: none;
  border: 1px solid #e5e5e5;
  filter: drop-shadow(0px 1px 0px #efefef)
    drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.input_field:focus {
  border: 1px solid transparent;
  box-shadow: 0px 0px 0px 2px #242424;
  background-color: transparent;
}



.input {
  width: 100%;
  height: 45px;
  line-height: 30px;
  padding: 0 5rem;
  padding-left: 3rem;
  border: 2px solid transparent;
  border-radius: 10px;
  outline: none;
  background-color: #f8fafc;
  color: #0d0c22;
  transition: .5s ease;
}

.input::placeholder {
  color: #94a3b8;
}

.input:focus, input:hover {
  outline: none;
  border-color: rgba(129, 140, 248);
  background-color: #fff;
  box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: none;
  width: 1rem;
  height: 1rem;
}
`;
