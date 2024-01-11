import React from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import QuarterBox from "../shared/QuarterBox";
import Link from "next/link";
const CoreTrackData = [
  {
    header: "Quarter 1",
    description: "CS-101: Object-Oriented Programming using Typescript",
    number: 1,
  },
  {
    header: "Quarter 2",
    description: "W2-201: Developing Planet Scale Web 2.0 Service Cloud Cloud Apps and APIs using Next.js 13 and Cloud Developer kit (CDK) for Terraform",
    number: 2,
  },
  {
    header: "Quarter 3",
    description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development.",
    number: 3,
  },
];

const CoreTracks = () => {
  const header = "Core Course \t \n (Common in All Specialization):";
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        <div className="max-w-screen-sm">
          <h4 className="text-teal-800 font-semibold text-lg mt-4"> Programme of Studies</h4>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900 md:text-red-500 lg:text-blue-700 whitespace-pre-wrap">{header}</h2>
          <p className="text-justify text-xl mt-6 text-slate-900"> Every participant of the program will start by completing the following three core courses.

</p>
        </div>

        <div className="mt-4">
  <button className="text-teal-700 text-xl underline flex">
    <a href="https://www.piaic.org/" target="_blank" rel="noopener noreferrer">
      Learn more
    </a>
  </button>
</div>
        
        {/* boxes and data fetching from array through map method */}
        {/* to make responsive we will use flex flex-col md:flex-row 
        in this way, on medium screen, it will go to one line. */}
        <div className="my-20 flex flex-col md:flex-row md:space-x-8 md:space-y-0">
          {CoreTrackData.map((item, i) => (
            <QuarterBox 
              key={item.number}
              header={item.header} 
              description={item.description} 
              number= {item.number} 
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
