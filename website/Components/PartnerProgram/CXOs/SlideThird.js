import React from "react";

export const SlideThird = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="bg-red-300 p-4 inline-block">
        <p className="text-white text-xs md:text-xl">
          Global Partner Program for CXOs
        </p>
        <p className="text-white text-sm font-semibold md:text-2xl xl:text-3xl lg:font-normal">
          Opportunities
        </p>
      </div>
      <div className="mt-2 relative flex ">
        <div className=" shadow-2xl-red  p-1 xl:ml-12 xl:w-2/5 xl:h-auto lg:p-3 border-2 w-5/6 h-auto lg:h-3/5 radius-15 border-dashed border-red-300 ml-5 mt-2 lg:w-1/2 absolute">
          <img
            className="h-8 xl:h-12 lg:ml-12 lg:mt-8 ml-8 mt-5"
            src="/images/verification.png"
            alt="verification"
          />
          <p className=" -mt-12 text-xs text-normal lg:text-sm xl:ml-32 lg:-mt-20 text-red-300 ml-24">
            CXO Profile Curation
          </p>
          <ul className="ml-28 list-disc xl:w-80 mt-1 text-xs xl:ml-36 xl:text-sm">
            <li>
              CXOs give their go-ahead for their respective profiles to the
              curation team of 10XTD
            </li>
            <li>
              The experienced pool of curators map the proposition of CXOs
            </li>
          </ul>
          <img
            className="h-8 ml-7 mt-5 xl:h-12 lg:ml-12 lg:mt-20"
            src="/images/puzzle.png"
            alt="puzzle"
          />
          <p className="-mt-8 text-normal text-red-300 text-xs ml-24 lg:text-sm lg:-mt-28 xl:ml-32">
            Connecting CXOs with Opportunities from Network
          </p>
          <ul className="ml-28 xl:ml-36 xl:text-sm list-disc mt-2 text-xs">
            <li>Against new opportunities from the network</li>
            <li className="xl:w-80 xl:ml-10">
              The curation team matches the same with the proposition of CXOs
            </li>
            <li className="xl:w-80 xl:ml-10">
              Relevant opportunities are passed on to the CXOs their
              consideration
            </li>
            <li>Positioning Niche Partners</li>
            <li className="xl:w-80 xl:ml-10">
              Compelling Niche Partners are curated and positioned for
              consideration by the. CXOs
            </li>
          </ul>
        </div>
      </div>
      <div className="h-full w-auto m-2  absolute lg:right-12 lg:opacity-100  lg:top-0 opacity-30 overflow-hidden">
        <img
          className="h-2/3 lg:h-full w-full  object-fit"
          src="/images/5329234.jpg"
          alt="5329234"
        />
      </div>
    </div>
  );
};
