import React from "react";
import AboutHeadingImg from "../../assets/images/aboutHeading.jpg";
import MainButton from "../button/button";

function AboutHeading() {
  return (
    <div className=" m-auto flex flex-col-reverse my-20 gap-10 justify-center items-center lg:flex-row-reverse lg:w-4/5 lg:gap-0">
      <div className="w-full lg:w-1/2 lg:gap-0">
        <img className="w-4/5 mx-auto" src={AboutHeadingImg} alt="" />
      </div>
      <div className="w-full lg:w-1/2 text-justify">
        <h2 className="text-4xl text-[#001f41] w-3/4 mx-auto text-center md:text-5xl lg:text-6xl lg:w-full">
          We Are A Top Door Supervisory Firm With Over{" "}
          <span className="text-[#ff0000]">10 Years</span> Of Experience
        </h2>
        <p className="w-4/5 mx-auto text-2xl mt-8 lg:w-full lg:text-2xl lg:leading-relaxed">
          Global Total Security was established in February, 2013 and our
          Directors and Management team have more than 30 Years combined
          experience within the Security Industry. We stand as a pillar of trust
          and excellence in the realm of door supervisory services. Based in
          Manchester, our legacy of over a decade exemplifies our commitment to
          safeguarding businesses, patrons, and the community at large.
        </p>

        <h2 className="text-2xl text-[#001f41] w-3/4 mx-auto text-center mt-12 md:text-3xl lg:text-4xl">
          A Tradition of Excellence:
        </h2>
        <p className="w-4/5 mx-auto text-2xl mt-8 lg:text-2xl lg:w-full lg:leading-relaxed">
          Drawing inspiration from esteemed industry leaders, we've cultivated a
          legacy of excellence that mirrors our dedication to quality and
          service. With more than a decade of experience, we have fine-tuned our
          expertise to deliver unmatched security solutions.
        </p>
        {/* <div className="flex justify-center w-full md:mt-16">
          <MainButton text="Get a Quote" />
        </div> */}
      </div>
    </div>
  );
}

export default AboutHeading;
