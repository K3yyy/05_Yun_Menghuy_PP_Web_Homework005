import { menu_items } from "@/constant/menu";
import Link from "next/link";
import React from "react";
import NavbarLink from "./navbar-link";

export default function DashboardSidebar() {
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        {/* sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-gray-800">
          <div className="flex justify-center my-4">
            <img
              src="https://i.pinimg.com/736x/b8/80/73/b88073a07bf14ea3c5e423ecdb2c3d29.jpg"
              alt="Logo"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-gray-300">YourKeyy</p>
            <p className="text-sm text-gray-400">K3yy@gmail.com</p>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              {menu_items.map((item, index) => (
                <NavbarLink key={index} {...item} />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
