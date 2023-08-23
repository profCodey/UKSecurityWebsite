import React from "react";

function CareerHeading() {
  return (
    <div className="">
      <h2 className="text-4xl text-[#001f41] w-3/4 mx-auto text-center md:text-5xl lg:text-6xl lg:w-1/2 mt-32">
        Why Work With Us?
      </h2>
      <p className="text-center w-4/5 mx-auto text-2xl mt-8 lg:w-3/5 lg:text-2xl lg:leading-relaxed">
        At Global Total Security Limited, we're not just offering a job – we're
        extending an invitation to become a vital part of our mission to ensure
        top-tier door security across the UK. When you choose to be a part of
        our team, you're choosing to uphold safety, create secure environments,
        and be a cornerstone of our nation's protection. Join us and contribute
        to the forefront of door security in the UK – a place where your
        dedication is valued and your commitment to safety is celebrated. <br />
      </p>
      {/* <h2 className="text-4xl text-[#001f41] w-3/4 mx-auto text-center md:text-5xl lg:text-6xl lg:w-1/2 mt-32">
        Why work with us?
      </h2> */}

      <div className="flex flex-col lg:flex-row w-3/4 lg:w-6/5 gap-16 mx-auto">
        <div className="w-full h-full  text-center flex flex-col justify-center items-center py-10 my-4">
          <div>
            <div></div>
            <div>
              <h2 className="text-left text-2xl text-[#001f41] mx-auto mt-10 md:text-3xl lg:text-3xl">
                Healthcare & Well-being
              </h2>
              <p className="text-left text-2xl mt-2 lg:text-2xl lg:w-full lg:leading-relaxed">
                We prioritize the well-being of our team members. Our
                comprehensive healthcare benefits ensure you and your family are
                taken care of, allowing you to focus on safeguarding others.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full  text-center flex flex-col justify-center items-center py-10 my-4">
          <div>
            <div></div>
            <div>
              <h2 className="text-left text-2xl text-[#001f41] mx-auto mt-10 md:text-3xl lg:text-3xl">
                Professional Growth
              </h2>
              <p className="text-left text-2xl mt-2 lg:text-2xl lg:w-full lg:leading-relaxed">
                At Global Total Security, your growth is our priority. We offer
                continuous training, skill development, and advancement within
                the esteemed door supervisory field.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full  text-center flex flex-col justify-center items-center py-10 my-4">
          <div>
            <div></div>
            <div>
              <h2 className="text-left text-2xl text-[#001f41] mx-auto mt-10 md:text-3xl lg:text-3xl">
                Supportive Community
              </h2>
              <p className="text-left text-2xl mt-2 lg:text-2xl lg:w-full lg:leading-relaxed">
                You are not just an employee with us– you are part of a
                supportive community united by a common goal. We foster teamwork
                and camaraderie among our professionals, creating a
                collaborative environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerHeading;
