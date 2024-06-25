import { Button } from "@mui/base/Button";
import { Card, CardContent } from "@mui/material";
import React from "react";

export default function FinancialInfo() {
  return (
    <div className="space-y-10">
      <Card className="rounded-3xl p-5 min-w-[350px] h-max">
        <CardContent className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-[20px] font-semibold">Bank Information</h2>
            <Button className="bg-[#0F6CBD] rounded-lg px-4 p-2 w-[100px] text-sm text-white font-semibold">
              Edit
            </Button>
          </div>
          <div className="grid-cols-4 grid gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-[14px] text-[#737791]">Bank Name</p>
              <p className="font-semibold text-[#151D48]">CIB</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[14px] text-[#737791]">IBAN</p>
              <p className="font-semibold text-[#151D48]">12346546413216446</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
