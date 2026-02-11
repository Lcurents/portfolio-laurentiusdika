"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  House,
  PanelsTopLeft,
  NotebookText,
  MessageCircleMore,
} from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: <House size={18} />,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <PanelsTopLeft size={18} />,
    },
    {
      name: "Blogs",
      href: "/blogs",
      icon: <NotebookText size={18} />,
    },
    {
      name: "Chat",
      href: "/chat",
      icon: <MessageCircleMore size={18} />,
    },
  ];
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav
        className="
      flex items-center gap-1 p-1
      bg-[#E8DCC4]/90
      border border-red-700/20
      rounded-full
      shadow-lg- shadow-black/5
      backdrop-blur-md
      "
      >
        {navItems.map((item) => {
          const isActive = pathname == item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
              flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium
              ${
                isActive
                  ? "bg-[#C83E36] text-white shadow-sm"
                  : "text-gray-600 hover:text-[#C83E36] hover:bg-red-50/50"
              }
              `}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
