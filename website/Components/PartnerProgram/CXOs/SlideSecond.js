import React from "react";

export const SlideSecond = () => {
  return (
    <div className="relative h-screen flex">
      <div className="h-1/3 w-full xl:h-1/5 bg-white flex">
        <div className="h-1/3 xl:h-full w-1/5">
          <img
            className="h-full xl:h-full xl:-mt-3"
            src="/images/77880.jpg"
            alt="77880"
          />
        </div>
        <div className=" sm:flex-col  sm:ml-24 md:ml-5 md:mt-3 xl:ml-32">
          <p className="text-black md:text-3xl  flex justify-center xl:text-3xl xl:mt-5 text-lg mt-5 font-extrabold">
            10XTD
          </p>
          <p className=" text-xs flex justify-center md:text-2xl xl:text-2xl text-red-300">
            Network of CXOs, Entrepreneurs, Experts, Talent
          </p>
        </div>
      </div>

      <div className="h-cus-h-21 md:mt-32 bg-red-300 w-full absolute xl:mt-28 xl:flex xl:h-auto xl:w-full xl:flex-row flex flex-col mt-20">
        <div className="h-1/6 xl:h-1/3 xl:w-full">
          <p className="text-white text-sm xl:text-right md:text-3xl xl:text-5xl xl:ml-32 xl:mt-12 xl:w-1/2 flex justify-center mt-2 font-normal">
            Global Partner Program
          </p>
          <p className="text-white w-56 md:w-80 md:ml-56 md:text-xl text-center xl:text-right text-xs ml-24 xl:text-2xl xl:mt-5 xl:w-72 font-light flex xl:ml-56 justify-center ">
            is designed with the primary objective of being the Growth Partner
            for CXOs
          </p>
        </div>

        <div className="flex flex-col xl:w-1/2 2xl:bottom-44 xl:ml-1 lg:mt-80 xl:text-center  xl:h-10 mt-4 mb-4 xl:absolute relative">
          <p className="text-yellow-570 md:text-lg md:mt-24 xl:text-xl xl:ml-32 xl:w-1/2 lg:mt-0 2xl:mt-28 font-semibold text-xs flex justify-center tracking-wider">
            On-Demand Partner for CXOs & Entrepreneurs
          </p>
          <p className="text-yellow-570 md:text-lg xl:-ml-32 xl:text-lg font-light text-xs flex justify-center">
            Expert On Demand Tech staffing Leadership hiring
          </p>
        </div>

        <table className=" lg:-ml-32 lg:border-l  md:text-xl text-xs lg:text-sm 2xl:text-lg border-white w-full text-white font-light">
          <tr>
            <td className="px-5">
              {" "}
              <img
                className="h-7 w-24  lg:w-16 -ml-2 xl:h-12  mt-3 mb-2 "
                src="/images/leadership.png"
                alt="leadership"
              />
            </td>
            <td className="font-semibold">Connect</td>
            <td className="px-5">
              <ul className="list-disc">
                <li>
                  Connecting with CXO opportunities & compelling niche partners
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-t  border-dashed border-1">
            <td>
              {" "}
              <img
                className="h-7  xl:h-12  mt-3 mb-2 px-3"
                src="/images/value.png"
                alt="value"
              />
            </td>
            <td className="font-semibold">Visibility</td>
            <td className="px-5">
              <ul className="list-disc">
                <li>Augmenting Social Profile of CXOs</li>
                <li>Add In-Depth CXO C.V Review /Redesign</li>
              </ul>
            </td>
          </tr>
          <tr className="border-t border-dashed border-1">
            <td>
              {" "}
              <img
                className="h-7  xl:h-12  mt-3 mb-2 px-3"
                src="/images/ceo.png"
                alt="ceo"
              />
            </td>
            <td className="font-semibold">Live Expert Sessions</td>
            <td className="px-5">
              <ul className="list-disc">
                <li>
                  CXOs engaging their peers & expanding their professional
                  network
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-t border-dashed border-1">
            <td>
              {" "}
              <img
                className="h-7  xl:h-12  mt-3 mb-2 px-3"
                src="/images/consulting.png"
                alt="consulting"
              />
            </td>
            <td className="font-semibold">Leadership Insights</td>
            <td className="px-5">
              <ul className="list-disc">
                <li>Sharing CXO insights to a wider global audience</li>
              </ul>
            </td>
          </tr>
          <tr className="border-t border-dashed border-1">
            <td>
              {" "}
              <img
                className="h-7  xl:h-12  mt-3 mb-2 px-3"
                src="/images/tent.png"
                alt="tent"
              />
            </td>
            <td className="font-semibold">Bootcamps</td>
            <td className="px-5">
              <ul className="list-disc">
                <li>Facilitate collaboration through reimagine bootcamps</li>
              </ul>
            </td>
          </tr>
          <tr rowSpan="2">
            <td>
              {" "}
              <img
                className="h-7  xl:h-12 2xl:mt-6 lg:mt-2 mt-4 mb-2 px-3"
                src="/images/rating.png"
                alt="rating"
              />
            </td>
            <td className="text-yellow-570 font-semibold">
              Talent fulfillment
            </td>
            <td className="px-5">
              <ul className="list-disc 2xl:mt-2 lg:-mt-2 text-yellow-570">
                <li>
                  Categories include: Content Consulting, Design, Domain,
                  Leadership and Tech
                </li>
                <li className="mt-0 2xl:mt-2">
                  Sponsors include: Global Thought Leaders, Emerging
                  Enterprises, Global Corporations
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
