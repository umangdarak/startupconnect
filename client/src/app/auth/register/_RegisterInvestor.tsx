"use client";
import { TextField } from "@mui/material";
import { AlertDialog, Box, Button, Flex, Text } from "@radix-ui/themes";
import React, { useState } from "react";

export default function RegisterInvestor() {
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [fullName, setFullName] = useState<string>();
  const [professionalTitle, setProfessionalTitle] = useState<string>();
  const [company, setCompany] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [professionalBio, setProfessionalBio] = useState<string>();
  const [linkedInProfile, setLinkedInProfile] = useState<string>();
  const [accreditedInvestorStatus, setAccreditedInvestorStatus] =
    useState<string>();
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    phoneNumber?: string;
    fullName?: string;
    professionalTitle?: string;
    company?: string;
    location?: string;
    investmentPreferences?: string;
    professionalBio?: string;
    linkedInProfile?: string;
    pastInvestments?: string;
    accreditedInvestorStatus?: string;
    fetchError?: string;
  }>();

  const validate = () => {
    const errors: {
      email?: string;
      password?: string;
      phoneNumber?: string;
      fullName?: string;
      professionalTitle?: string;
      company?: string;
      location?: string;
      professionalBio?: string;
      linkedInProfile?: string;
      accreditedInvestorStatus?: string;
      fetchError?: string;
    } = {};
    if (!email) {
      errors["email"] = "Email does not exist";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (phoneNumber.length !=10) {
      errors.phoneNumber = "PhoneNumber must be of 10 characters";
    }

    if (!fullName) {
      errors.fullName = "Full Name is required";
    } // else if (fullName.length < 11) {
    //   errors.password = "PhoneNumber must be of 10 characters";
    // }

    if (!professionalTitle) {
      errors.professionalTitle = "Professional Title is required";
    }
    // } else if (professionalTitle.length < 11) {
    //   errors.professionalTitle = "PhoneNumber must be of 10 characters";
    // }

    if (!company) {
      errors.company = "Company Name is required";
    }

    if (!location) {
      errors.location = "Location is required";
    }

    if (!professionalBio) {
      errors.professionalBio = "Professional Bio is required";
    }

    if (!linkedInProfile) {
      errors.linkedInProfile = "LinkedIn Profile is required";
    }

    if (!accreditedInvestorStatus) {
      errors.accreditedInvestorStatus =
        "Accredited Investor Status is required";
    }

    return errors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      // Handle successful validation
    } else {
      setAlertVisible(true);
    }
  };

  return (
    <div className="flex  flex-col w-full items-center h-screen justify-center">
      <Box className="flex flex-col w-screen items-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-customBlack">Register</h1>
        </div>
        <div className="max-w-xl mx-auto mt-10 bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="py-4 px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.email && <Text>{errors.email}</Text>}
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
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                placeholder="Enter your Password"
                error={errors?.phoneNumber ? true : false}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.phoneNumber && <Text>{errors.phoneNumber}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Company"
              >
                Company
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="Company"
                error={errors?.company ? true : false}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Enter your Company Name"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.company && <Text>{errors.company}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Proffesional Title"
              >
                Professional Title
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="Professional Title"
                error={errors?.professionalTitle ? true : false}
                value={professionalTitle}
                onChange={(e) => setProfessionalTitle(e.target.value)}
                placeholder="Enter your Professional Title"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.professionalTitle && (
                <Text>{errors.professionalTitle}</Text>
              )}
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
                error={errors?.location ? true : false}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.location && <Text>{errors.location}</Text>}
            </div>
            <div className="mb-4">
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
                error={errors?.linkedInProfile ? true : false}
                value={linkedInProfile}
                onChange={(e) => setLinkedInProfile(e.target.value)}
                placeholder="Enter your LinkedIn Profile"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.linkedInProfile && <Text>{errors.linkedInProfile}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Professional Bio"
              >
                Professional Bio
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="Professional Bio"
                error={errors?.professionalBio ? true : false}
                value={professionalBio}
                onChange={(e) => setProfessionalBio(e.target.value)}
                placeholder="Enter your Professional Bio"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.professionalBio && <Text>{errors.professionalBio}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Accredited Investor Status"
              >
                Accredited Investor Status
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="Accredited Investor Status"
                error={errors?.accreditedInvestorStatus ? true : false}
                value={accreditedInvestorStatus}
                onChange={(e) => setAccreditedInvestorStatus(e.target.value)}
                placeholder="Enter your Accredited Investor Status"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.accreditedInvestorStatus && (
                <Text >{errors.accreditedInvestorStatus}</Text>
              )}
            </div>
            <div className="col-span-2 flex items-center justify-center mb-4">
              <Button
                variant="soft"
                className="button1"
                onClick={handleSubmit}
              >
                <Text className="text-white text-lg font-light">Submit</Text>
              </Button>
            </div>
          </div>
        </div>
      </Box>
      {alertVisible && (
        <AlertDialog.Root open={alertVisible}>
          <AlertDialog.Content maxWidth="450px">
            <AlertDialog.Title>Registration Unsuccessful</AlertDialog.Title>
            <AlertDialog.Description className="p-4 rounded">
              <Flex className="flex flex-col">
                {errors?.fullName && (
                  <Text className="m-2">{errors.fullName}</Text>
                )}
                {errors?.email && <Text className="m-2">{errors.email}</Text>}
                {errors?.password && (
                  <Text className="m-2">{errors.password}</Text>
                )}
                {errors?.phoneNumber && (
                  <Text className="m-2">{errors.phoneNumber}</Text>
                )}
                {errors?.company && (
                  <Text className="m-2">{errors.company}</Text>
                )}
                {errors?.professionalTitle && (
                  <Text className="m-2">{errors.professionalTitle}</Text>
                )}
                {errors?.location && (
                  <Text className="m-2">{errors.location}</Text>
                )}
                {errors?.linkedInProfile && (
                  <Text className="m-2">{errors.linkedInProfile}</Text>
                )}
                {errors?.professionalBio && (
                  <Text className="m-2">{errors.professionalBio}</Text>
                )}
                {errors?.accreditedInvestorStatus && (
                  <Text className="m-2">{errors.accreditedInvestorStatus}</Text>
                )}

                {errors?.fetchError && (
                  <Text className="m-2">{errors.fetchError}</Text>
                )}
              </Flex>
            </AlertDialog.Description>
            <Flex className="flex flex-row justify-center items-center w-full">
              <AlertDialog.Cancel onClick={() => setAlertVisible(false)}>
                <Button variant="soft" className="button1">
                  <Text className="text-white text-lg font-light">Ok</Text>
                </Button>
              </AlertDialog.Cancel>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      )}
    </div>
  );
}
