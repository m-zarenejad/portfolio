import React, { useState } from "react";
import {
  HTML_Logo,
  CSS_Logo,
  JavaScript_Logo,
  Python_Logo,
  Bootstrap_Logo,
  React_Logo,
  Git_Logo,
  Github_Logo,
  Firebase_Logo,
  Linux_Logo,
  VSCode_Logo,
  Tailwind_Logo,
  c_logo,
  csharp_logo,
  matlab_logo,
  labview_logo,
  sql_logo,
  pytorch_logo,
  tensorflow_logo,
  asp_logo,
  docker_logo,
  microsoft_sql_server_logo,
  anaconda_logo,
  microchip_logo,
  hardware_logo,
  avr_logo,
  altiumdesigner_logo
} from "../assets/images/index";

function Skills() {
  const [name, setName] = useState(null);
  const handleLeave = (name) => {
    setName(name)
  }

  const cards = [
    {
      title: "Programming Languages",
      items: [
        { src: Python_Logo, alt: "Python" },
        { src: c_logo, alt: "C" },
        { src: csharp_logo, alt: "C#" },
        { src: matlab_logo, alt: "MATLAB" },
        { src: labview_logo, alt: "LABVIEW" },
        { src: sql_logo, alt: "SQL" },
        { src: JavaScript_Logo, alt: "JavaScript" },
        // { src: HTML_Logo, alt: "HTML5" },
        // { src: CSS_Logo, alt: "CSS3" },
      ],
    },
    {
      title: "Library and Frameworks",
      items: [
        { src: React_Logo, alt: "React" },
        { src: pytorch_logo, alt: "Pytorch" },
        { src: tensorflow_logo, alt: "Tensorflow" },
        { src: asp_logo, alt: "ASP.NET" },
        { src: docker_logo, alt: "Docker" },
        // { src: Bootstrap_Logo, alt: "Bootstrap" },
        // { src: Tailwind_Logo, alt: "Tailwind" },
      ],
    },
    {
      title: "Version Control",
      items: [
        { src: Git_Logo, alt: "Git" },
        { src: Github_Logo, alt: "Github" },
      ],
    },
    {
      title: "Programming Software",
      items: [
        { src: VSCode_Logo, alt: "Visual Studio Code" },
        { src: microsoft_sql_server_logo, alt: "SQL Server Management" },
        { src: anaconda_logo, alt: "Anaconda" },
      ],
    },
    {
      title: "Embedded Software",
      items: [
        { src: hardware_logo, alt: "MPLAB-CodeVision" },
        { src: altiumdesigner_logo, alt: "Altium Designer" },
      ],
    },
    {
      title: "Micro Controller",
      items: [
        { src: avr_logo, alt: "AVR" },
        { src: microchip_logo, alt: "DsPIC" },
      ],
    },
  ];



  return (
    <div className="pb-5 h-auto my-20" id="skills">

      <div className="text-center font-bold flex justify-between items-center">
        <h1 className="text-6xl max-md:text-4xl">Skills</h1>
        <div className="text-[#7e9199] text-6xl max-md:text-4xl">{name}</div>
      </div>

      <div className="flex max-sm:flex-col items-center justify-between mt-14 gap-10 flex-wrap">

        {cards.map((value, index )=> {
          return (
              <div className="flex flex-col gap-10 max-sm:gap-5 max-md:w-full w-5/12" key={index}>
                <div className="flex flex-col gap-5">
                  <h4 className="text-2xl">{value.title}</h4>
                  <div className="flex gap-5 max-md:flex-wrap">
                      {
                        value.items.map((icon, id) => {
                          return (
                            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName(icon.alt)} onMouseLeave={() => handleLeave(null)} key={id}>
                            <img src={icon.src} alt={icon.alt} className="h-10"  />
                            </div>
                          )
                        })
                      }
                  </div>
                </div>
              </div>
          )
        })}

      </div>
      
    </div>
  );
}

export default Skills;