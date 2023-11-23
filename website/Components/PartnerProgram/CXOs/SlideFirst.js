import React from "react";

const SlideFirst = () => {
  return (
    <div className="container relative">
      <div
        className="incontainer "
        style={{ display: "flex", alignItems: "center" }}
      >
        <div>
          <img
            className="firstslideimage"
            src="/images/businessmen-holding-launching-rocket-icon.jpg"
            alt="Business Holding"
          />
        </div>
        <div className="titlecontainer">
          <p className="firstheading">
            <span style={{ fontWeight: 800 }}>10XTD</span>
            <span style={{ color: "#ed6410", fontWeight: 500 }}> Network</span>
          </p>
          <p className="globalheadingfirst">Global Partner Program for CXOs</p>
          <hr className="hrtaghorizontal" />
          <p className="growthpartner">Growth Partner</p>
        </div>
      </div>
      <div className="lg:right-24 lg:bottom-20 right-7 bottom-40 absolute w-44 xl:items-end text-sm font-bold text-black lg:w-60 ">
        <p className="lg:text-2xl text-sm font-bold ml-0 lg:-ml-1">10XTD</p>
        <hr className="lg:w-14 w-9 lg:-mt-4 -mt-3 border border-red-300 transform rotate-90 ml-8 lg:ml-12" />
        <p className="text-black text-smm lg:text-xxs leading-tight ml-14 lg:ml-20 lg:-mt-6 -mt-4 font-bold">
          Digital on Demand
          <br />
          Platform for Growth
          <br />
          Network of CXOs,
          <br />
          Entrepreneurs, Experts, Talent
        </p>
      </div>
    </div>
  );
};

export default SlideFirst;
