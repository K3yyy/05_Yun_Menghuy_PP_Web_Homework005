import Link from "next/link";
import React from "react";
import NavbarLink from "./navbar-link";

export const HomeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2V7a1 1 0 011-1h14a1 1 0 011 1v3l2 2-9 9-9-9z"
      />
    </svg>
  );
};
export const BookIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4h16M4 6h16M4 8h16M4 10h16M4 12h16M4 14h16M4 16h16M4 18h16"
      />
    </svg>
  );
};
export const CartoonIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 2l4 5h3l4-5h-3l-2 3-2-3h-3z"
      />
    </svg>
  );
};

export default function DashboardSidebar() {
  const menu_items = [
    {
      label: "Dashboard",
      icon: <HomeIcon />,
      href: "/dashboard",
    },
    {
      label: "Book",
      icon: <BookIcon />,
      href: "/book",
    },
    {
      label: "Cartoon",
      icon: <CartoonIcon />,
      href: "/cartoon",
    },
    {
      label: "Movie and TV Show",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.5 3h19a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 6h20M7 18l2 2 4-4 4 4 2-2"
          />
        </svg>
      ),
      href: "#",
    },
    {
      label: "Plane",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 16l-4-4m0 0l-4 4m4-4V7m4 4l-4-4m4 4l-4 4"
          />
        </svg>
      ),
      href: "#",
    },
    {
      label: "Library",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"
          />
        </svg>
      ),
      href: "#",
    },
    {
      label: "CPU",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 12V4h12v10H6z"
          />
        </svg>
      ),
      href: "#",
    },
    {
      label: "Pen",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.828 2.828a4 4 0 010 5.656l-7.056 7.057-4.242.707.707-4.243L15.5 3.54a4 4 0 015.657 5.657L8.5 15.293 4 19.793v2h2l4-4 7.536-7.535a4 4 0 010-5.657z"
          />
        </svg>
      ),
      href: "#",
    },
    {
      label: "Music",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v10.5a4.5 4.5 0 1 1-1.5 3.5M12 3v10.5a4.5 4.5 0 0 1-1.5 3.5m1.5-6.5V3h4v11.25m-9 0v2.25"
          />
        </svg>
      ),
      href: "#",
    },
    {
      label: "Settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      href: "#",
    },
  ];

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
