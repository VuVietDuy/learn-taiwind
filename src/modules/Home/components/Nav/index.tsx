"use client";
import React, { useState } from "react";
import {
  HomeOutlined,
  InfoCircleOutlined,
  MenuOutlined,
  PlaySquareOutlined,
} from "@ant-design/icons";

const items = [
  {
    label: "Home",
    icon: <HomeOutlined className="text-2xl" />,
    active: true,
  },
  {
    label: "Movies",
    icon: <PlaySquareOutlined className="text-2xl" />,
  },
  {
    label: "About",
    icon: <InfoCircleOutlined className="text-2xl" />,
  },
];

export default function Nav() {
  const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false);
  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="flex justify-between items-center mx-4 md:block">
        <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right">
          PHIMMOI.NET
        </h4>
        <MenuOutlined
          className="cursor-pointer md:hidden"
          onClick={() => setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}
        />
      </div>

      <ul
        className={`mx-4 my-2 ${isNavMenuMobileOpen ? " hidden" : ""} md:block`}
      >
        {items.map((item, i) => (
          <li
            className={`flex p-2 justify-end items-center cursor-pointer ${
              item.active ? " bg-primary text-white" : " text-primary"
            }`}
            key={i}
          >
            <h3 className="mr-2">{item.label}</h3>
            {item.icon}
          </li>
        ))}
      </ul>
    </nav>
  );
}
