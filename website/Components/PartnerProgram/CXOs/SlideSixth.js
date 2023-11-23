import React from "react";

const SlideSixth = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="bg-red-300 p-2 inline-block">
        <p className="text-white text-xs md:text-xl">
          Global Partner Program for CXOs
        </p>
        <p className="text-white text-sm font-semibold md:text-3xl lg:font-normal">
          Collaboration
        </p>
      </div>
      <div className="flex flex-col lg:flex-row h-4/5 w-full lg:h-full mt-1 absolute">
        <div className="shadow-new-lg p-1 border-2 lg:w-1/3 lg:h-3/5 lg:mt-1 w-3/4 h-2/5 radius-30 border-dashed border-red-300 ml-10 mt-1">
          <img
            className="h-8 xl:h-16 xl:w-16 lg:h-12 lg:w-12 lg:ml-10 lg:mt-2 w-8 ml-5 mt-4"
            src="/images/tent.png"
            alt="tent"
          />
          <p className="text-red-300 xl:w-full xl:ml-16 ml-6 mt-1 lg:text-2xl lg:ml-10 text-sm font-light">
            Bootcamps for CXOs
          </p>
          <ul className="list-disc lg:text-lg xl:font-light text-xxs md:p-2 xl:ml-20 ml-10 mt-3 lg:mt-1 lg:ml-14">
            <li>
              Engagement format focused on surfacing problems & expectations ,
              harnessing collective wisdom, seeking alignment and action
              planning 
            </li>
            <li className="mt-3">
              Executed by a team of experts in digital transformation, ideation
              , collaboration engineering , graphic recording
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-3/5 lg:ml-10 lg:-mt-20 h-2/3 mt-12 lg:h-full">
          <img
            className="h-full w-full lg:mt-0"
            src="/images/close-up-people-working-office.jpg"
            alt="close-up-people-working-office"
          />
          <div className="h-1/3 lg:h-28 w-full bg-white xl:h-1/3 xl:-mt-32 -top-36 relative">
            <div className="w-full h-1/6 bg-red-300">
              <p className="text-white xl:text-lg xl:mt-2 font-semibold text-xs flex justify-center">
                Bootcamp - Indicative flow
              </p>
            </div>
            <hr className="mx-24 border-1 border-gray-500 xl:w-3/4 xl:mt-9 xl:mx-24 w-1/2 mt-3" />
            <p className="text-lg ml-40 xl:ml-96 -mt-4 text-red-300">&gt;</p>
            <div className="h-1/2 lg:-mt-2 w-2/3 flex">
              <div className="lg:ml-24 xl:mt-6">
                <img
                  className="h-5 xl:h-12 ml-12 "
                  src="/images/meeting.png"
                  alt="meeting"
                />
                <p className="text-red-300 ml-5 xl:w-32 w-20 text-xxs font-semibold xl:text-xs">
                  Engage decision
                  <br /> <span className="ml-5">makers</span>
                </p>
              </div>
              <div className="lg:ml-6 xl:mt-6">
                {" "}
                <img
                  className="h-5 ml-4 xl:h-12"
                  src="/images/point-of-view.png"
                  alt="point-of-view"
                />
                <p className="text-red-300 lg:text-xs ml-1 w-16 text-xxs xl:w-32 font-semibold">
                  Expert POV
                </p>
              </div>
              <div className="lg:ml-6 xl:mt-6">
                <img
                  className="h-5 ml-4 xl:h-12"
                  src="/images/rating.png"
                  alt="rating"
                />
                <p className="text-red-300 xl:w-20 lg:text-xs ml-1 text-xxs font-semibold">
                  Knowledge <span className="ml-3 xl:ml-5">Wall</span>
                </p>
              </div>
              <div className="lg:ml-6 xl:mt-6">
                <img
                  className="h-5 ml-7 xl:h-12"
                  src="/images/lightbulb.png"
                  alt="lightbulb"
                />
                <p className="text-red-300 ml-6 text-xxs xl:text-xs font-semibold">
                  Ideation
                </p>
              </div>
              <div className="lg:ml-6 xl:mt-6">
                <img
                  className="h-5 ml-7 xl:h-12"
                  src="/images/plan.png"
                  alt="plan"
                />
                <p className="text-red-300 ml-4 text-xxs xl:text-xs xl:w-32 w-16  font-semibold">
                  Action Plan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideSixth;
