import React from "react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";

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
      <div>
        <h1 className="text-2xl font-semibold">John Smith Profile</h1>
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
