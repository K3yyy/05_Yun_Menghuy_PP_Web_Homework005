import React from "react";
import CardComponent from "@/components/CardComponent";
import Link from "next/link";
import { getAllBooks } from "@/service/bookService";

export default async function DashboardPage() {
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
      href: "/cartoon",
    },
  ];

  return (
    <div>
      <h1 className="translate-x-[-250px] flex justify-center items-center font-bold w-[100px] text-center h-[30px]   rounded-lg ">
        Home
      </h1>
      <div className="flex flex-wrap justify-center gap-10 mt-[150px]">
        {books.map((book) => (
          <Link key={book.id} href={book.href}>
            <CardComponent book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
}
