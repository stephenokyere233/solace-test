import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SideBar() {
  const links = [
    {
      icon: "/assets/icons/pie.svg",
      name: "link 1",
      path: "#",
    },
    {
      icon: "/assets/icons/sheet.svg",
      name: "link 2",
      path: "#",
    },
    {
      icon: "/assets/icons/user.svg",
      name: "link 3",
      path: "#",
    },
    {
      icon: "/assets/icons/box.svg",
      name: "link 4",
      path: "#",
    },
  ];
  return (
    <aside className="border max-w-[100px] border-[#E7EAEE] bg-[#fff] flex flex-col items-center py-5 gap-10 px-5">
      <Link href="/">
        <Image src="/assets/logo.svg" alt="Logo" width={40} height={40} />
      </Link>
      <nav>
        <ul className="flex flex-col gap-8">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link href={link.path}>
                  <Image src={link.icon} alt={link.name} width={25} height={25} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
