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
    if (authState.authState) {
      router.push("/");
    }
  });

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
            <div className="p-10">
              <Text className="text-customBlack">
                Are you an Investor or an Entrepreneur/Startup Company?
              </Text>
              <div className="flex flex-row justify-between w-full px-6 mt-8">
                <Button
                  className="button1 text-white"
                  onClick={() => {
                    setUserType("Investor");
                    setShowForm(true);
                  }}
                >
                  <Text className="text-white text-lg font-light">Investor</Text>
                </Button>
                <Button
                  className="button1"
                  onClick={() => {
                    setUserType("Startup");
                    setShowForm(true);
                  }}
                >
                  <Text className="text-white text-lg font-light">
                    Entrepreneur/Startup
                  </Text>
                </Button>
              </div>
            </div>
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
                <Image
                  src="/images/login2.png"
                  alt="Login Image"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover sm:rounded-xl shadow-xl"
                />
              </div>
              <div className="w-1/2 px-6 pt-10 pb-8">
                <Button
                  onClick={() => {
                    setUserType("");
                    setShowForm(false);
                  }}
                  className="bg-transparent button1"
                >
                  <ArrowBackIosIcon fontSize="small" sx={{ color: "#FFFFFF" }} />
                </Button>
                <div className="w-full items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-3xl font-semibold text-customBlack">
                      Login
                    </h1>
                  </div>
                  <div className="mt-5">
                    <div className="relative mt-6">
                      <TextField
                        type="email"
                        required
                        id="outlined-basic"
                        error={error?.email ? true : false}
                        name="email"
                        value={email}
                        placeholder="Email Address"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {error?.email && <Text>{error.email}</Text>}
                    </div>
                    <div className="relative mt-6">
                      <TextField
                        type="password"
                        required
                        id="outlined-basic"
                        error={error?.password ? true : false}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {error?.password && <Text>{error.password}</Text>}
                    </div>

                    <div className="my-6 flex flex-row justify-center w-full">
                      <Button
                        className="button1 rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                        onClick={handleSubmit}
                      >
                        <Text className="text-white text-lg font-light">
                          Login
                        </Text>
                      </Button>
                    </div>
                    <p className="text-center text-sm text-gray-500">
                      Don&#x27;t have an account yet?
                      <Link
                        href="/auth/register"
                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                      >
                        Register
                      </Link>
                      .
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
                <Button variant="soft" className="button1">
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

