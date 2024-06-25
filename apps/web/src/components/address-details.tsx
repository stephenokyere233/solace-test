import { Button } from "@mui/base";
import { Card, CardContent } from "@mui/material";

export const AddressDetails = () => {
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
