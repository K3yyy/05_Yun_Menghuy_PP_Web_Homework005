import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BookCard({ id, image, book_title, description }) {
  return (
    <div>
      <div className="w-[300px] h-[400px] bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div className="w-full h-56 relative rounded-t-lg overflow-hidden bg-gray-200">
          <Image
            src={image || "/book-cover.jpg"}
            alt={book_title || "Book Cover"}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {book_title || "Untitled Book"}
          </h3>
          <p className="text-sm text-gray-600 mb-3 truncate">
            {description || "No description available."}
          </p>

          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500"></span>

            <Link
              href={`/books/${id}`}
              className="bg-blue-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read full article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
