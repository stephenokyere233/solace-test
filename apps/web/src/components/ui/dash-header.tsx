import React from "react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import { Breadcrumbs, Stack } from "@mui/material";
import { ChevronRight } from "lucide-react";

const DashHeader = () => {
  const links = [
    {
      icon: "/assets/icons/bell.svg",
      name: "link 1",
      path: "#",
    },
    {
      icon: "/assets/icons/mail.svg",
      name: "link 2",
      path: "#",
    },
    {
      icon: "/assets/icons/settings.svg",
      name: "link 3",
      path: "#",
    },
  ];
  return (
    <header className="flex justify-between">
      <div className="space-y-2">
        <h1 className="text-[26px] font-semibold">John Smith Profile</h1>
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<ChevronRight size={20} color="#459AFF" />}
            aria-label="breadcrumb"
          >
            <Link className="hover:underline" key="1" color="inherit" href="#">
              Dashboard
            </Link>
            <Link className="hover:underline" key="2" color="inherit" href="#">
              HR Manage
            </Link>
            <Link className="hover:underline" key="2" color="inherit" href="#">
              Employees
            </Link>
            <Link className="hover:underline" key="2" color="inherit" href="#">
              John Smith profile
            </Link>
          </Breadcrumbs>
        </Stack>
      </div>
      <ul className="flex gap-10 items-center">
        {links.map((link) => {
          return (
            <li key={link.name}>
              <Link href={link.path}>
                <Image src={link.icon} alt={link.name} width={20} height={20} />
              </Link>
            </li>
          );
        })}
        <Avatar alt="Stephen Okyere" src="/assets/profile.png" />
      </ul>
    </header>
  );
};

export default DashHeader;
