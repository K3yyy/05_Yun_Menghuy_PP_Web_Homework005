import DashboardSidebar from "@/components/dashboard-sidebar/dashboard-sidebar";
import SearchBar from "@/components/SearchBar";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12">
      {/* Sidebar */}
      <aside className="col-span-3 fixed top-0 left-0 h-full">
        <DashboardSidebar />
      </aside>

      {/* Main content */}
      <section className="col-span-9  ml-[500px] overflow-auto items-center flex flex-col">
        <SearchBar />
        <div>{children}</div>
      </section>
    </div>
  );
}
