import { Card, CardContent } from "@mui/material";
import React from "react";

export default function FinancialInfo() {
  return (
    <div className="space-y-10">
      <Card className="rounded-3xl p-5 min-w-[350px] h-max">
        <CardContent className="space-y-2">
          <h2 className="text-[20px] font-semibold">Bank Information</h2>
        </CardContent>
      </Card>
    </div>
  );
}
