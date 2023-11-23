import React from "react";

const SlideNine = () => {
  return (
    <div
      style={{ backgroundColor: "#0572BD" }}
      className="relative bg-blue-600  w-full h-full"
    >
      <div className="absolute top-2 left-7">
        <p className="text-xs ml-2 md:text-xl mt-12 lg:text-lg lg:mt-12 sm:text-sm p-1 text-white">
          Global Partner Program for Partner Teams & Independent Experts
        </p>
        <p className="mt-0 text-lg ml-3 xl:text-3xl sm:text-2xl text-white">
          Hybrid Model
        </p>
      </div>
      <div className="h-2/3 mt-32 text-xxs ml-9 w-4/5 xl:mt-24  absolute">
        <table className="border-t m-1 md:mt-10 md:text-2xl border-white sm:text-sm lg:mt-12 border-b lg:text-lg w-full text-white font-light">
          <tr>
            <th className=" py-2 px-2 text-left"> Partner access</th>
            <th className=" py-2 px-0 text-left">Service Summary</th>
            <th className=" py-2 px-2  text-left">Consideration</th>
          </tr>
          <tr className="bg-blue-520 w-full  border-t border-white">
            <td className=" px-2 " rowSpan={2}>
              Opportunities
            </td>{" "}
          </tr>
          <td className="bg-blue-520 border-t border-white">
            <tr>
              {" "}
              <td>
                <ul className="list-disc px-3">
                  <li>Mapping the proposition</li>
                </ul>{" "}
              </td>
            </tr>{" "}
            <tr>
              {" "}
              <td>
                <ul className="list-disc px-3">
                  <li>Setting up walkthrough with CXOs</li>
                </ul>
              </td>
            </tr>
            <tr>
              {" "}
              <td className="py-2 list-disc px-3">
                <ul className="list-disc">
                  <li>
                    Nudging the stakeholders towards realization within 100 days
                    post walkthrough
                  </li>
                </ul>
              </td>{" "}
            </tr>
          </td>

          <td className=" py-2 bg-blue-520 border-t border-white">
            <tr className="flex justify-center">
              <ul className=" list-disc">
                <li>Free</li>
              </ul>
            </tr>

            <tr className="flex justify-center">
              <td>
                <ul className="py-1 lg:py-1 list-disc">
                  <li>Paid</li>
                </ul>
              </td>{" "}
            </tr>
            <tr className="flex justify-center">
              {" "}
              <td>
                <ul className="py-4 lg:py-0 list-disc">
                  <li>Paid</li>
                </ul>
              </td>{" "}
            </tr>
          </td>

          <tr>
            <td className="p-2">Improve visibility</td>
            <td>
              <ul className="list-disc px-3">
                <li>Augment Social Profile of Partner</li>
              </ul>
            </td>
            <td>
              <ul className="flex justify-center list-disc">
                <li>Paid</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-bluelight-530">
            <td className="p-2">Leadership insights</td>
            <td>
              <ul className="list-disc px-3">
                <li>Video recorded interviews of leaders</li>
              </ul>
            </td>
            <td>
              <ul className="flex justify-center list-disc">
                <li>Paid</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-blue-520">
            <td className="p-2">Live expert sessions</td>
            <td>
              <ul className="list-disc py-1 px-3">
                <li>Engaging Group of CXOs & decision makers</li>
              </ul>
            </td>
            <td>
              <ul className=" list-disc flex justify-center">
                <li>Paid</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-blue-520">
            <td className="p-2">Reimagine bootcamps</td>
            <td>
              <ul className="list-disc py-1 px-3">
                <li>
                  Bringing together stakeholders for problem definition,
                  alignment, ideation and action planning
                </li>
              </ul>
            </td>
            <td>
              <ul className="list-disc flex justify-center">
                <li>Paid</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SlideNine;
