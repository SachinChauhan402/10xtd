import React from "react";

const SlideThirdone = () => {
  return (
    <div className="relative h-full">
      <div className="bg-red-300 p-2 inline-block">
        <p className="text-white text-xs md:text-2xl">
          Global Partner Program for CXOs
        </p>
        <p className="text-white text-sm font-semibold md:text-2xl lg:font-normal">
          In-Depth CXO CV Review /Redesign
        </p>
      </div>
      <div className="p-5 md:mt-16 lg:mt-4 lg:ml-12">
        <img
          className="h-12 w-12 md:h-12 md:w-12"
          src="/images/feedbackimage.jpg"
          alt="feedback_image"
        />
        <p className="font-bold text-sm md:text-lg">
          Specific feedback on each aspect of your CV & tips on improving every
          section such as:
        </p>
        <ul className="font-semibold list-disc m-4 mt-0 text-sm md:text-base md:ml-5">
          <li>Overall Summary</li>
          <li>Professional Experience</li>
          <li>Educational Qualifications</li>
          <li>Extra curriculars/ other areas you would like to show case</li>
        </ul>
      </div>
      <div className="p-5 -mt-6 md:mt-8 lg:-mt-5 lg:ml-12">
        <img
          className="h-12 w-12 md:h-12 md:w-12"
          src="/images/searchicon.png"
          alt="icon_of_a_serach"
        />
        <p className="font-bold text-sm md:text-lg">Optics matter in a CV</p>
        <ul className="font-semibold list-disc m-4 mt-0 text-sm md:text-base md:ml-5">
          <li>
            How to reduce content overload without reducing impact on the
            recruiter.
          </li>
          <li>
            Practical re-formatting tips with some sections re-drafted as
            illustration.
          </li>
          <li>Example of model CV’s relevant to your profile.</li>
        </ul>
      </div>
    </div>
  );
};

export default SlideThirdone;
