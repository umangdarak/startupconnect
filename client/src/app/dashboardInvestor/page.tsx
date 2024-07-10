"use client";
import { RootState } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../dashboardInvestor/pages.css";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

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
      console.log(properties);
      setData(properties);
    } else {
      console.error("Failed to fetch properties");
    }
  };
  return (
    <div className="flex flex-col w-3/4 h-screen">
      {data.map((project) => (
        <Box className="border rounded-lg p-4 mb-4 bg-white">
          <Flex direction="column" gap="2">
            <Text className="text-lg font-bold">
              Posted By:{project.startupId}
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
