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
  legalDocuments: {
    data: string;
  };
}

export default function DashBoardInvestor() {
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
    <div className="flex flex-col w-3/4 h-screen">
      {data.map((project) => (
        <Box className="border rounded-lg p-4 mb-4 bg-white">
          <Flex direction="column" gap="2">
            <Text className="text-lg font-bold">
              Posted By:{project.startupId}
              <Button
                onClick={() => {
                  handleFollow(project.startupId);
                }}
                className="button1"
                disabled={authState.user?.following?.includes(
                  project.startupId
                )}
              >
                Follow
              </Button>
              <ToastContainer
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
              />
            </Text>
            {/* <Text className="text-gray-600">Owned by: {property.owner}</Text> */}
            <Box className="w-full my-4">
              <Image
                src={`data:image/jpeg;base64,${Buffer.from(
                  project.legalDocuments.data
                ).toString("base64")}`}
                alt={project.startupId}
                width={100}
                height={100}
                className="w-full h-auto object-cover rounded-lg"
              />
            </Box>
            <Text>
              <strong>patentDetails:</strong> {project.patentDetails}
            </Text>
            <Text>
              <strong>projectTitle:</strong> {project.projectTitle}
            </Text>
            <Text>
              <strong>projectDescription:</strong> {project.projectDescription}
            </Text>
            <Text>
              <strong>targetMarket:</strong> ${project.targetMarket}
            </Text>
            <Flex gap="4">
              <Text>
                <strong>businessModel:</strong> {project.businessModel}
              </Text>
              <Text>
                <strong>fundingGoals:</strong> {project.fundingGoals}
              </Text>
            </Flex>
            <Flex gap="4">
              <Text>
                <strong>useOfFunds:</strong> {project.useOfFunds}
              </Text>
              <Text>
                <strong>expectedROI:</strong> {project.expectedROI}
              </Text>
            </Flex>
          </Flex>
        </Box>
      ))}
    </div>
  );
}
