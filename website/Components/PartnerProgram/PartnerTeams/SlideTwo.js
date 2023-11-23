import React from "react";

const SlideTwo = () => {
  return (
    <div className="h-screen flex relative">
      <div className="h-1/3 w-full xl:h-1/5 bg-white flex">
        <div className="h-1/3 xl:h-full w-1/5">
          <img
            className="h-full xl:h-full xl:-mt-3"
            src="/images/77880.jpg"
            alt="77880"
          />
        </div>
        <div className=" sm:flex-col  sm:ml-24 md:ml-5 md:mt-3 xl:ml-32">
          <p className="text-black md:text-3xl  flex justify-center xl:text-2xl lg:-mt-2 2xl:mt-1 text-lg mt-2 font-extrabold">
            10XTD
          </p>
          <p className=" text-xs flex justify-center lg:text-xl md:text-2xl 2xl:text-2xl text-gray-400">
            Network of CXOs, Entrepreneurs, Experts, Talent
          </p>
          <p className="text-sm md:text-xl flex justify-center lg:text-xl 2xl:text-2xl font-semibold text-blue-250">
            Areas of interest
          </p>
        </div>
      </div>

      <div className="h-cus-h-21 md:mt-32 bg-blue-250 w-full absolute 2xl:mt-28 lg:mt-24 xl:flex lg:h-2/3 xl:h-auto xl:w-full xl:flex-row flex flex-col mt-20">
        <div className="h-1/6 xl:h-1/3 xl:w-full">
          <p className="text-white text-xs md:p-3  xl:text-right md:text-2xl lg:ml-44 lg:text-2xl 2xl:text-3xl 2xl:ml-32 lg:mt-5 2xl:mt-20 xl:w-1/2 flex justify-center mt-2 font-normal">
            Global Partner Program for Partner Teams & Independent Experts
          </p>
          <p className="text-white w-56 md:w-80 md:ml-56 md:text-xl text-center xl:text-right text-xs ml-20 lg:text-xl 2xl:text-2xl lg:-mt-2 2xl:mt-5 xl:w-72 font-light flex xl:ml-56 justify-center ">
            Network initiatives supporting growth aspirations of partners
          </p>
        </div>

        <div className="flex   flex-col xl:w-1/2 2xl:mt-80 lg:mt-48 xl:ml-1 xl:text-center  xl:h-10 mt-4 mb-4 xl:absolute relative">
          <p className="text-yellow-570 md:text-lg md:mt-24 xl:text-xl xl:ml-32 xl:w-1/2 xl:mt-28 font-semibold text-xs flex justify-center tracking-wider">
            On-Demand Partner for CXOs & Entrepreneurs
          </p>
          <p className="text-yellow-570 md:text-lg xl:-ml-32 xl:text-lg font-light text-xs flex justify-center">
            Expert On Demand Tech staffing Leadership hiring
          </p>
        </div>

        <table className="border-t  lg:-ml-32 lg:border-l  md:text-xl text-xxs lg:text-sm 2xl:text-lg border-white w-full text-white font-light">
          <tr>
            <td className="px-5">
              {" "}
              <img
                className="h-7 w-16 lg:w-16 -ml-2 xl:h-12  mt-3 mb-2 "
                src="/images/leadership.png"
                alt="leadership"
              />
            </td>
            <td className="font-semibold">Connect</td>
            <td className="px-5">
              <ul className="list-disc">
                <li>One-on-one connects with CXOs in India and overseas</li>
                <li>
                  Nudging the stakeholders towards realization within 100 days
                  post walkthrough
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
                <li>Improving visibility through broadcasts </li>
                <li>
                  Content specialist support to augment leadership profiles &
                  blogs
                </li>
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
                <li>Experts, partners engaging CXOs</li>
                <li>Leaders expanding their professional network</li>
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
                <li>
                  Sharing proposition/ point of view through leadership Insights
                </li>
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
                <li>
                  Facilitate collaboration through reimagining boot camps 
                </li>
              </ul>
            </td>
          </tr>
          <tr rowSpan="2">
            <td>
              {" "}
              <img
                className="h-7  xl:h-12 xl:mt-6  mt-4 mb-2 px-3"
                src="/images/rating.png"
                alt="rating"
              />
            </td>
            <td className="text-yellow-570 font-semibold">
              Talent fulfillment
            </td>
            <td className="px-5">
              <ul className="list-disc mt-0 text-yellow-570">
                <li>
                  Categories include: Content Consulting, Design, Domain,
                  Leadership and Tech
                </li>
                <li className="mt-2">
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

export default SlideTwo;
