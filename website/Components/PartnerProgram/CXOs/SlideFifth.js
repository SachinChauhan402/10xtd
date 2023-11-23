import React from "react";

export const SlideFifth = () => {
  return (
    <div className="relative h-screen w-full bg-grey-310">
      <div className="bg-red-300 p-2 inline-block">
        <p className="text-white text-xs md:text-xl">
          Global Partner Program for CXOs
        </p>
        <p className="text-white text-sm font-semibold md:text-3xl lg:font-normal">
          Insights
        </p>
      </div>
      <div className="flex flex-col lg:mt-8 xl:flex-row  xl:w-3/5  w-1/2 mt-5 ml-2">
        <div className="border-2 p-2 relative border-dashed radius-13 border-white xl:w-3/5 lg:h-auto xl:ml-9 h-3/4 w-full mt-2 ml-4">
          <img
            className="h-7 xl:h-12 xl:ml-8 xl:mt-7 ml-3 mt-3"
            src="/images/consulting.png"
            alt="consulting"
          />
          <p className="text-white xl:mt-2 xl:ml-12 lg:text-2xl font-light ml-8 text-sm">
            Leadership
            <br /> Insights Series
          </p>
          <div className="h-12 xl:h-24 lg:-right-12 lg:top-16  xl:w-24 w-12 top-9 -right-6 absolute  rounded-full bg-white">
            <img
              className="h-8 xl:h-16 xl:w-16 xl:ml-4 xl:mt-4 ml-2 mt-2 absolute w-8"
              src="/images/video.png"
              alt="video"
            />
          </div>
          <ul className="text-white text-xxs  lg:text-sm xl:ml-12 lg:mt-0 xl:p-3 ml-8 mt-1 list-disc">
            <li>CXOs sharing their insights with the network</li>
            <li>Key pointers for discussion shared by the interviewer</li>
            <li>One on One discussion recorded</li>
            <li>Content review & edit</li>
            <li>Content distribution with the 10XTD Network </li>
          </ul>
        </div>

        <div className="border-2 p-2 relative border-dashed radius-13 border-white xl:ml-28 xl:h-auto xl:mt-2 h-2/3 xl:w-3/5 mt-10 w-full ml-4">
          <img
            className="h-7 ml-3 mt-3 xl:h-12 xl:ml-8 xl:mt-7"
            src="/images/ceo.png"
            alt="ceo"
          />
          <p className="text-white font-light ml-6 mt-1 text-sm xl:ml-12 lg:text-2xl">
            Live Expert <br />
            Session Series
          </p>
          <div className="h-12 top-9 -right-6 xl:h-24 xl:w-24  lg:-right-12 lg:top-16 absolute w-12   rounded-full bg-white">
            <img
              className="h-8 w-8 ml-2 mt-2 xl:ml-4 xl:mt-4 xl:h-16 xl:w-16 absolute"
              src="/images/video.png"
              alt="video"
            />
          </div>
          <ul className="text-white text-xxs xl:text-sm ml-6 mt-3 list-disc xl:ml-16 lg:mt-4 xl:p-1">
            <li>60 min live sessions for CXOs </li>
            <li>
              Specialist sharing insights on <br />
              digital capabilities of interest
            </li>
            <li>Engage target decision makers</li>
            <li>
              Session highlights reviewed, <br /> edited and shared with network
              <br /> of decision makers
            </li>
          </ul>
        </div>
      </div>

      <div className="h-full w-1/2 flex">
        <img
          className="h-1/3 w-1/3 ml-80 xl:h-full right-0 bottom-0 absolute"
          src="/images/modern-microphone.jpg"
          alt="modern-microphone"
        />
      </div>
    </div>
  );
};
