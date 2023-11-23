import React from "react";

const SlideFive = () => {
  return (
    <div className="relative h-screen w-full">
      <div
        style={{ backgroundColor: "#0572BD" }}
        className="bg-blue-600 2xl:w-2/5 lg:w-1/2 xl:h-24 text-white w-full h-16 text-xs"
      >
        <p className="text-xs mt-3 xl:text-lg ml-2 absolute">
          Global Partner Program for Partner Teams & Independent Experts
        </p>
        <p className="text-xl xl:ml-2 mt-8 xl:text-3xl xl:mt-11 ml-2 absolute">
          Visibility
        </p>
      </div>

      <div className="flex lg:gap-20 gap-5 w-full lg:w-1/2 m-5 lg:m-24">
        <div className="shadow-new-lgg lg:p-2 xl:h-72 flex-col flex items-center justify-center border-2 lg:w-2/5  w-2/5 h-auto radius-30 border-dashed border-blue-250">
          <img
            className="h-7 xl:h-16 2xl:ml-20 xl:w-16 lg:ml-12 lg:mt-2 2xl:mt-7 sm:h-12 sm:w-12 w-7 md:ml-32 sm:ml-24 mx-16 mt-3"
            src="/images/messages.png"
            alt="messages"
          />
          <p className="text-blue-600 sm:text-sm lg:text-2xl ml-6 mt-1 sm:mt-3 text-xs font-light">
            About the Global Partner Program
          </p>
          <ul className="list-disc xxs-font lg:mt-2  2xl:mt-2 sm:mt-3 ml-6 mt-1">
            <li className="xl:text-sm">
              Promoting partner proposition for customers and employees in the
              10XTD network
            </li>
            <li className="mt-1 xl:text-sm">
              Augmenting Social Profile of Partner
            </li>
          </ul>
        </div>
        <div className=" p-4 xl:h-72 flex-col flex items-center justify-center lg:w-2/5  shadow-new-lgg border-2 w-2/5 h-1/5 radius-30 border-dashed border-blue-250">
          <img
            className="h-7 xl:h-1/4 sm:h-12 2xl:ml-20 md:ml-36 lg:ml-16 sm:ml-24 mx-16 mt-3"
            src="/images/viral-marketing.png"
            alt="viral-marketing"
          />
          <p className="text-blue-600 lg:text-2xl xl:ml-5 xl:mt-10 sm:ml-20 md:ml-32 sm:text-sm ml-0 mt-1 text-xs font-light">
            10XTD Reach
          </p>
          <p className="text-xxs xl:ml-6 xl:mt-2 xl:text-sm ml-2 mt-1">
            Since 2017, 10XTD has grown as a network of CXOs, Entrepreneurs ,
            Experts and Talent
          </p>
        </div>
      </div>
      <div className="p-1 lg:p-2  shadow-new-lgg sm:w-1/2 xl:w-2/6  xl:h-auto  border-2 w-3/5 h-auto flex flex-col radius-30 border-dashed border-blue-600 lg:top-24 right-16 lg:right-24 bg-white absolute">
        <p className="text-blue-600 sm:text-sm lg:ml-7 ml-3 lg:text-2xl xl:mt-2 xl:mx-10 mt-2 text-xs font-light">
          Reach of the 10XTD Network is significant and continues to grow 
        </p>
        <div className="flex justify-between mt-4 -ml-2 lg:p-7  lg:mt-0 ">
          <div className="lg:w-44 w-28 lg:mr-3">
            <p className="font-extrabold text-xs ml-5  xl:text-xl -mt-2 ">
              75+
            </p>
            <hr className="border-1 border-blue-600 lg:w-20 w-12 ml-5 mt-1 " />
            <p className="text-xxs ml-5 mt-1  xl:text-sm font-medium">
              10XTD has supported 75+ organizations across India, Australia,
              Canada, Germany, Malaysia UK, USA
            </p>
          </div>
          <div className="lg:w-44 w-20">
            <p className="font-extrabold text-xs xl:text-xl  -mt-2">40000+</p>
            <hr className="border-1 border-blue-600 lg:w-20 w-12  mt-1" />
            <p className="text-xxs xl:text-sm  mt-2  font-medium">
              Followers in LinkedIn (persona of CXOs ,experts , talent in
              content, domain, tech & leadership) 
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-10 lg:mt-0 -ml-2 lg:p-7">
          <div>
            <p className="font-extrabold text-xs ml-5 -mt-8   xl:text-xl">
              1000+
            </p>
            <hr className="border-1 border-blue-600 lg:w-20 w-12 ml-5 mt-1 " />
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
            <hr className="border-1 xl:mt-2 border-blue-600 w-12 lg:w-24  mt-1" />
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
          <hr className="border-1 border-blue-600 w-20  mt-1 " />
          <p className="text-xxs xl:text-sm  mt-1 font-medium ">
            Subscribers receiving <br />
            content broadcasts 
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideFive;
