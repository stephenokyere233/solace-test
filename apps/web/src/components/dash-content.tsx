"use client";
import React from "react";
import ProfileCard from "./ui/profile-card";
import { TABS } from "../store";
import { TabPanel, Tabs } from "@mui/base";

const DashContent = () => {
  return (
    <Tabs className="flex gap-10 w-full" defaultValue={0}>
      <ProfileCard />
      <div className="flex-1 min-h-[calc(100vh-150px)] w-full">
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
