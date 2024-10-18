"use client";
import React, { useState } from "react";
import { TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { Box, Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function RegisterInvestor() {
  const [investorName, setInvestorName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [typeOfInvestor, setTypeOfInvestor] = useState<string[]>([]);
  const [location, setLocation] = useState<string>("");
  const [sectorsOfInterest, setSectorsOfInterest] = useState<string>("");
  const [stageFocus, setStageFocus] = useState<string>("");
  const [preferredBusinessModels, setPreferredBusinessModels] = useState<string[]>([]);
  const [ticketSize, setTicketSize] = useState<string>("");
  const [equityStake, setEquityStake] = useState<string>("");
  const [investmentHorizon, setInvestmentHorizon] = useState<string>("");
  const [trackRecord, setTrackRecord] = useState<string>("");
  const [sectorExpertise, setSectorExpertise] = useState<string>("");
  const [limitedPartners, setLimitedPartners] = useState<string>("");
  const [geoPreferences, setGeoPreferences] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const router = useRouter();

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!email || !/\S+@\S+\.\S+/.test(email)) errors.email = "Valid Email is required";
    if (!password || password.length < 6) errors.password = "Password must be at least 6 characters";
    if (!phoneNumber || phoneNumber.length !== 10) errors.phoneNumber = "Phone Number must be 10 digits";
    if (!investorName) errors.investorName = "Investor name is required.";
    if (!typeOfInvestor.length) errors.typeOfInvestor = "Type of investor is required.";
    if (!location) errors.location = "Location is required.";
    if (!sectorsOfInterest) errors.sectorsOfInterest = "Sectors of interest are required.";
    if (!stageFocus) errors.stageFocus = "Stage focus is required.";
    if (!preferredBusinessModels.length) errors.preferredBusinessModels = "Preferred business models are required.";
    if (!ticketSize) errors.ticketSize = "Ticket size is required.";
    if (!equityStake) errors.equityStake = "Equity stake is required.";
    if (!investmentHorizon) errors.investmentHorizon = "Investment horizon is required.";
    if (!trackRecord) errors.trackRecord = "Track record is required.";
    if (!sectorExpertise) errors.sectorExpertise = "Sector expertise is required.";
    if (!limitedPartners) errors.limitedPartners = "Limited partners are required.";
    if (!geoPreferences.length) errors.geoPreferences = "Geographic preferences are required.";
    if (!availability) errors.availability = "Availability is required.";
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
          investorName,
          typeOfInvestor,
          location,
          sectorsOfInterest,
          stageFocus,
          preferredBusinessModels,
          ticketSize,
          equityStake,
          investmentHorizon,
          trackRecord,
          sectorExpertise,
          limitedPartners,
          geoPreferences,
          availability,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setErrors({ fetchError: data["error"] });
      } else {
        router.push("/login");
      }
    }
  };

  return (
    <div className="flex flex-col w-full items-center h-screen justify-center relative">
      {/* Back Button */}
      <div className="absolute top-6 left-4">
        <Button onClick={() => router.back()} className="button1">
          <ArrowBackIosIcon fontSize="small" sx={{ color: '#FFFFFF' }} />
        </Button>
      </div>

      <Box className="flex flex-col w-screen items-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-customBlack">Register Investor</h1>
        </div>
        <div className="max-w-xl mx-auto mt-10 bg-white shadow-2xl rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div className="py-4 px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                label="Investor Name"
                required
                value={investorName}
                onChange={(e) => setInvestorName(e.target.value)}
                error={!!errors.investorName}
                helperText={errors.investorName}
              />
              <TextField
                label="Email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                label="Password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />
              <TextField
                label="Phone Number"
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
              />

              {/* Dropdown for Type of Investor */}
              <FormControl fullWidth error={!!errors.typeOfInvestor}>
                <InputLabel>Type of Investor</InputLabel>
                <Select
                  multiple
                  value={typeOfInvestor}
                  onChange={(e) => setTypeOfInvestor(e.target.value as string[])}
                  renderValue={(selected) => selected.join(", ")}
                >
                  <MenuItem value="Angel">Angel</MenuItem>
                  <MenuItem value="Venture Capitalist">Venture Capitalist</MenuItem>
                  <MenuItem value="Corporate Investor">Corporate Investor</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                error={!!errors.location}
                helperText={errors.location}
              />
              <TextField
                label="Sectors of Interest"
                required
                value={sectorsOfInterest}
                onChange={(e) => setSectorsOfInterest(e.target.value)}
                error={!!errors.sectorsOfInterest}
                helperText={errors.sectorsOfInterest}
              />
              <TextField
                label="Stage Focus"
                required
                value={stageFocus}
                onChange={(e) => setStageFocus(e.target.value)}
                error={!!errors.stageFocus}
                helperText={errors.stageFocus}
              />

              {/* Dropdown for Preferred Business Models */}
              <FormControl fullWidth error={!!errors.preferredBusinessModels}>
                <InputLabel>Preferred Business Models</InputLabel>
                <Select
                  multiple
                  value={preferredBusinessModels}
                  onChange={(e) => setPreferredBusinessModels(e.target.value as string[])}
                  renderValue={(selected) => selected.join(", ")}
                >
                  <MenuItem value="B2B">B2B</MenuItem>
                  <MenuItem value="B2C">B2C</MenuItem>
                  <MenuItem value="C2C">C2C</MenuItem>
                </Select>
              </FormControl>

              {/* Dropdown for Ticket Size */}
              <FormControl fullWidth error={!!errors.ticketSize}>
                <InputLabel>Ticket Size</InputLabel>
                <Select
                  value={ticketSize}
                  onChange={(e) => setTicketSize(e.target.value as string)}
                >
                  <MenuItem value="0-100K">$0-100K</MenuItem>
                  <MenuItem value="100K-500K">$100K-500K</MenuItem>
                  <MenuItem value="500K-1M">$500K-1M</MenuItem>
                </Select>
              </FormControl>
              {/* Other Inputs */}
              <TextField
                label="Equity Stake"
                value={equityStake}
                onChange={(e) => setEquityStake(e.target.value)}
                error={!!errors.equityStake}
                helperText={errors.equityStake}
              />
              <TextField
                label="Investment Horizon"
                value={investmentHorizon}
                onChange={(e) => setInvestmentHorizon(e.target.value)}
                error={!!errors.investmentHorizon}
                helperText={errors.investmentHorizon}
              />
              <TextField
                label="Track Record"
                value={trackRecord}
                onChange={(e) => setTrackRecord(e.target.value)}
                error={!!errors.trackRecord}
                helperText={errors.trackRecord}
              />
              <TextField
                label="Sector Expertise"
                value={sectorExpertise}
                onChange={(e) => setSectorExpertise(e.target.value)}
                error={!!errors.sectorExpertise}
                helperText={errors.sectorExpertise}
              />
              <TextField
                label="Limited Partners"
                value={limitedPartners}
                onChange={(e) => setLimitedPartners(e.target.value)}
                error={!!errors.limitedPartners}
                helperText={errors.limitedPartners}
              />
              {/* Geographic Preferences */}
              <FormControl fullWidth error={!!errors.geoPreferences}>
                <InputLabel>Geographic Preferences</InputLabel>
                <Select
                  multiple
                  value={geoPreferences}
                  onChange={(e) => setGeoPreferences(e.target.value as string[])}
                  renderValue={(selected) => selected.join(", ")}
                >
                  <MenuItem value="Domestic">Domestic</MenuItem>
                  <MenuItem value="International">International</MenuItem>
                </Select>
              </FormControl>
              {/* Availability Input */}
              <TextField
                label="Availability"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                error={!!errors.availability}
                helperText={errors.availability}
              />
            </div>
            {/* Submit Button */}
            <div className="flex justify-center mt-6 mb-4">
              <Button type="submit" className="w-40 h-12 bg-indigo-600 text-white rounded-lg">
                Register
              </Button>
            </div>
          </form>
        </div>
      </Box>
    </div>
  );
}
