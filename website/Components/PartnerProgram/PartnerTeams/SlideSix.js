import React from "react";

const SlideSix = () => {
  return (
    <div className="relative h-screen w-full bg-grey-310">
      <div
        style={{ backgroundColor: "#0572BD" }}
        className=" text-white xl:w-1/2 xl:h-1/6 w-full h-16 text-xs"
      >
        <p className="text-xs xl:text-lg  xl:ml-9 2xl:mt-6 lg:mt-3 mt-2 ml-5 absolute">
          Global Partner Program for Partner Teams & Independent Experts
        </p>
        <p className="text-lg mt-8 ml-5 lg:mt-9 2xl:mt-12 xl:text-4xl xl:ml-9 mx-12 absolute">
          Insights
        </p>
      </div>
      <div className="flex  flex-col xl:flex-row lg:h-auto lg:w-1/2 h-1/2 w-1/2 lg:mt-8 mt-16 ml-2">
        <div className="border-2 relative p-2  border-dashed radius-13 border-white lg:w-3/5 xl:h-3/4 xl:ml-9 h-4/5 w-full lg:mt-3 -mt-12 ml-4">
          <img
            className="h-7 xl:h-12 lg:ml-3 lg:mt-4 ml-3 mt-3"
            src="/images/consulting.png"
            alt="consulting"
          />
          <p className="text-white lg:ml-12 lg:text-2xl font-light ml-8 text-sm">
            Leadership
            <br /> Insights Series
          </p>
          <div className="h-12 lg:h-20 lg:-right-11 lg:top-12 lg:w-20 w-12  absolute top-10 -right-6 rounded-full bg-white">
            <img
              className="h-8 lg:h-16 lg:w-16 lg:ml-2 lg:mt-2 ml-2 mt-2 absolute w-8"
              src="/images/video.png"
              alt="video"
            />
          </div>
          <ul className="text-white text-xxs lg:text-sm lg:ml-12 lg:mt-3 xl:p-1 ml-8 mt-3 list-disc">
            <li>
              The partner team/ independent expert has a compelling proposition
              for the CXO Persona
            </li>
            <li>
              Through the Leadership Insights Series , they share highlights of
              their proposition
            </li>
            <li>
              The content is further shared with the network of decision makers
            </li>
          </ul>
        </div>
        <div className="border-2 border-dashed p-2 radius-13 border-white relative lg:ml-20 xl:h-auto xl:mt-2 h-2/3 lg:w-3/5 mt-5 w-full ml-4">
          <img
            className="h-7 ml-3 mt-3 xl:h-12 lg:ml-3 xl:mt-7"
            src="/images/ceo.png"
            alt="ceo"
          />
          <p className="text-white font-light ml-6 mt-1 text-sm lg:ml-12 lg:text-2xl">
            Live Expert <br />
            Session Series
          </p>
          <div className="h-12 xl:h-20 xl:w-20 lg:-right-11 lg:top-12  absolute w-12 top-10 -right-6 rounded-full bg-white">
            <img
              className="h-8 w-8 ml-2 mt-2 lg:ml-2 lg:mt-2 xl:h-16 xl:w-16 absolute"
              src="/images/video.png"
              alt="video"
            />
          </div>

          <ul className="text-white text-xxs xl:text-sm ml-6 mt-3 list-disc lg:ml-12 lg:mt-4 xl:p-1">
            <li>60 min live sessions for CXOs </li>
            <li>
              Specialist sharing insights on digital capabilities of interest
            </li>
            <li>Engage target decision makers</li>
            <li>
              Session highlights reviewed, edited and shared with network of
              decision makers
            </li>
          </ul>
        </div>
      </div>

      <div className="h-full w-1/2 flex">
        <img
          className="h-2/6 w-1/3 ml-80 xl:h-full right-0 bottom-0 absolute"
          src="/images/modern-microphone.jpg"
          alt="modern-microphone"
        />
      </div>
    </div>
  );
};

export default SlideSix;
