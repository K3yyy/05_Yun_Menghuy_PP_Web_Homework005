import React from "react";
import { Tag } from "lucide-react";

export default function CardComponent({ book }) {
  return (
    <div className="relative group bg-cover bg-center h-80 w-56 rounded-lg shadow-md overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${book?.image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute top-2 left-2 flex items-center gap-1 bg-gray-400 px-3 py-1 rounded-lg shadow-lg text-sm text-white">
        <Tag size={12} />
        {book?.type}
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
        {book?.type === "Book"
          ? "View All Available Books"
          : "View All Available Cartoons"}
      </div>
    </div>
  );
}
