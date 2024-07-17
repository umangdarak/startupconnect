import React, { useState } from "react";
import { TextField } from "@mui/material";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogAction,
} from "@radix-ui/react-alert-dialog";
import { TextArea, Box, Button, Flex, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
export default function RegisterInvestor() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [professionalTitle, setProfessionalTitle] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [professionalBio, setProfessionalBio] = useState<string>("");
  const [linkedInProfile, setLinkedInProfile] = useState<string>("");
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    phoneNumber?: string;
    fullName?: string;
    professionalTitle?: string;
    company?: string;
    location?: string;
    professionalBio?: string;
    linkedInProfile?: string;
    fetchError?: string;
  }>({});

  const router = useRouter();

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
      fetchError?: string;
    } = {};
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

    if (!phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (phoneNumber.length !== 10) {
      errors.phoneNumber = "Phone Number must be 10 characters";
    }

    if (!fullName) {
      errors.fullName = "Full Name is required";
    }

    if (!professionalTitle) {
      errors.professionalTitle = "Professional Title is required";
    }

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

    return errors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      const res = await fetch(`http://localhost:8000/auth/registerinvestor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          password,
          phoneNumber,
          professionalTitle,
          companyOrganization: company,
          location,
          professionalBio,
          linkedInProfile,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setErrors({ fetchError: data["error"] });
        setAlertVisible(true);
      } else {
        router.push("/auth/login");
      }
    } else {
      setAlertVisible(true);
    }
  };

  return (
    <div className="flex flex-col w-full items-center h-screen justify-center">
      <Box className="flex flex-col w-screen items-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-customBlack">Register</h1>
        </div>
        <div className="max-w-xl mx-auto mt-10 bg-white shadow-2xl rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit}>
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
                <label
                  className="block text-gray-700 font-bold mb-1 px-1"
                  htmlFor="Phone Number"
                >
                  Phone Number
                </label>
                <TextField
                  type="text"
                  required
                  id="outlined-basic"
                  name="Phone Number"
                  placeholder="Enter your Phone Number"
                  error={!!errors.phoneNumber}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  size="small"
                  className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.phoneNumber && <Text>{errors.phoneNumber}</Text>}
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
                  error={!!errors.company}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Enter your Company Name"
                  size="small"
                  className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.company && <Text>{errors.company}</Text>}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-1 px-1"
                  htmlFor="Professional Title"
                >
                  Professional Title
                </label>
                <TextField
                  type="text"
                  required
                  id="outlined-basic"
                  name="Professional Title"
                  error={!!errors.professionalTitle}
                  value={professionalTitle}
                  onChange={(e) => setProfessionalTitle(e.target.value)}
                  placeholder="Enter your Professional Title"
                  size="small"
                  className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.professionalTitle && (
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
                  error={!!errors.location}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your Location"
                  size="small"
                  className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.location && <Text>{errors.location}</Text>}
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
                  error={!!errors.professionalBio}
                  value={professionalBio}
                  onChange={(e) => setProfessionalBio(e.target.value)}
                  placeholder="Enter your Professional Bio"
                  size="small"
                  className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.professionalBio && (
                  <Text>{errors.professionalBio}</Text>
                )}
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
                  error={!!errors.linkedInProfile}
                  value={linkedInProfile}
                  onChange={(e) => setLinkedInProfile(e.target.value)}
                  placeholder="Enter your LinkedIn Profile"
                  size="small"
                  className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.linkedInProfile && (
                  <Text>{errors.linkedInProfile}</Text>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button
                className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                color="blue"
                variant="solid"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
          {alertVisible && (
            <AlertDialog open={alertVisible} onOpenChange={setAlertVisible}>
              <AlertDialog.Content>
                <AlertDialog.Title>Error</AlertDialog.Title>
                <AlertDialog.Description>
                  <ul>
                    {Object.keys(errors).map((key) => (
                      <li key={key}>{errors[key as keyof typeof errors]}</li>
                    ))}
                  </ul>
                </AlertDialog.Description>
                <AlertDialog.Action>OK</AlertDialog.Action>
              </AlertDialog.Content>
            </AlertDialog>
          )}
        </div>
      </Box>
    </div>
  );
}

