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
      <section className="col-span-12  ml-[250px] overflow-auto items-center flex flex-col">
        <div className="fixed top-0 z-10">
          <SearchBar />
        </div>
        <div className="mt-24">{children}</div>
      </section>
    </div>
  );
}
