import React from "react";
import { icc2020,icc2019,icc2019_clip,signal,fpga,english_pouya } from "../assets/images";

const Certificates = () => {
  const certificates = [
    {
      title: "IRAN CanSat Competition 2020",
      description: "2nd Place as SUTechSAT Team in the 8th the national championship and the second international championship in Sensing and Communication class of Iran Can-SAT Competition 2020.",
      image: icc2020,
      imageAlt: "IRAN CanSat Competition 2020"
    },
    {
      title: "IRAN CanSat Competition 2019",
      description: 
      "3rd Place as SUTechSAT Team in the 7th the national championship and the first international championship in Sensing and Communication class of Iran Can-SAT Competition 2019.",
      image: icc2019,
      imageAlt: "IRAN CanSat Competition 2019"
    },
    {
      title: "IRAN CanSat Competition 2019 - Best Clip award",
      description: 
      "Best Clip award as SUTechSAT Team in the 7th the national championship and the first international championship in Sensing and Communication class of Iran Can-SAT Competition 2019.",
      image: icc2019_clip,
      imageAlt: "IRAN CanSat Competition 2019"
    },
    {
      title: "Junior Proficiency in English 2016 ",
      description: 
      "English language Certification by Puya Marefat language institute.",
      image: english_pouya,
      imageAlt: "Junior Proficiency in English"
    },
    {
      title: "Signal Processing using Matlab",
      description: 
      "This certification covers Signal Processing algorithms with MATLAB in Summer School Workshop held by Shiraz University of Technology.",
      image: signal,
      imageAlt: "Signal Processing using Matlab"
    },
    {
      title: "FPGA using VHDL",
      description: 
      "This certification covers Implementing Electronic Circuits with FPGA Spartan 6 in Summer School Workshop held by Shiraz University of Technology..",
      image: fpga,
      imageAlt: "FPGA using VHDL"
    }
  ]
  
  return (
    <div id="certificates">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">
        Certificates
      </h1>

      <div className="flex flex-wrap justify-between gap-y-5">

        {
          certificates.map((value, index) => {
            return (
              <div className="max-w-base min-[500px]:w-[49%] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-5 cursor-pointer" key={index}>
                <img className="w-full" src={value.image} alt={value.imageAlt} />
                <div className="px-4">
                  <div className="">
                    <h1 className="font-bold text-xl mb-1 mt-1 text-black">
                      {value.title}
                    </h1>
                    <p className="text-gray-700 text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
};

export default Certificates;
