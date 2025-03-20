import BreadcrumbCartoon from "@/components/breadCrumb/breadCumpCartoon";
import Image from "next/image";

export default async function CartoonDetail({ params }) {
  const { cartoonId } = params;
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon/${cartoonId}`
  );
  const data = await res.json();
  const cartoon = data.payload;

  return (
    <>
      <div>
        <BreadcrumbCartoon cartoon={cartoon} />
      </div>
      <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden p-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="relative w-full sm:w-56 h-72">
              {cartoon.image ? (
                <Image
                  src={cartoon.image}
                  alt={`Cover for ${cartoon.ct_title}`}
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
                {cartoon.ct_title}
              </h1>
              <p className="text-gray-600">
                By: {cartoon.ct_creator || "Unknown"}
              </p>
              <p className="text-sm text-gray-500">
                Published on{" "}
                {new Date(cartoon.published_year).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">About This Cartoon</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {cartoon.ct_description || "No description available."}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Additional Information</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Genre ID: {cartoon.ct_genre_id || "N/A"}</li>
              <li>Cartoon ID: {cartoon.id}</li>
              <li>Views: {cartoon.view_count.toLocaleString()}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
