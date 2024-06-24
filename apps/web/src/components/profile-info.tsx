import { Button } from "@mui/base/Button";
import { Card, CardContent } from "@mui/material";
import React from "react";
import BasicInformationCard from "./basic-info.card";

const ContactInformation = () => {
  return (
    <Card className="rounded-3xl p-5 min-w-[350px] h-max">
      <CardContent className="space-y-5 ">
        <div className="flex justify-between">
          <h2 className="text-[20px] font-semibold">Contact Information</h2>
          <Button className="bg-[#0F6CBD] rounded-lg px-4 p-2 w-[100px] text-sm text-white font-semibold">
            Edit
          </Button>
        </div>
        <div className="grid-cols-4 grid gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Personal Email</p>
            <p className="font-semibold text-[#151D48]">John.smith@gmail.com</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Mobile</p>
            <p className="font-semibold text-[#151D48]">011223344556</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const EmergencyInformation = () => {
  return (
    <Card className="rounded-3xl p-5 min-w-[350px] h-max">
      <CardContent className="space-y-5">
        <div className="flex justify-between">
          <h2 className="text-[20px] font-semibold">Emergency Contact Information</h2>
          <Button className="bg-[#0F6CBD] rounded-lg px-4 p-2 w-[100px] text-sm text-white font-semibold">
            Edit
          </Button>
        </div>
        <div className="grid-cols-4 grid gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Emergency Contact Person Name</p>
            <p className="font-semibold text-[#151D48]">John.smith@gmail.com</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Emergency Relation</p>
            <p className="font-semibold text-[#151D48]">011223344556</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Emergency Phone</p>
            <p className="font-semibold text-[#151D48]">011223344556</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const AddressDetails = () => {
  return (
    <Card className="rounded-3xl p-5 min-w-[350px] h-max">
      <CardContent className="space-y-5">
        <div className="flex justify-between">
          <h2 className="text-[20px] font-semibold">Address Details</h2>
          <Button className="bg-[#0F6CBD] rounded-lg px-4 p-2 w-[100px] text-sm text-white font-semibold">
            Edit
          </Button>
        </div>
        <div className="grid-cols-4 grid gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Country</p>
            <p className="font-semibold text-[#151D48]">Egypt</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">City</p>
            <p className="font-semibold text-[#151D48]">Cairo</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Postal Code</p>
            <p className="font-semibold text-[#151D48]">11728</p>
          </div>
          <div></div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Building</p>
            <p className="font-semibold text-[#151D48]">7</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Street</p>
            <p className="font-semibold text-[#151D48]">Street 127</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Floor No.</p>
            <p className="font-semibold text-[#151D48]">7</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Apartment</p>
            <p className="font-semibold text-[#151D48]">72</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const DrivingDetails = () => {
  return (
    <Card className="rounded-3xl p-5 min-w-[350px] h-max">
      <CardContent className="space-y-5">
        <div className="flex justify-between">
          <h2 className="text-[20px] font-semibold">Driving License Details</h2>
          <Button className="bg-[#0F6CBD] rounded-lg px-4 p-2 w-[100px] text-sm text-white font-semibold">
            Edit
          </Button>
        </div>
        <div className="grid-cols-4 grid gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Driving License</p>
            <p className="font-semibold text-[#151D48]">Yes</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Driving License Type</p>
            <p className="font-semibold text-[#151D48]">C1E</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Driving License expiry date</p>
            <p className="font-semibold text-[#151D48]">01 / 04 / 2025</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MilitaryStatusDetails = () => {
  return (
    <Card className="rounded-3xl p-5 min-w-[350px] h-max">
      <CardContent className="space-y-5">
        <div className="flex justify-between">
          <h2 className="text-[20px] font-semibold">Military Status</h2>
          <Button className="bg-[#0F6CBD] rounded-lg px-4 p-2 w-[100px] text-sm text-white font-semibold">
            Edit
          </Button>
        </div>
        <div className="grid-cols-4 grid gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Require Travel Permit</p>
            <p className="font-semibold text-[#151D48]">Yes</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Military Status</p>
            <p className="font-semibold text-[#151D48]">Exempted</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#737791]">Document</p>
            <p className="font-semibold text-[#151D48]">011223344556</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function ProfileInfo() {
  return (
    <div className="space-y-10 pb-20">
      <BasicInformationCard />
      <ContactInformation />
      <EmergencyInformation />
      <AddressDetails />
      <DrivingDetails />
      <MilitaryStatusDetails />
    </div>
  );
}
