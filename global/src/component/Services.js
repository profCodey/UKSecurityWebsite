import React from "react";

function ServicesImage({ image, header, text }) {
  return (
    <div className="">

      <img src={image} alt="" className="w-full h-full object-cover" />
      <div className="bg-white w-full h-full relative bottom-20 left-20 pt-1 pl-4">
        <div className="px-10">
          <h2 className="text-2xl text-[#001f41] mx-auto mt-12 md:text-3xl lg:text-4xl">
            {header}
          </h2>
          <p className="w-4/5 mx-auto text-2xl mt-2 lg:text-2xl lg:w-full lg:leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesImage;
