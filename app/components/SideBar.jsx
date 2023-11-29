"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { MdLogout } from "react-icons/md";

export default function SideBar({ menuItems }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col p-5 bg-[#D3D3D3] min-h-screen w-full divide-y-2 divide-slate-700">
      <div className="flex flex-col justify-center items-center pb-5">
        <Image
          src="/assets/logo.png"
          alt="Logo Pilkades"
          width={50}
          height={50}
        />
        <h1 className="font-bold text-[#535353] pt-4 text-2xl">
          Pilkades Tarahan
        </h1>
      </div>
      <nav>
        <ul className="pt-10">
          {menuItems.map((item) => (
            <li key={item.name} className="py-3">
              <Link
                href={item.path}
                className={`flex justify-start items-center gap-3 ${
                  pathname === item.path ? "text-[#051A88]" : "text-black"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="pt-3">
          <button className="flex justify-start items-center gap-3">
            <MdLogout />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
