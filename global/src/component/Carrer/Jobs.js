import React from "react";
import Job from "./Job";

function Jobs() {
  return (
    <>
      <div>
        <div>
          <h2 className="text-4xl text-[#001f41] w-3/4 mx-auto text-center md:text-5xl lg:text-6xl lg:w-1/2 mt-8">
            Check our current openings!
          </h2>
        </div>

        <div className="w-4/5 md:grid md:grid-cols-3 mx-auto gap-x-8 lg:gap-x-32 mt-8 md:mt-16 ">
          <div>
                      <Job
                          id= {1}
              field="Security"
              title="Door Supervisors"
              location="3-9 Hyde Road 
Manchester,
Postcode M12 6BQ 
United Kingdom "
            />
          </div>
          <div>
            <Job
            id= {2}
              field="Designer"
              title="Junior UI/UX Designer"
              location="3-9 Hyde Road 
Manchester,
Postcode M12 6BQ 
United Kingdom "
            />
          </div>
          <div>
                    <Job
                  id = {3}
              field="Managing"
              title="Account Manager"
              location="3-9 Hyde Road 
Manchester,
Postcode M12 6BQ 
United Kingdom "
            />
          </div>
        </div>
        <div className="w-3/4 mx-auto">
            <p className=" md:w-1/2 text-center font-thin text-3xl text-[#001f41] mx-auto lg:mt-10 md:text-3xl lg:text-4xl mb-16 mt-16">
              We are always looking for talented people -send us your resume and cover letter, we
              will get in touch with you.
            </p>
            <p className=" md:w-1/2 text-center font-thin text-3xl text-[#001f41] mx-auto lg:mt-10 md:text-3xl lg:text-4xl mb-32 mt-16">
              email -info@gmail.com
            </p>
        </div>
      </div>
    </>
  );
}

export default Jobs;
