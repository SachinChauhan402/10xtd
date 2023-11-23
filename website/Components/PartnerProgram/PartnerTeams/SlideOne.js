import React from "react";

const SlideOne = () => {
  return (
    <div className="h-screen relative md:flex">
      <div className="h-1/2 w-full sm:h-3/5 md:h-full md:w-1/2 order-2 lg:w-2/5 lg:ml-40">
        <img
          className="w-full h-full"
          src="/images/missile.png"
          alt="missile"
        />
      </div>
      <div className="h-1/2 relative w-full  md:h-full md:w-1/2">
        <div>
          <p className="text-black flex mt-12 md:mt-80 xl:ml-20 justify-center xl:justify-start lg:text-3xl text-xl font-extrabold">
            10XTD
            <span
              style={{ color: "#ed6410", fontWeight: 500 }}
              className="ml-1"
            >
              Network
            </span>
          </p>

          <p className="text-lg  justify-center  xl:text-left p-1 xl:p-0 mt-0 flex xl:ml-20 xl:justify-start md:text-3xl text-blue-250 font-medium">
            Global Partner Program
          </p>
          <p className="text-lg  justify-center lg:mt-0 xl:text-left p-1 xl:p-0 -mt-3 flex xl:ml-20 xl:justify-start md:text-3xl text-blue-250 font-medium">
            Partner Teams/Independent Experts
          </p>

          <p
            style={{ color: "#7E7E7E" }}
            className="text-lg justify-center  xl:justify-start flex xl:ml-20 lg:text-2xl font-normal text-grey-300"
          >
            Your Growth Partner
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
