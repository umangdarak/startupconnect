"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "@radix-ui/react-alert-dialog";
import { TextArea, Box, Button, Flex, Text } from "@radix-ui/themes";
import { Responsive } from "@radix-ui/themes/props";

export default function RegisterStartup() {
  const [fullName, setFullName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [companyName, setCompanyName] = useState<string>();
  const [companyDescription, setCompanyDescription] = useState<string>();
  const [industry, setIndustry] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [ideaDescription, setIdeaDescription] = useState<string>();
  const [linkedInProfile, setLinkedInProfile] = useState<string>();
  const [patentApplicationNumbers, setPatentApplicationNumbers] = useState<
    string[]
  >([]);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [emailOtp, setEmailOtp] = useState<string>();
  const [phoneOtp, setPhoneOtp] = useState<string>();
  const [errors, setErrors] = useState<{
    companyName?: string;
    fullName?: string;
    email?: string;
    password?: string;
    phoneNumber?: string;
    industry?: string;
    location?: string;
    companyDescription?: string;
    linkedInProfile?: string;
    patentApplicationNumber?: string;
    fetchError?: string;
    ideaDescription?: string;
    patentApplicationNumbers?: string;
    emailOtp?: string;
    phoneOtp?: string;
  }>();

  const validate = () => {
    const errors: {
      fullName?: string;
      email?: string;
      password?: string;
      phoneNumber?: string;
      companyName?: string;
      companyDescription?: string;
      patentApplicationNumber?: string;
      documents?: string;
      fetchError?: string;
      industry?: string;
      location?: string;
      ideaDescription?: string;
      linkedInProfile?: string;
      patentApplicationNumbers?: string;
      emailOtp?: string;
      phoneOtp?: string;
    } = {};

    if (!fullName) errors.fullName = "Full Name is required";
    if (!email) errors.email = "Email does not exist";
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
    if (!password) errors.password = "Password is required";
    else if (password.length < 6)
      errors.password = "Password must be at least 6 characters";
    if (!phoneNumber) errors.phoneNumber = "Phone Number is required";
    else if (phoneNumber.length !== 10)
      errors.phoneNumber = "Phone Number must be 10 characters";
    if (!industry) errors.industry = "Industry is required";
    if (!location) errors.location = "Location is required";
    if (!companyName) errors.companyName = "companyName is required";

    if (!ideaDescription)
      errors.ideaDescription = "Idea Description is required";
    if (!linkedInProfile)
      errors.linkedInProfile = "LinkedIn Profile is required";
    patentApplicationNumbers.forEach((patent, index) => {
      if (!patent) {
        errors.patentApplicationNumbers = `Patent ID ${index + 1} is required`;
      }
    });

    return errors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      // Simulate sending OTP
      setOtpSent(true);
    } else {
      setAlertVisible(true);
    }
  };
  // const handleOtpRequest = async (type: 'phone' | 'email') => {
  //   try {
  //     const response = await axios.post('/api/request-otp', { type, phoneNumber, email });
  //     if (response.data.success) {
  //       console.log(`${type === 'phone' ? 'Phone' : 'Email'} OTP requested successfully.`);
  //     } else {
  //       console.error(`Failed to request ${type === 'phone' ? 'phone' : 'email'} OTP.`);
  //     }
  //   } catch (error) {
  //     console.error(`Error requesting ${type === 'phone' ? 'phone' : 'email'} OTP:`, error);
  //   }
  // };

  // const handleOtpVerification = async (type: 'phone' | 'email') => {
  //   try {
  //     const otp = type === 'phone' ? phoneOtp : emailOtp;
  //     const response = await axios.post('/api/verify-otp', { type, otp });
  //     if (response.data.success) {
  //       console.log(`${type === 'phone' ? 'Phone' : 'Email'} OTP verified successfully.`);
  //     } else {
  //       console.error(`Failed to verify ${type === 'phone' ? 'phone' : 'email'} OTP.`);
  //     }
  //   } catch (error) {
  //     console.error(`Error verifying ${type === 'phone' ? 'phone' : 'email'} OTP:`, error);
  //   }
  // };

  return (
    <div className="flex flex-col w-screen items-center justify-center p-4 md:p-0">
      <Box className="flex flex-col items-center w-full max-w-3xl">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-customBlack">Register</h1>
        </div>
        <div className="mt-10 w-full bg-white shadow-2xl rounded-lg overflow-hidden">
          <form
            className="py-4 px-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Name"
              >
                Name
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="Name"
                error={errors?.fullName ? true : false}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your Name"
                size="small"
                className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.fullName && <Text>{errors.fullName}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Email"
              >
                Email
              </label>
              <TextField
                type="email"
                required
                id="outlined-basic"
                name="Email"
                error={errors?.email ? true : false}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Mail"
                size="small"
                className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.email && <Text>{errors.email}</Text>}
              <Button variant="soft" onClick={() => {}}>
                Request OTP
              </Button>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="EmailOtp"
                value={emailOtp}
                onChange={(e) => setEmailOtp(e.target.value)}
                placeholder="Enter your OTP"
                size="small"
                className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <Button variant="soft" onClick={() => {}}>
                Verify OTP
              </Button>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Password"
              >
                Password
              </label>
              <TextField
                type="password"
                required
                id="outlined-basic"
                name="Password"
                error={errors?.password ? true : false}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                size="small"
                className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.password && <Text>{errors.password}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Phone Number"
              >
                Phone Number
              </label>
              <TextField
                type="number"
                required
                id="outlined-basic"
                name="Phone Number"
                placeholder="Enter your phone number"
                error={errors?.phoneNumber ? true : false}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                size="small"
                className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.phoneNumber && <Text>{errors.phoneNumber}</Text>}
              <Button variant="soft" onClick={() => {}}>
                Request OTP
              </Button>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="PhoneOtp"
                value={phoneOtp}
                onChange={(e) => setPhoneOtp(e.target.value)}
                placeholder="Enter your OTP"
                size="small"
                className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <Button variant="soft" onClick={() => {}}>
                Verify OTP
              </Button>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Company Name"
              >
                Company Name
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="Company Name"
                placeholder="Enter your company name"
                error={errors?.companyName ? true : false}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                size="small"
                className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.companyName && <Text>{errors.companyName}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Company Size"
              >
                Company Size
              </label>
              <TextField
                type="number"
                required
                id="outlined-basic"
                name="Company Size"
                placeholder="Enter your company size"
                error={errors?.ideaDescription ? true : false}
                value={ideaDescription}
                onChange={(e) => setIdeaDescription(e.target.value)}
                size="small"
                className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.ideaDescription && <Text>{errors.ideaDescription}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Industry"
              >
                Industry
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="Industry"
                placeholder="Enter your industry"
                error={errors?.industry ? true : false}
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                size="small"
                className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.industry && <Text>{errors.industry}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Location"
              >
                Location
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="Location"
                placeholder="Enter your location"
                error={errors?.location ? true : false}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                size="small"
                className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.location && <Text>{errors.location}</Text>}
            </div>

            <div className="mb-4 col-span-2">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Company Description"
              >
                Company Description
              </label>
              <TextArea
                id="outlined-basic"
                name="Company Description"
                placeholder="Enter your company description"
                //error={errors?.companyDescription ? true : false}
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                size={"medium" as Responsive<"1" | "2" | "3">}
                className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.companyDescription && (
                <Text>{errors.companyDescription}</Text>
              )}
            </div>
            <div className="mb-4 col-span-2">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="LinkedIn Profile"
              >
                LinkedIn Profile
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="LinkedIn Profile"
                placeholder="Enter your LinkedIn profile"
                error={errors?.linkedInProfile ? true : false}
                value={linkedInProfile}
                onChange={(e) => setLinkedInProfile(e.target.value)}
                size="small"
                className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.linkedInProfile && <Text>{errors.linkedInProfile}</Text>}
            </div>

            <div className="mb-4 col-span-2">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Patent Application Number"
              >
                Patent Application Number
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="Patent Application Number"
                placeholder="Enter your patent application number"
                error={errors?.patentApplicationNumber ? true : false}
                value={patentApplicationNumbers}
                onChange={(e) =>
                  setPatentApplicationNumbers([
                    ...patentApplicationNumbers,
                    e.target.value,
                  ])
                }
                size="small"
                className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.patentApplicationNumber && (
                <Text>{errors.patentApplicationNumber}</Text>
              )}
            </div>

            <Button
              type="submit"
              className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </Button>
          </form>
        </div>
      </Box>
    </div>
  );
}
