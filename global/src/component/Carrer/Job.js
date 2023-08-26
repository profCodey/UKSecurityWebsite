import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";



function Job({field, title, location, link, id}) {
  return (
    <div className='mb-16 md:mb-auto'>
      <div className="">
        <div className="bg-[#ff9d2f] w-full h-16 flex justify-center items-center">
          <h1 className="text-center text-2xl text-white mx-auto  md:text-3xl lg:text-3xl">
            {field}
          </h1>
        </div>
        <div className="mt-12 md:mt-16">
          <h1 className="text-center md:text-left text-3xl text-[#001f41] mx-auto  md:text-3xl lg:text-4xl">
            {title}
          </h1>
          <div className="flex items-start gap-2 md:gap-4 mt-3 justify-center md:justify-left">
            <div className="">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <p className="text-center md:text-left text-[#001f41] text-2xl font-thin lg:text-2xl lg:w-full lg:leading-relaxed ">
                {location}
              </p>
            </div>
          </div>
        </div>
      {id % 2 !== 0 ?  <hr className="my-12 md:my-16 border border-1"
        /> : ''}
      </div>
    </div>
  );
}

export default Job