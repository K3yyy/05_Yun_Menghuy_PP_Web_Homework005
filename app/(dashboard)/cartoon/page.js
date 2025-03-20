import Image from "next/image";
import Link from "next/link";

export default async function CartoonCard() {
  const res = await fetch("https://nextjs-homework005.vercel.app/api/cartoon");
  const data = await res.json();
  console.log(data);

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-8">
      {data.payload.map((cartoon) => (
        <div
          key={cartoon.id}
          className="w-[300px] h-[400px] bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-full h-56 relative rounded-t-lg overflow-hidden bg-gray-200">
            <Image
              src={cartoon.image || "/default-cartoon.jpg"}
              alt={cartoon.ct_title || "Cartoon Cover"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              className="rounded-t-lg"
            />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {cartoon.ct_title || "Untitled Cartoon"}
            </h3>
            <p className="text-sm text-gray-600 mb-3 truncate">
              {cartoon.ct_description || "No description available."}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">
                {cartoon.created_at
                  ? new Date(cartoon.created_at).getFullYear()
                  : "Unknown Year"}
              </span>
              <Link
                href={`/cartoon/${cartoon.id}`}
                className="bg-blue-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Read full articl
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
