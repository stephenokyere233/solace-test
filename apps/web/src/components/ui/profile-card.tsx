"use client";
import { CardContent, Card, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import { TABS } from "@/store";
import { TabsList } from "@mui/base/TabsList";
import Tab from "./tabs";

const ProfileCard = () => {
  return (
    <Card className="rounded-3xl p-5 min-w-[400px] h-max">
      <CardContent className="space-y-2">
        <div className="relative w-max pb-4">
          <Image
            alt="Stephen Okyere"
            src="/assets/profile.png"
            className="w-max"
            width={120}
            height={120}
          />
          <div className="border absolute rounded-full -bottom-1 -right-2 p-2 bg-white">
            <Image
              alt="Stephen Okyere"
              src="/assets/icons/camera.svg"
              width={20}
              height={20}
            />
          </div>
        </div>
        <h2 className="text-[20px] font-semibold">John Smith</h2>
        <p className="text-[#737791]">Senior Product Manager</p>
        <Divider className="py-2" />
        <TabsList className="flex flex-col gap-2 pt-4 w-full">
          {TABS.map((tab, index) => (
            <Tab key={tab.value} value={index} label={tab.name} />
          ))}
        </TabsList>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
