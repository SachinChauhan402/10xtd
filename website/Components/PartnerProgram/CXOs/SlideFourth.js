import React from "react";

export const SlideFourth = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="bg-red-300 p-2 inline-block">
        <p className="text-white text-xs md:text-xl">
          Global Partner Program for CXOs
        </p>
        <p className="text-white text-sm font-semibold md:text-3xl lg:font-normal">
          Visibility
        </p>
      </div>

      <div className="flex lg:gap-20 gap-10 w-full lg:w-1/2 m-5 lg:m-24">
        <div className="shadow-new-lg lg:p-2 xl:h-72 flex-col flex items-center justify-center border-2 lg:w-1/3  w-2/5 h-auto radius-30 border-dashed border-red-300">
          <img
            className="h-7 xl:h-16 xl:w-16 sm:h-12 sm:w-12 w-7 "
            src="/images/messages.png"
            alt="messages"
          />
          <p className="text-black sm:text-sm lg:text-3xl ml-3 mt-1 sm:mt-3 text-lg font-light">
            Augmenting Social Profile of CXOs
          </p>
        </div>
        <div className=" bg-white p-4 xl:h-72 flex-col flex items-center justify-center lg:w-1/3  shadow-new-sm border-2 w-2/5 h-1/5 radius-30 border-dashed border-red-300">
          <img
            className="h-7 xl:h-1/4 sm:h-12 "
            src="/images/viral-marketing.png"
            alt="viral-marketing"
          />
          <p className="text-red-300 xl:text-3xl mt-3  sm:text-sm  text-xs font-light">
            10XTD Reach
          </p>
          <p className="text-xxs mt-1 xl:text-sm">
            Since 2017, 10XTD has grown as a network of CXOs, Entrepreneurs ,
            Experts and Talent
          </p>
        </div>
      </div>
      <div className="p-1 lg:p-2 lg:top-24 top-72 right-24 lg:right-44 shadow-new-xxl sm:w-1/2 xl:w-2/6  xl:h-auto border-2 w-3/5 h-auto flex flex-col radius-30 border-dashed border-red-300   bg-white absolute">
        <p className="text-red-300 sm:text-sm lg:ml-7 ml-3 lg:text-2xl xl:mt-2 xl:mx-10 mt-2 text-xs font-light">
          Reach of the 10XTD Network is significant and continues to grow
        </p>
        <div className="flex justify-between mt-4 -ml-2 lg:p-7  lg:mt-0 ">
          <div className="lg:w-56 w-28">
            <p className="font-extrabold text-xs ml-5  xl:text-xl -mt-2 ">
              75+
            </p>
            <hr className="border-1 border-red-300 lg:w-20 w-12 ml-5 mt-1 " />
            <p className="text-xxs ml-5 mt-1  xl:text-sm font-medium">
              10XTD has supported 75+ organizations across India, Australia,
              Canada, Germany, Malaysia UK, USA
            </p>
          </div>
          <div className="lg:w-44 w-20">
            <p className="font-extrabold text-xs xl:text-xl  -mt-2">40000+</p>
            <hr className="border-1 border-red-300 lg:w-20 w-12  mt-1" />
            <p className="text-xxs xl:text-sm  mt-2  font-medium">
              Followers in LinkedIn (persona of CXOs , experts , talent in
              content, domain, tech & leadership)
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-12 lg:mt-2 -ml-2 lg:p-7">
          <div>
            <p className="font-extrabold text-xs ml-5 -mt-8   xl:text-xl">
              1000+
            </p>
            <hr className="border-1 border-red-300 lg:w-20 w-12 ml-5 mt-1 " />
            <p className="text-xxs xl:text-sm ml-5 mt-2 font-medium ">
              Profiles extensively <br />
              curated
            </p>
          </div>
          <div className="lg:w-44 w-20  -mt-12">
            <img
              className=" h-5 w-5   mt-2 xl:mt-5"
              src="/images/youtube.png"
              alt="youtube"
            />
            <p className="font-bold text-xs ml-6 relative xl:-mt-5 -mt-4">
              Youtube
            </p>
            <hr className="border-1 xl:mt-2 border-red-300 w-12 lg:w-24  mt-1" />
            <p className="text-xxs xl:text-sm xl:mt-2   font-medium">
              Growing viewership of the 10XTD YouTube channel focused on digital
              & talent
              <br />
              empowerment
            </p>
          </div>
        </div>
        <div className=" lg:ml-10 ml-3  -mt-12 lg:-mt-14">
          <p className="font-extrabold text-xs xl:text-xl mt-2 ">20000+</p>
          <hr className="border-1 border-red-300 w-20  mt-1 " />
          <p className="text-xxs xl:text-sm  mt-1 font-medium ">
            Subscribers receiving <br />
            content broadcasts 
          </p>
        </div>
      </div>
    </div>
  );
};
