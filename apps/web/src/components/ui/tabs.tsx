import * as React from "react";
import { Tab as BaseTab } from "@mui/base/Tab";

export default function Tab({ value, label }: { value: number | string; label: string }) {
  return (
    <BaseTab
      slotProps={{
        root: ({ selected, disabled }) => ({
          className: `font-sans text-start ${
            selected
              ? "bg-[#F4F8FE] text-[#0058A9]"
              : "text-black bg-transparent hover:bg-[#F4F8FE] hover:text-[#0058A9]"
          } ${
            disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          } text-sm font-medium w-full p-4 border-0 rounded-xl focus:outline-none`,
        }),
      }}
      value={value}
    >
      {label}
    </BaseTab>
  );
}
