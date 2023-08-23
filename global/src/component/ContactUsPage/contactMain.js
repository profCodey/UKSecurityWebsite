import React from "react";
import Socials from "../socials/socials";
import MainButton from "../button/button";

function ContactMain() {
  return (
    <div className="container flex flex-col w-4/5 mx-auto pt-0 md:py-32 lg:flex-row gap-32 lg:gap-32 mb-8">
      <div className="lg:w-1/2">
        <h2 className="hidden lg:block text-4xl text-[#001f41] w-3/4 mx-auto text-center md:text-5xl lg:text-6xl mb-10">
          Get in Touch with Us
        </h2>
        <p className=" text-2xl mt-2 lg:text-2xl lg:w-full lg:leading-relaxed">
          Thank you for your interest in Global Total Security Limited. If you
          have any questions, inquiries, or would like to request a quote for
          our door supervisory services, we would love to hear from you. Here are the
          ways you can get in touch with us:
        </p>

        <div className="md:grid md:grid-cols-2 justify-between ">
          <div>
            <h2 className="text-2xl text-[#001f41] mx-auto mt-10 md:text-3xl lg:text-3xl">
              Our Address
            </h2>
            <p className=" text-2xl mt-2 lg:text-2xl lg:w-full lg:leading-relaxed">
              3-9 Hyde Road Manchester, <br /> Postcode M12 6BQ, United Kingdom{" "}
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-[#001f41] mx-auto mt-10 md:text-3xl lg:text-3xl">
              Our Phone
            </h2>
            <p className=" text-2xl mt-2 lg:text-2xl lg:w-full lg:leading-relaxed">
              01 616 690 880, +44 7862038656 <br />
              +44 7404 749549, +44 7878 251590
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-[#001f41] mx-auto mt-10 md:text-3xl lg:text-3xl">
              Our Email
            </h2>
            <p className=" text-2xl mt-2 lg:text-2xl lg:w-full lg:leading-relaxed">
              info@gmail.com
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-[#001f41] mx-auto mt-10 md:text-3xl lg:text-3xl">
              Follow Us
            </h2>
            <p className="mt-2">
              <Socials justifyContent="left" fontSize="2.5rem" />
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2">
        <form action="" className="">
          <h2 className="lg:hidden text-3xl text-[#001f41] w-3/4 mx-auto text-center md:text-5xl lg:text-6xl mb-10">
            Get in Touch with Us
          </h2>
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-16">
            <div>
              <input
                className="h-16 w-full text-2xl md:text-2xl lg:text-2xl px-6 placeholder:text-2xl outline-none"
                style={{ border: "1px solid #ff9d2f" }}
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="">
              <input
                className="h-16 w-full text-2xl md:text-3xl lg:text-2xl px-6 placeholder:text-2xl outline-none"
                style={{ border: "1px solid #ff9d2f" }}
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="">
              <input
                className="h-16 w-full text-2xl  md:text-3xl lg:text-2xl  px-6 placeholder:text-2xl outline-none"
                style={{ border: "1px solid #ff9d2f" }}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="">
              <input
                className="h-16 w-full text-2xl md:text-3xl lg:text-2xl  px-6 placeholder:text-2xl outline-none"
                type="phone"
                style={{ border: "1px solid #ff9d2f" }}
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="">
            <textarea
              className="h-48 w-full text-2xl md:text-3xl lg:text-2xl  px-6 placeholder:text-2xl outline-none mt-16 py-4"
              type="text"
              style={{ border: "1px solid #ff9d2f" }}
              placeholder="Message"
            />
          </div>
          <div className="mt-8">
            <MainButton
              text="Send Message"
              width="100%"
              height="50px"
              borderRadius="0px"
              backgroundColor="var(--color-primary)"
              color="white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMain;
