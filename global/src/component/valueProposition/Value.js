// import React from "react";
// import "./value.css";

// function Value({ title, text, icon }) {
//   return (
//     <div className="valueProps">
//       <div className="value-icon">{icon}</div>
//       <div className="value-text">
//         <h2>{title}</h2>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// }

// export default Value;

import React from "react";

function Value({ title, text, icon }) {
  return (
    <div className="flex flex-row items-center gap-16 w-full">
      <div
        className="bg-white shadow-xl py-0 w-56 h-32 flex justify-center items-center"
        style={{ fontSize: "26px", color: "#ff0000" }}
      >
        {icon}
      </div>
      <div className="value-text">
        <h2 className="text-2xl text-[#001f41]  mx-auto text-left mt-12 md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto text-2xl mt-6 lg:text-2xl text-[#001f41] lg:leading-relaxed text-justify">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Value;
