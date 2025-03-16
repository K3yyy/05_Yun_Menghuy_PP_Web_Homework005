"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

Link;
export default function NavbarLink(item) {
  const pathname = usePathname();
  console.log("pathname:", pathname);
  return (
    <>
      <Link
        href={item.href}
        className={`flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 ${
          pathname === item.href ? "bg-slate-600" : "bg-none"
        }`}
      >
        {item.icon}
        {item.label}
      </Link>
    </>
  );
}
