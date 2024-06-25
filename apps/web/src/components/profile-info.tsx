import React from "react";
import BasicInformationCard from "./basic-info.card";
import { ContactInformation } from "./contact-info";
import { EmergencyInformation } from "./emergency-info";
import { AddressDetails } from "./address-details";
import { DrivingDetails } from "./driving-details";
import { MilitaryStatusDetails } from "./military-details";
import { Box } from "@mui/material";

export default function ProfileInfo() {
  return (
    <Box component="div" className="space-y-10 pb-20">
      <BasicInformationCard />
      <ContactInformation />
      <EmergencyInformation />
      <AddressDetails />
      <DrivingDetails />
      <MilitaryStatusDetails />
    </Box>
  );
}
