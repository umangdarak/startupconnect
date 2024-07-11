"use client";
import { TextField } from "@mui/material";
import { AlertDialog, Box, Button, Flex, Text, TextArea } from "@radix-ui/themes";
import React, { useState } from "react";

export default function RegisterStartup() {
    const [fullName, setFullName] = useState<string>();
    const [phoneNumber,setPhoneNumber]=useState<string>();
    const [email,setEmail]=useState<string>();
    const [password,setPassword]=useState<string>();
    const [companyName,setCompanyName]=useState<string>();
    const [companySize,setCompanySize]=useState<string>();
    const [industry,setIndustry]=useState<string>();
    const [location,setLocation]=useState<string>();
    const [contactPerson,setContactPerson]=useState<string>();
    const [companyDescription,setCompanyDescription]=useState<string>();
    const [linkedInProfile,setLinkedInProfile]=useState<string>();
    const [missionStatement,setMissionStatement]=useState<string>();
    const [revenue,setRevenue]=useState<string>();
    const [patentApplicationNumber,setPatentApplicationNumber]=useState<string>();
    const [documents,setDocuments]=useState<string>();
    const [createdAt,setCreatedAt]=useState<string>();
    const [alertVisible, setAlertVisible] = useState<boolean>(false);
    const [errors,setErrors]=useState<{    
      fullName?: string;
      email?: string;
      password?: string;
      phoneNumber?:string;
      companyName?:string;
      companySize?:string;
      industry?:string;
      location?:string;
      contactPerson?:string;
      companyDescription?:string;
      linkedInProfile?:string;
      missionStatement?:string;
      revenue?:string;
      patentApplicationNumber?:string;
      documents?:string;
      fetchError?: string;
    }>();

    const validate=()=>{
      const errors:{    
        fullName?: string;
        email?: string;
        password?: string;
        phoneNumber?:string;
        companyName?:string;
        companySize?:string;
        industry?:string;
        location?:string;
        contactPerson?:string;
        companyDescription?:string;
        linkedInProfile?:string;
        missionStatement?:string;
        revenue?:string;
        patentApplicationNumber?:string;
        documents?:string;
        fetchError?: string;
      }={};
      if (!fullName) {
        errors.fullName = "Full Name is required";
      }

      if(!email){
        errors["email"]="Email does not exist";
      }else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid";
      }

      if (!password) {
        errors.password = "Password is required";
      } else if (password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }

      if(!phoneNumber) {
        errors.phoneNumber = "Phone Number is required";
      } else if (phoneNumber.length != 10) {
        errors.phoneNumber = "PhoneNumber must be of 10 characters";
      }

      if(!companyName) {
        errors.companyName = "Company Name is required";
      }

      if(!companySize) {
        errors.companySize = "Company size is required";
      }
      // } else if (professionalTitle.length < 11) {
      //   errors.professionalTitle = "PhoneNumber must be of 10 characters";
      // }

      if(!industry) {
        errors.industry = "Industry is required";
      }

      if(!location) {
        errors.location = "Location is required";
      }

      if(!contactPerson) {
        errors.contactPerson = "Contact Person is required";
      }

      // if(!companyDescription) {
      //   errors.companyDescription = "Company Description is required";
      // }

      if(!linkedInProfile) {
        errors.linkedInProfile = "LinkedIn Profile is required";
      }

      // if(!missionStatement) {
      //   errors.missionStatement = "Mission Statement is required";
      // }

      // if(!revenue) {
      //   errors.revenue = "Revenue is required";
      // }

      if(!patentApplicationNumber) {
        errors.patentApplicationNumber = "Patent Application Number is required";
      }

      if(!documents) {
        errors.documents = "Document is required";
      }

      
      return errors;
    }
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
     <div className="flex  flex-col w-screen items-center h-screen justify-center" >
      <Box className="flex flex-col w-screen items-center" style={{ width: '150%' }}>
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
                onChange={(e: { target: { value: React.SetStateAction<string | undefined>; }; }) => setPassword(e.target.value)}
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
              {errors?.linkedInProfile && (
                <Text>{errors.linkedInProfile}</Text>
              )}
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
                error={errors?.companyName ? true : false}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter your Company Name"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.companyName && (
                <Text>{errors.companyName}</Text>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Company Size"
              >
                Company Size
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="Company Size"
                error={errors?.companySize ? true : false}
                value={companySize}
                onChange={(e) => setCompanySize(e.target.value)}
                placeholder="Enter your Company size"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.companySize && (
                <Text>{errors.companySize}</Text>
              )}
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
                error={errors?.industry ? true : false}
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="Enter your Industry"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.industry && (
                <Text>{errors.industry}</Text>
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
                htmlFor="Patent Application Number"
              >
                Patent Application Number
              </label>
              <TextField
                type="number"
                required
                id="outlined-basic"
                name="Patent Application Number"
                placeholder="Enter your Patent Application Number"
                error={errors?.patentApplicationNumber ? true : false}
                value={patentApplicationNumber}
                onChange={(e) => setPatentApplicationNumber(e.target.value)}
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.patentApplicationNumber && <Text>{errors.patentApplicationNumber}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Contact Person"
              >
                Contact Person
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="Contact Person"
                error={errors?.contactPerson ? true : false}
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                placeholder="Enter Details"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.contactPerson && <Text>{errors.contactPerson}</Text>}
            </div><div className="mb-4 col-span-2">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Company Description"
              >
                Company Description
              </label>
              <TextArea
                //type="text"
                required
                id="outlined-basic"
                name="Company Description"
                //error={errors?.companyDescription ? true : false}
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                placeholder="Enter your Company Name"
                size="3"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.companyDescription && <Text>{errors.companyDescription}</Text>}
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
                {errors?.companyName && (
                  <Text className="m-2">{errors.companyName}</Text>
                )}
                {errors?.companySize && (
                  <Text className="m-2">{errors.companySize}</Text>
                )}
                {errors?.industry && (
                  <Text className="m-2">{errors.industry}</Text>
                )}
                {errors?.location && (
                  <Text className="m-2">{errors.location}</Text>
                )}
                {errors?.linkedInProfile && (
                  <Text className="m-2">{errors.linkedInProfile}</Text>
                )}
                {errors?.contactPerson && (
                  <Text className="m-2">{errors.contactPerson}</Text>
                )}
                {errors?.companyDescription && (
                  <Text className="m-2">{errors.companyDescription}</Text>
                )}
                {errors?.patentApplicationNumber && (
                  <Text className="m-2">{errors.patentApplicationNumber}</Text>
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
