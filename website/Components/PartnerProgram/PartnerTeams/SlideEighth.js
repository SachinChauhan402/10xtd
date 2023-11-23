import React from "react";

const SlideEighth = () => {
  return (
    <div className="relative w-full h-screen">
      <div>
        <div
          style={{ backgroundColor: "#0572BD" }}
          className="w-full xl:h-32 p-1 h-24 absolute"
        >
          <p className="text-xs mt-3 md:ml-12 sm:mt-5 xl:ml-24 xl:mt-7 sm:text-lg  text-white ml-1 absolute">
            Global Partner Program for Partner Teams & Independent Experts
          </p>
          <p className="mt-7 sm:mt-11 ml-1 xl:text-4xl xl:ml-24 xl:mt-14 xl:font-semibold md:ml-12 text-xl text-white">
            How Partners have benefited from 10XTD Global Partner Program
          </p>
        </div>
        <div className="flex flex-wrap xl:flex-nowrap">
          <div className="rounded-5xl xl:p-5 xl:w-72 lg:h-auto xl:mt-44 xl:ml-20  p-6 border-2 border-dashed border-blue-600 ml-8 mt-36 w-3/4 h-1/4 absolute shadow-9xl">
            <p className=" text-blue-600 lg:text-2xl lg:p-1 lg:ml-6 ml-1 sm:text-lg text-xs -mt-4 font-light">
              10XTD have identified multiple compelling opportunities
            </p>
            <ul className="text-xxs lg:text-lg xl:text-sm xl:font-normal lg:mt-2 lg:ml-7 sm:ml-6 sm:text-sm ml-1 list-disc mt-2 font-light">
              <li>For supply chain software partners</li>
              <li>
                For niche partners in collaboration engineering, ideation and
                graphic recording to deliver bootcamps for decision makers
              </li>
              <li>
                For multiple experts to provide inputs in digital transformation
                to top tier enterprises
              </li>
            </ul>
          </div>
          <div className="rounded-5xl p-6 xl:-mt-36 xl:w-1/5 lg:h-80 xl:ml-ml-26 border-2 bg-white border-dashed border-blue-600 ml-3 top-80 relative w-1/2 h-36 shadow-9xl">
            <p className="text-blue-600 lg:text-2xl lg:ml-6 sm:text-lg ml-1 text-xs -mt-4 font-light">
              Multiple independent experts have leveraged the live expert
              Sessions
            </p>
            <ul className="text-xxs sm:text-sm xl:text-sm xl:font-normal xl:mt-6 lg:text-lg lg:ml-6 sm:ml-6 ml-1 list-disc mt-3 font-light">
              <li>
                Experts have expanded their network with CXOs in India and
                overseas
              </li>
            </ul>
          </div>
          <div className="rounded-5xl xl:ml-24 xl:w-1/5 xl:mt-44 lg:h-80 p-6 border-2 border-dashed border-blue-600 bg-white ml-4 mt-80 sticky w-3/4 h-32 shadow-9xl">
            <p className="text-blue-600 lg:text-2xl lg:ml-6 sm:text-lg ml-1 text-xs -mt-2 font-light">
              Multiple current & aspiring CXOs have leveraged the leadership
              series
            </p>
            <ul className="text-xs xl:text-sm xl:font-normal xl:mt-6 lg:text-lg lg:ml-6 sm:text-sm sm:ml-6 ml-1 list-disc mt-3 font-light">
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

export default SlideEighth;
