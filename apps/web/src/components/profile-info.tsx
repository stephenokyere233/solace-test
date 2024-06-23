import { Card, CardContent } from "@mui/material";
import React from "react";

export default function ProfileInfo() {
  return (
    <div className="space-y-10">
      <Card className="rounded-3xl p-5 min-w-[350px] h-max">
        <CardContent className="space-y-2">
          <h2 className="text-[20px] font-semibold">Basic Information</h2>
        </CardContent>
      </Card>
      <Card className="rounded-3xl p-5 min-w-[350px] h-max">
        <CardContent className="space-y-2">
          <h2 className="text-[20px] font-semibold">Contact Information</h2>
        </CardContent>
      </Card>
      <Card className="rounded-3xl p-5 min-w-[350px] h-max">
        <CardContent className="space-y-2">
          <h2 className="text-[20px] font-semibold">Emergency Contact Information</h2>
        </CardContent>
      </Card>
      <Card className="rounded-3xl p-5 min-w-[350px] h-max">
        <CardContent className="space-y-2">
          <h2 className="text-[20px] font-semibold">Address Details</h2>
        </CardContent>
      </Card>
    </div>
  );
}
