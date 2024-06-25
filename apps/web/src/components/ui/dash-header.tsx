import React from "react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import { Breadcrumbs, Stack } from "@mui/material";
import { ChevronRight } from "lucide-react";
import { HEADER } from "@/lib/constants";

const DashHeader = () => {
  return (
    <header className="flex justify-between">
      <div className="space-y-2">
        <h1 className="text-[26px] font-semibold">John Smith Profile</h1>
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<ChevronRight size={20} color="#459AFF" />}
            aria-label="breadcrumb"
          >
            {HEADER.BREADCRUMBS.map((item, index) => (
              <Link
                className={`hover:underline text-sm ${index === HEADER.BREADCRUMBS.length - 1 ? "text-[#003FAD] " : ""}`}
                key="1"
                color="inherit"
                href={item.path}
              >
                {item.name}
              </Link>
            ))}
          </Breadcrumbs>
        </Stack>
      </div>
      <ul className="flex gap-10 items-center">
        {HEADER.NAV_ITEMS.map((link) => {
          return (
            <li key={link.name}>
              <Link href={link.path}>
                <Image src={link.icon} alt={link.name} width={20} height={20} />
              </Link>
            </li>
          );
        })}
        <Avatar alt="John Smith" src="/assets/profile.png" />
      </ul>
    </header>
  );
};

export default DashHeader;
