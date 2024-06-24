"use client";
import React from "react";
import ProfileCard from "./ui/profile-card";
import { TABS } from "../store";
import { TabPanel, Tabs } from "@mui/base";

const DashContent = () => {
  return (
    <Tabs className="flex gap-4 w-full" defaultValue={0}>
      <ProfileCard />
      <div className="flex-1 h-[calc(100vh-140px)] overflow-y-scroll hide-scrollbar w-full">
        {TABS.map((tab, index) => (
          <TabPanel key={tab.value} value={index}>
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
};

export default DashContent;
