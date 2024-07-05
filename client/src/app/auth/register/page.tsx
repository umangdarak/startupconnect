"use client";
import { Button, Text } from "@radix-ui/themes";
import React, { useState } from "react";
import RegisterInvestor from "./_RegisterInvestor";
import RegisterStartup from "./_RegisterStartup";
import { motion } from "framer-motion";

export default function Register() {
  const [userType, setUserType] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      {" "}
      {!showForm ? (
        <motion.div
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: showForm ? 0 : 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="flex flex-col justify-center items-center border-solid border-customBlack border rounded-full p-10"
        >
          <Text className="text-customBlack font-mono">
            Are you an Investor or an Entrepreneur/Startup Company?
          </Text>
          <div className="flex flex-row justify-between w-full px-6">
            <Button
              className="mb-5"
              onClick={() => {
                setUserType("Investor");
                setShowForm(true);
              }}
            >
              <Text className="text-white font-mono">Investor</Text>
            </Button>
            <Button
              onClick={() => {
                setUserType("Startup");
                setShowForm(true);
              }}
            >
              <Text className="text-white font-mono">Entrepreneur/Startup</Text>
            </Button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "backIn" }}
        >
          <Button
            onClick={() => {
              setUserType("");
              setShowForm(false);
            }}
          >
            Back
          </Button>
          {userType === "Investor" ? (
            <div>
              <RegisterInvestor />
            </div>
          ) : (
            <div>
              <RegisterStartup />
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
