import React from "react";
import CardComponent from "@/components/CardComponent";
import Link from "next/link";

export default function DashboardPage() {
  const books = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/8c/d6/09/8cd60928b5a93efc3e03de88a75c8dde.jpg",
      title: "Book One",
      type: "Book",
      href: "/book",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/a5/a8/38/a5a838fa9aabdd10683a63b88f9489c9.jpg",
      title: "Book Two",
      type: "Cartoon",
      href: "/cartoon", // Added href for consistency
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-10 mt-[250px]">
      {books.map((book) => (
        <Link key={book.id} href={book.href || "#"}>
          <CardComponent book={book} />
        </Link>
      ))}
    </div>
  );
}
