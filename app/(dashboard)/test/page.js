import React from "react";
import { Image } from "next/image";

export default function page() {
  return (
    <div>
      <div className="w-[450px] h-[300px] mt-8 relative flex flex-col justify-end">
        <div className=" rounded-xl flex flex-col-reverse justify-center items-center gap-5 w-[38%] h-[100%] bg-green-400 relative z-10 ml-10 ">
          <div className="w-[98%] rounded-xl translate-y-[-35px]  h-[75%] bg-red-500 absolute">
            <image></image>
          </div>
          <div className="w-[98%] rounded-xl  translate-y-[110px] h-[12%] bg-red-200 absolute">
            <p>ffdsgdg</p>
          </div>
        </div>
        <div className="w-[100%] flex items-center justify-end rounded-2xl h-[60%] bg-gray-200 absolute">
          <div className="w-[50%]  rounded-2xl h-[90%] bg-gray-400 absolute">
            <p>fasfsfafsfafsfwaff</p>
          </div>
        </div>
      </div>
    </div>
  );
}
