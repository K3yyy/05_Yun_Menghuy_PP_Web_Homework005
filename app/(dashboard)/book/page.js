import Image from "next/image";

export default async function BookCard() {
  const res = await fetch("https://nextjs-homework005.vercel.app/api/book");
  const data = await res.json();
  console.log(data);

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-8">
      {data.payload.map((book) => (
        <div
          key={book.id}
          className="w-[300px] h-[400px] bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-full h-56 relative rounded-t-lg overflow-hidden bg-gray-200">
            <Image
              src={book.image || "/book-cover.jpg"}
              alt={book.book_title || "Book Cover"}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {book.book_title || "Untitled Book"}
            </h3>
            <p className="text-sm text-gray-600 mb-3 truncate">
              {book.description || "No description available."}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500"></span>
              <button className="bg-blue-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Read full article
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
