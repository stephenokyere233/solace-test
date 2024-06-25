import { Button } from "@mui/base";
import { Card, CardContent } from "@mui/material";

export const MilitaryStatusDetails = () => {
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
