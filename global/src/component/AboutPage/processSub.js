import React from "react";

function ProcessSub({ img, header, text }) {
  return (
    <div className="flex items-center h-full my-auto">
      <div className="h-auto text-center z-10">
        <p style={{ fontSize: "40px" }} className="text-white">
          {img}
        </p>
        <h2 className="text-2xl text-white mx-auto mt-10 md:text-3xl lg:text-3xl">
          {header}
        </h2>
        <p className="w-4/5 text-white mx-auto text-xl md:text-2xl mt-4 md:mt-8 lg:text-2xl lg:w-full lg:leading-relaxed">
          {text}
        </p>
      </div>

      <div className="absolute inset-0 bg-black opacity-10 z-5"></div>
    </div>
  );
}

export default ProcessSub;
