import React from "react";

const SlideSeven = () => {
  return (
    <div className="relative h-screen w-full">
      <div
        style={{ backgroundColor: "#0572BD" }}
        className=" text-white w-full  lg:w-1/3 lg:h-32 h-16 text-xs"
      >
        <p className="text-xs mt-4 lg:w-96 xl:ml-2 xl:mt-3 lg:text-lg lg:mx-12  sm:mx-16 sm:mt-4 md:mx-28 ml-3 absolute">
          Global Partner Program for Partner Teams & Independent Experts
        </p>
        <p className="text-lg mt-7 ml-3 xl:mt-16 xl:ml-2 sm:mx-28 sm:mt-8 md:mx-40 mx-12 absolute lg:text-4xl lg:mx-24 lg:mt-12">
          Collaboration
        </p>
      </div>
      <div className="flex flex-col lg:flex-row h-4/5 w-full lg:h-full mt-2 absolute">
        <div className=" lg:w-1/3 lg:h-2/5 lg:mt-8 w-3/4 h-auto ml-10 mt-1">
          <img
            className="h-8 xl:h-16 xl:w-16 lg:h-12 lg:w-12 lg:ml-10 lg:mt-6 w-8 ml-5 mt-1"
            src="/images/tent.png"
            alt="tent"
          />
          <p className="text-blue-600 xl:ml-16 ml-6 -mt-1 lg:text-3xl lg:ml-10 text-sm font-light">
            Bootcamps for Decision Makers
          </p>
          <ul className="list-disc xl:text-base xl:font-light text-xxs md:p-2 xl:ml-20 ml-10 mt-1 lg:text-sm lg:mt-3 lg:ml-14">
            <li>
              Engagement format focused on surfacing problems & expectations ,
              harnessing collective wisdom, seeking alignment and action
              planning 
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-3/4 lg:ml-10 lg:-mt-32 h-2/3 mt-5 lg:h-full">
          <img
            className="h-full w-full lg:-mt-2"
            src="/images/close-up-people-working-office.jpg"
            alt="close-up-people-working-office"
          />
          <div className="h-1/3 lg:h-28 w-full bg-white xl:h-1/3 xl:-mt-32 -top-36 relative">
            <div
              style={{ backgroundColor: "#0572BD" }}
              className="w-full h-1/6 bg-blue-600"
            >
              <p className="text-white xl:text-lg xl:mt-2 font-semibold text-xs flex justify-center">
                Bootcamp - Indicative flow
              </p>
            </div>
            <hr className="mx-24 border-1 border-gray-500 xl:w-3/4 xl:mt-9 xl:mx-24 w-1/2 mt-3" />
            <p className="text-lg ml-40 xl:ml-96 -mt-4 text-blue-600">&gt;</p>
            <div className="h-1/2 w-2/3 lg:-mt-3 flex">
              <div className="lg:ml-24 xl:mt-6">
                <img
                  className="h-5 xl:h-12 ml-12 "
                  src="/images/meeting.png"
                  alt="meeting"
                />
                <p
                  style={{ color: "#0572BD" }}
                  className="text-blue-600 ml-5 xl:w-32 w-20 text-xxs font-semibold xl:text-xs"
                >
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
                <p
                  style={{ color: "#0572BD" }}
                  className="text-blue-600 xl:text-xs ml-1 w-16 text-xxs xl:w-32 font-semibold"
                >
                  Expert POV
                </p>
              </div>
              <div className="lg:ml-6 xl:mt-6">
                <img
                  className="h-5 ml-4 xl:h-12"
                  src="/images/rating.png"
                  alt="rating"
                />
                <p
                  style={{ color: "#0572BD" }}
                  className="text-blue-600 xl:w-20 xl:text-xs ml-1 text-xxs font-semibold"
                >
                  Knowledge <span className="ml-3 xl:ml-5">Wall</span>
                </p>
              </div>
              <div className="lg:ml-6 xl:mt-6">
                <img
                  className="h-5 ml-7 xl:h-12"
                  src="/images/lightbulb.png"
                  alt="lightbulb"
                />
                <p
                  style={{ color: "#0572BD" }}
                  className="text-blue-600 ml-6 text-xxs xl:text-xs font-semibold"
                >
                  Ideation
                </p>
              </div>
              <div className="lg:ml-6 xl:mt-6">
                <img
                  className="h-5 ml-7 xl:h-12"
                  src="/images/plan.png"
                  alt="plan"
                />
                <p
                  style={{ color: "#0572BD" }}
                  className="text-blue-600 ml-4 text-xxs xl:text-xs xl:w-32 w-16  font-semibold"
                >
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

export default SlideSeven;
