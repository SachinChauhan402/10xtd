import React from "react";

const SlideFour = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="bg-blue-250 p-4 inline-block">
        <p className="text-white text-xs md:text-xl">
          Global Partner Program for Partner Teams & Independent Experts
        </p>
        <p className="text-white text-sm font-semibold md:text-2xl xl:text-3xl lg:font-normal">
          Opportunities
        </p>
      </div>
      <div className="mt-2 relative flex ">
        <div className="p-1 xl:ml-12 xl:w-2/5 xl:h-auto lg:p-3 shadow-2xl border-2 w-5/6 h-auto lg:h-3/5 radius-15 border-dashed border-blue-250 ml-5 mt-2 lg:w-1/2 absolute">
          <img
            className="h-8 xl:h-12 xl:ml-12 xl:mt-5 ml-2 mt-5"
            src="/images/verification.png"
            alt="verification"
          />
          <p className=" -mt-12 md:text-lg text-xs text-normal xl:text-lg xl:ml-32 xl:-mt-16 text-blue-600 ml-16">
            Profile Curation
          </p>
          <ul className="ml-16 md:text-lg list-disc mt-1 text-xs xl:ml-36 xl:text-sm">
            <li>
              Partner Teams & Independent Experts give their go-ahead for their
              respective profiles to the curation team of 10XTD
            </li>
            <li>
              The experienced pool of curators map the proposition of Partner
              Teams & Independent Experts
            </li>
            <li className="ml-12">
              Due diligence (what is really standing out)
            </li>
            <li className="ml-12">Services</li>
            <li className="ml-12">Customers</li>
          </ul>
          <img
            className="h-8 ml-1 mt-5 xl:h-12 xl:ml-12 xl:mt-7"
            src="/images/puzzle.png"
            alt="puzzle"
          />
          <p className="-mt-8 md:text-lg text-normal text-blue-600 text-xs ml-16 xl:text-lg xl:-mt-16 xl:ml-32">
            CXO Connect
          </p>
          <ul className="ml-16 xl:ml-36 md:text-lg xl:text-sm list-disc mt-2 text-xs">
            <li>
              Based on discussions with the partner , firm up the desired CXO{" "}
              Persona of Interest
            </li>
            <li>
              Curators from 10XTD will recommend the CXO profiles for further{" "}
              consideration by the partner
            </li>
            <li>
              Post alignment with the partner , positioning the partner
              proposition with the CXO
            </li>
            <li>Arranging for the walkthrough</li>
            <li>
              Beyond the walkthrough, nudging the stakeholders for realization{" "}
              within 100 days
            </li>
          </ul>
        </div>
      </div>
      <div className="h-full w-auto m-2  absolute lg:right-2 lg:opacity-100  lg:top-0 opacity-30 overflow-hidden">
        <img
          className="h-2/3 lg:h-full w-full  object-fit"
          src="/images/5329234.jpg"
          alt="5329234"
        />
      </div>
    </div>
  );
};

export default SlideFour;
