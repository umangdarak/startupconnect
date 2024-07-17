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

export default function RegisterStartup() {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [companyDescription, setCompanyDescription] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [ideaDescription, setIdeaDescription] = useState<string>("");
  const [linkedInProfile, setLinkedInProfile] = useState<string>("");
  const [patentApplicationNumbers, setPatentApplicationNumbers] = useState<string[]>([""]);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [emailOtp, setEmailOtp] = useState<string>("");
  const [phoneOtp, setPhoneOtp] = useState<string>("");
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    phoneNumber?: string;
    companyName?: string;
    industry?: string;
    location?: string;
    ideaDescription?: string;
    linkedInProfile?: string;
    patentApplicationNumbers?: string;
    emailOtp?: string;
    phoneOtp?: string;
  }>({});

  const validate = () => {
    const errors: {
      fullName?: string;
      email?: string;
      password?: string;
      phoneNumber?: string;
      companyName?: string;
      industry?: string;
      location?: string;
      ideaDescription?: string;
      linkedInProfile?: string;
      patentApplicationNumbers?: string;
      emailOtp?: string;
      phoneOtp?: string;
    } = {};

    if (!fullName) errors.fullName = "Full Name is required";
    if (!email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
    if (!password) errors.password = "Password is required";
    else if (password.length < 6) errors.password = "Password must be at least 6 characters";
    if (!phoneNumber) errors.phoneNumber = "Phone Number is required";
    else if (phoneNumber.length !== 10) errors.phoneNumber = "Phone Number must be 10 characters";
    if (!industry) errors.industry = "Industry is required";
    if (!location) errors.location = "Location is required";
    if (!ideaDescription) errors.ideaDescription = "Idea Description is required";
    if (!linkedInProfile) errors.linkedInProfile = "LinkedIn Profile is required";
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

  const handleOtpSubmit = () => {
    const otpErrors: {
      emailOtp?: string;
      phoneOtp?: string;
    } = {};

    if (!emailOtp) otpErrors.emailOtp = "Email OTP is required";
    if (!phoneOtp) otpErrors.phoneOtp = "Phone OTP is required";

    if (Object.keys(otpErrors).length === 0) {
      // Handle successful OTP verification
      console.log("OTP verified successfully!");
    } else {
      setErrors(otpErrors);
    }
  };

  const handlePatentIdChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newPatentApplicationNumbers = [...patentApplicationNumbers];
    newPatentApplicationNumbers[index] = event.target.value;
    setPatentApplicationNumbers(newPatentApplicationNumbers);
  };

  return (
    <div className="flex flex-col w-screen items-center h-screen justify-center">
      <Box className="flex flex-col w-screen items-center" style={{ width: "150%" }}>
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-customBlack">Register</h1>
        </div>
        <div className="max-w-xl mx-auto mt-10 bg-white shadow-2xl rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit}>
            {!otpSent ? (
              <div className="py-4 px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Name">
                    Name
                  </label>
                  <TextField
                    type="text"
                    required
                    id="name"
                    name="Name"
                    error={!!errors.fullName}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your Name"
                    size="small"
                    className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.fullName && <Text>{errors.fullName}</Text>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Email">
                    Email
                  </label>
                  <TextField
                    type="email"
                    required
                    id="email"
                    name="Email"
                    error={!!errors.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    size="small"
                    className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.email && <Text>{errors.email}</Text>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Password">
                    Password
                  </label>
                  <TextField
                    type="password"
                    required
                    id="password"
                    name="Password"
                    error={!!errors.password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    size="small"
                    className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.password && <Text>{errors.password}</Text>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Phone">
                    Phone Number
                  </label>
                  <TextField
                    type="tel"
                    required
                    id="phoneNumber"
                    name="Phone"
                    error={!!errors.phoneNumber}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your Phone Number"
                    size="small"
                    className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.phoneNumber && <Text>{errors.phoneNumber}</Text>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="LinkedIn">
                    LinkedIn Profile
                  </label>
                  <TextField
                    type="text"
                    required
                    id="linkedIn"
                    name="LinkedIn"
                    error={!!errors.linkedInProfile}
                    value={linkedInProfile}
                    onChange={(e) => setLinkedInProfile(e.target.value)}
                    placeholder="Enter your LinkedIn Profile"
                    size="small"
                    className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.linkedInProfile && <Text>{errors.linkedInProfile}</Text>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Company">
                    Company Name
                  </label>
                  <TextField
                    type="text"
                    id="companyName"
                    name="Company"
                    error={!!errors.companyName}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter your Company Name"
                    size="small"
                    className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.companyName && <Text>{errors.companyName}</Text>}
                </div>
                {companyName && (
                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="CompanyDesc">
                      Company Description
                    </label>
                    <TextArea
                      id="companyDescription"
                      name="CompanyDesc"
                      value={companyDescription}
                      onChange={(e) => setCompanyDescription(e.target.value)}
                      placeholder="Enter your Company Description"
                      size="3"
                      className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                )}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Industry">
                    Industry
                  </label>
                  <TextField
                    type="text"
                    id="industry"
                    name="Industry"
                    required
                    error={!!errors.industry}
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="Enter your Industry"
                    size="small"
                    className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.industry && <Text>{errors.industry}</Text>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Location">
                    Location
                  </label>
                  <TextField
                    type="text"
                    id="location"
                    name="Location"
                    required
                    error={!!errors.location}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your Location"
                    size="small"
                    className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.location && <Text>{errors.location}</Text>}
                </div>
                <div className="mb-4 col-span-2">
                  <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="IdeaDesc">
                    Idea Description
                  </label>
                  <TextArea
                    id="ideaDescription"
                    name="IdeaDesc"
                    required
                    value={ideaDescription}
                    onChange={(e) => setIdeaDescription(e.target.value)}
                    placeholder="Enter your Idea Description"
                    size="3"
                    className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.ideaDescription && <Text>{errors.ideaDescription}</Text>}
                </div>
                <div className="mb-4 col-span-2">
                  <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="PatentIds">
                    Patent Application Numbers
                  </label>
                  {patentApplicationNumbers.map((patent, index) => (
                    <div key={index} className="flex mb-2">
                      <TextField
                        type="text"
                        id={`patent${index}`}
                        name={`Patent${index}`}
                        value={patent}
                        onChange={(e) => handlePatentIdChange(index, e)}
                        placeholder={`Enter Patent ID ${index + 1}`}
                        size="small"
                        className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.patentApplicationNumbers &&
                        errors.patentApplicationNumbers.includes(`Patent ID ${index + 1}`) && (
                          <Text>{`Patent ID ${index + 1} is required`}</Text>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-4 px-6">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="emailOtp">
                    Email OTP
                  </label>
                  <TextField
                    type="text"
                    id="emailOtp"
                    name="emailOtp"
                    error={!!errors.emailOtp}
                    value={emailOtp}
                    onChange={(e) => setEmailOtp(e.target.value)}
                    placeholder="Enter OTP sent to your Email"
                    size="small"
                    className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.emailOtp && <Text>{errors.emailOtp}</Text>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="phoneOtp">
                    Phone OTP
                  </label>
                  <TextField
                    type="text"
                    id="phoneOtp"
                    name="phoneOtp"
                    error={!!errors.phoneOtp}
                    value={phoneOtp}
                    onChange={(e) => setPhoneOtp(e.target.value)}
                    placeholder="Enter OTP sent to your Phone"
                    size="small"
                    className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.phoneOtp && <Text>{errors.phoneOtp}</Text>}
                </div>
                <Flex justify="center" mt="5">
                  <Button onClick={handleOtpSubmit}>Submit OTP</Button>
                </Flex>
              </div>
            )}
            {!otpSent && (
              <Flex justify="center" mt="5">
                <Button type="submit">Submit</Button>
              </Flex>
            )}
          </form>
        </div>
        <AlertDialog open={alertVisible} onOpenChange={setAlertVisible}>
          <AlertDialogTrigger asChild>
            <Button>Open Alert</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Error</AlertDialogTitle>
            <AlertDialogDescription>
              Please correct the errors in the form before submitting.
            </AlertDialogDescription>
            <AlertDialogAction asChild>
              <Button onClick={() => setAlertVisible(false)}>Close</Button>
            </AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
    </div>
  );
}

