import { getBookById } from "@/service/bookService";
import Image from "next/image";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import BreadcrumbDetail from "@/components/breadCrumb/breadCumpDetail";

export default async function BookDetail({ params }) {
  const bookId = params.bookId;
  const response = await getBookById(bookId);
  const book = response?.payload;

  return (
    <>
      <BreadcrumbDetail book={book} />
      <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden p-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="relative w-full sm:w-56 h-72">
              {book.image ? (
                <Image
                  src={book.image}
                  alt={`Cover for ${book.book_title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center rounded-lg">
                  No Image Available
                </div>
              )}
            </div>

            <div className="flex-1 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold">
                {book.book_title}
              </h1>
              <p className="text-gray-600">
                By {book.book_author || "Unknown"}
              </p>
              <p className="text-sm text-gray-500">
                Published on{" "}
                {book.created_at
                  ? new Date(book.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Unknown"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">About This Book</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {book.description || "No description available."}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Additional Information</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Category ID: {book.book_cate_id}</li>
              <li>Book ID: {book.id}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
