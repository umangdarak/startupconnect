"use client";
import { RootState } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../dashboardInvestor/pages.css";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Project {
  startupId: string;
  patentDetails: string;
  projectTitle: string;
  projectDescription: string;
  targetMarket: number;
  businessModel: string;
  fundingGoals: string;
  useOfFunds: string;
  expectedROI: string;
  legalDocuments: string;
}
interface DashBoardInvestorProps {
  searchData: string | null; // Receive search data as a prop
}

export default function DashBoardInvestor(
  { searchData }: DashBoardInvestorProps
) {
  const authState = useSelector((state: RootState) => state.auth);
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const res = await fetch(`http://localhost:8000/post/allprojects`, {
      method: "GET",
    });

    if (res.ok) {
      const properties = await res.json();
      setData(properties);
    } else {
      console.error("Failed to fetch properties");
    }
  };

  const handleFollow = async (startupId: string) => {
    try {
      const res = await fetch(`http://localhost:8000/follow/followreq`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          investorId: authState.user!["_id"],
          startupId: startupId,
        }),
      });
      if (res.ok) {
        toast.success("Follow Request Sent", {
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
    <div className="flex flex-col items-center w-full">
      
       {/* Flexbox to center cards vertically */}
       {searchData&&<Text className="text-black">{searchData}</Text>}
    {data.map((project) => (
      <div className="card mb-4" key={project.startupId}>
        <div className="project-header">
          <div className="image-container">
            <Image
              src={project.legalDocuments} // Use the URL directly
              alt={project.startupId}
              width={800} // Ensure the image fills the card width
              height={150} // Fixed height for the image
              className="object-cover"
            />
          </div>
          <div className="project-info">
            <h2 className="project-title">{project.projectTitle}</h2>
          </div>
        </div>
  
        <div className="card__content">
          <p className="card__description">{project.projectDescription}</p>
          <p><strong>Patent Details:</strong> {project.patentDetails}</p>
          <p><strong>Target Market:</strong> ${project.targetMarket}</p>
          <p><strong>Business Model:</strong> {project.businessModel}</p>
          <p><strong>Funding Goals:</strong> {project.fundingGoals}</p>
          <p><strong>Use of Funds:</strong> {project.useOfFunds}</p>
          <p><strong>Expected ROI:</strong> {project.expectedROI}</p>
          <Button
            onClick={() => handleFollow(project.startupId)}
            disabled={authState.user?.following?.includes(project.startupId)}
          >
            {authState.user?.following?.includes(project.startupId)?<>Following</>:<>Follow</>}
          </Button>
        </div>
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition={Bounce} />
      </div>
    ))}
  </div>
  
  );
}
