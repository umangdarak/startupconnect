"use client";
import { TextField } from "@mui/material";
import { Box, Button, AlertDialog, Flex, Text } from "@radix-ui/themes";
import React, { ChangeEvent, useEffect, useState } from "react";
import imageCompression from "browser-image-compression";
import { useRouter } from "next/navigation";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import "../dashboardStartup/pages.css";
import { toast, Bounce, ToastContainer } from "react-toastify";
import axios from 'axios';


export default function DashBoardStartup() {
  const authState = useSelector((state: RootState) => state.auth);

  const [projectTitle, setProjectTitle] = useState<string>();
  const [projectDescription, setProjectDescription] = useState<string>();
  const [targetMarket, setTargetMarket] = useState<string>();
  const [businessModel, setBusinessModel] = useState<string>();
  const [fundingGoals, setFundingGoals] = useState<string>();
  const [useOfFunds, setUseOfFunds] = useState<string>();
  const [expectedROI, setExpectedROI] = useState<string>();
  const [patentDetails, setPatentDetails] = useState<string>();
  const [legalDocuments, setLegalDocuments] = useState<File|null>(null);
  const [errors, setErrors] = useState<{
    projectTitle?: string;
    projectDescription?: string;
    targetMarket?: string;
    businessModel?: string;
    fundingGoals?: string;
    useOfFunds?: string;
    expectedROI?: string;
    patentDetails?: string;
    legalDocuments?: string;
    fetchError?: string;
  }>();
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const router = useRouter();
  const validate = () => {
    const errors: {
      projectTitle?: string;
      projectDescription?: string;
      targetMarket?: string;
      businessModel?: string;
      fundingGoals?: string;
      useOfFunds?: string;
      expectedROI?: string;
      patentDetails?: string;
      legalDocuments?: string;
      fetchError?: string;
    } = {};
    if (!projectTitle) {
      errors["projectTitle"] = "projectTitle is required";
    }

    if (!projectDescription) {
      errors.projectDescription = "projectDescription is required";
    }

    if (!targetMarket) {
      errors.targetMarket = "targetMarket is required";
    }
    if (!businessModel) {
      errors.businessModel = "businessModel is required";
    } // else if (fullName.length < 11) {
    //   errors.password = "PhoneNumber must be of 10 characters";
    // }

    if (!fundingGoals) {
      errors.fundingGoals = "fundingGoals is required";
    }
    // } else if (professionalTitle.length < 11) {
    //   errors.professionalTitle = "PhoneNumber must be of 10 characters";
    // }

    if (!useOfFunds) {
      errors.useOfFunds = "useOfFunds is required";
    }

    if (!expectedROI) {
      errors.expectedROI = "expectedROI is required";
    }

    if (!patentDetails) {
      errors.patentDetails = "patentDetails is required";
    }

    if (!legalDocuments) {
      errors.legalDocuments = "legalDocuments is required";
    }

    return errors;
  };
  // const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target?.files?.[0];
  //   if (file) {
  //     try {
  //       const options = {
  //         maxSizeMB: 1,
  //         maxWidthOrHeight: 800,
  //         useWebWorker: true,
  //       };
  //       const compressedFile = await imageCompression(file, options);
  //       const reader = new FileReader();
  //       reader.onload = (event: ProgressEvent<FileReader>) => {
  //         const base64String = event.target?.result?.toString().split(",")[1];
  //         if (base64String) {
  //           setLegalDocuments(base64String);
  //         }
  //       };
  //       reader.readAsDataURL(compressedFile);
  //     } catch (error) {
  //       console.error("Error compressing image:", error);
  //     }
  //   }
  // };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setLegalDocuments(selectedFile);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const err = validate();
    setErrors(err);
    if (
      // Object.keys(err).length === 0 && 
    legalDocuments) {
      // Handle successful validation

      const url = `https://api.cloudinary.com/v1_1/dzqij2vui/image/upload`; // Replace with your Cloudinary cloud name
      const formData = new FormData();
      formData.append('file', legalDocuments);
      formData.append('upload_preset', 'ewaedee'); // Replace with your upload preset
  
      try {
        const response = await axios.post(url, formData);
        const image=response.data.secure_url; // Get the image URL
        console.log('Image uploaded successfully:',image);
      } catch (err) {
        console.error(err);
      }

      const res = await fetch(`http://localhost:8000/post/project`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          startupId: authState.user!["_id"],
          projectTitle: projectTitle,
          projectDescription: projectDescription,
          targetMarket: targetMarket,
          businessModel: businessModel,
          fundingGoals: fundingGoals,
          useOfFunds: useOfFunds,
          expectedROI: expectedROI,
          patentDetails: patentDetails,
          legalDocuments: legalDocuments,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setErrors({ fetchError: data["error"] });
        setAlertVisible(true);
      } else {
        router.push("/");
      }
    } else {
      setAlertVisible(true);
    }
  };
  interface Follow {
    startupId: string;
    investorId: string;
    createdAt: Date;
  }
  const [followRequests, setFollowRequests] = useState<Follow[]>([]);

  const getRequests = async () => {
    try {
      const res = await fetch(`http://localhost:8000/follow/getfollowrequest`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          startupId: authState.user!["_id"],
        }),
      });
      if (res.ok) {
        const data1 = await res.json();
        setFollowRequests(data1);
      } else {
        toast.error(await res.json(), {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (e: any) {
      toast.error(e, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  const acceptFollow = async (startupId: string, investorId: string) => {
    try {
      const res = await fetch(`http://localhost:8000/follow/acceptRequest`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          startupId: startupId,
          investorId: investorId,
        }),
      });
      if (res.ok) {
        toast.success("Follow Request Accepted", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        setFollowRequests([]);
      } else {
        toast.error(await res.json(), {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (e: any) {
      toast.error(e, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  return (
    <div className="flex  flex-col w-full items-center h-screen justify-center">
      <Box className="flex flex-col w-screen items-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-customBlack">
            Project Ideas
          </h1>
        </div>
        <div>
          <Button onClick={getRequests}>Get Follow req</Button>
          {/* <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          /> */}
          {followRequests &&
            followRequests.map((req) => (
              <>
                <Text>{req.investorId}</Text>sent a follow Request
                <Button
                  onClick={() => {
                    acceptFollow(req.startupId, req.investorId);
                  }}
                >
                  Accept?
                </Button>
              </>
            ))}
        </div>
        <div className="max-w-xl mx-auto mt-10 bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="py-4 px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="Name"
              >
                projectTitle
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="projectTitle"
                error={errors?.projectTitle ? true : false}
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="Enter your Name"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.projectTitle && <Text>{errors.projectTitle}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="projectDescription"
              >
                projectDescription
              </label>
              <TextField
                type="email"
                required
                id="outlined-basic"
                name="projectDescription"
                error={errors?.projectDescription ? true : false}
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Enter your Mail"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.projectDescription && (
                <Text>{errors.projectDescription}</Text>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="targetMarket"
              >
                targetMarket
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="targetMarket"
                error={errors?.targetMarket ? true : false}
                value={targetMarket}
                onChange={(e) => setTargetMarket(e.target.value)}
                placeholder="Enter your Password"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.targetMarket && <Text>{errors.targetMarket}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="businessModel"
              >
                businessModel
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="businessModel"
                placeholder="businessModel"
                error={errors?.businessModel ? true : false}
                value={businessModel}
                onChange={(e) => setBusinessModel(e.target.value)}
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.businessModel && <Text>{errors.businessModel}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="fundingGoals"
              >
                fundingGoals
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="fundingGoals"
                error={errors?.fundingGoals ? true : false}
                value={fundingGoals}
                onChange={(e) => setFundingGoals(e.target.value)}
                placeholder="fundingGoals"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.fundingGoals && <Text>{errors.fundingGoals}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="useOfFunds"
              >
                useOfFunds{" "}
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="useOfFunds"
                error={errors?.useOfFunds ? true : false}
                value={useOfFunds}
                onChange={(e) => setUseOfFunds(e.target.value)}
                placeholder="useOfFunds"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.useOfFunds && <Text>{errors.useOfFunds}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="expectedROI"
              >
                expectedROI
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="expectedROI"
                error={errors?.expectedROI ? true : false}
                value={expectedROI}
                onChange={(e) => setExpectedROI(e.target.value)}
                placeholder="expectedROI"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.expectedROI && <Text>{errors.expectedROI}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="patentDetails"
              >
                patentDetails
              </label>
              <TextField
                type="text"
                required
                id="outlined-basic"
                name="patentDetails"
                error={errors?.patentDetails ? true : false}
                value={patentDetails}
                onChange={(e) => setPatentDetails(e.target.value)}
                placeholder="patentDetails"
                size="small"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.patentDetails && <Text>{errors.patentDetails}</Text>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1 px-1"
                htmlFor="legalDocuments"
              >
                legalDocuments
              </label>
              <TextField
                type="file"
                required
                id="outlined-basic"
                name="legalDocuments"
                error={errors?.legalDocuments ? true : false}
                onChange={handleFileChange}
                placeholder="legalDocuments"
                className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors?.legalDocuments && <Text>{errors.legalDocuments}</Text>}
            </div>

            <div className="col-span-2 flex items-center justify-center mb-4">
              <Button variant="soft" className="button1" onClick={handleSubmit}>
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
                {errors?.projectTitle && (
                  <Text className="m-2">{errors.projectTitle}</Text>
                )}
                {errors?.projectDescription && (
                  <Text className="m-2">{errors.projectDescription}</Text>
                )}
                {errors?.targetMarket && (
                  <Text className="m-2">{errors.targetMarket}</Text>
                )}
                {errors?.businessModel && (
                  <Text className="m-2">{errors.businessModel}</Text>
                )}
                {errors?.fundingGoals && (
                  <Text className="m-2">{errors.fundingGoals}</Text>
                )}
                {errors?.useOfFunds && (
                  <Text className="m-2">{errors.useOfFunds}</Text>
                )}
                {errors?.expectedROI && (
                  <Text className="m-2">{errors.expectedROI}</Text>
                )}
                {errors?.patentDetails && (
                  <Text className="m-2">{errors.patentDetails}</Text>
                )}
                {errors?.legalDocuments && (
                  <Text className="m-2">{errors.legalDocuments}</Text>
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
