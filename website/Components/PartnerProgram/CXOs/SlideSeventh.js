import React from "react";

export const SlideSeventh = () => {
  return (
    <div className="relative w-full h-screen">
      <div>
        <div className="bg-red-300 p-2">
          <p className="text-white text-xs md:text-xl">
            Global Partner Program for CXOs
          </p>
          <p className="text-white text-sm font-semibold md:text-3xl lg:font-normal">
            How CXOs have benefited from 10XTD Global Partner Program
          </p>
        </div>
        <div className="flex mt-12 lg:mt-20 gap-6 lg:gap-24 lg:ml-32 ml-8 absolute flex-wrap">
          <div className="rounded-5xl xl:w-1/5 lg:h-auto   p-6 border-2 border-dashed border-red-300  w-3/4 h-1/4 shadow-10xl">
            <p className=" text-red-300 xl:text-2xl xl:ml-0 xl:mt-0 lg:text-xl lg:ml-6 ml-1 sm:text-lg text-xs -mt-2 font-light">
              10XTD have identified multiple compelling opportunities
            </p>
            <ul className="text-xxs lg:text-base xl:ml-5 xl:font-light  lg:mt-1 lg:ml-11 sm:ml-6 sm:text-sm ml-1 list-disc mt-8 font-light">
              <li>For CXOs primarily CDOs, CIOs, CTOs </li>
              <li>
                For multiple experts to provide inputs in digital transformation
                to top tier enterprises
              </li>
            </ul>
          </div>
          <div className="rounded-5xl p-6  xl:w-1/5 lg:h-auto  border-2 bg-white border-dashed border-red-300  w-1/2 h-36 shadow-10xl">
            <p className="text-red-300  lg:text-2xl lg:ml-6 xl:ml-0 xl:mt-3 sm:text-lg ml-1 text-xs -mt-4 font-light">
              Multiple independent experts have leveraged the live expert
              Sessions
            </p>
            <ul className="text-xxs sm:text-sm  xl:ml-5 xl:font-light xl:mb-1 lg:mt-5 lg:text-base lg:ml-11 sm:ml-6 ml-1 list-disc mt-3 font-light">
              <li>
                Experts have expanded their network with CXOs in India and
                overseas
              </li>
            </ul>
          </div>
          <div className="rounded-5xl xl:w-1/5  lg:h-auto p-6 border-2 border-dashed border-red-300 bg-white w-3/4 h-32 shadow-11xl">
            <p className="text-red-300 xl:w-56 lg:text-2xl lg:-mt-1 xl:ml-0 lg:ml-6 sm:text-lg ml-1 text-xs -mt-2 font-light">
              Multiple current & aspiring CXOs have leveraged the leadership
              series
            </p>
            <ul className="text-xs xl:font-light lg:mt-2 lg:text-base xl:ml-5 lg:ml-11 sm:text-sm sm:ml-6 ml-1 list-disc mt-3 font-light">
              <li>
                The insights shared with key decision makers did reinforce the
                proposition & improve visibility
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
