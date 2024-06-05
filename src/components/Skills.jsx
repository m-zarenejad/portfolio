import React, { useState } from "react";
import {
  HTML_Logo,
  CSS_Logo,
  JavaScript_Logo,
  Bootstrap_Logo,
  React_Logo,
  Git_Logo,
  Github_Logo,
  Firebase_Logo,
  Linux_Logo,
  VSCode_Logo,
} from "../assets/images/index";

function Skills() {
  const [name, SetName] = useState(null);

  return (
    <div className="h-screen">
      <div className="text-3xl text-center font-bold mb-5 flex justify-between">
        <h1>Skills</h1>
        <div className="text-[#7e9199]">{name}</div>
      </div>


      {/* Mainwrapper Start */}
      <div className="flex items-center justify-between gap-10 h-full">

        <div className="flex flex-col gap-10">

          <div className="flex gap-2 items-center justify-between">
            <h4 className="text-2xl mb-2">Languages</h4>
            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={JavaScript_Logo} alt="" className="h-10" onMouseMove={() => SetName("JavaScript")}/>
            </div>

            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={HTML_Logo} alt="" className="h-12" onMouseMove={() => SetName("CSS")}/>
            </div> 

            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={CSS_Logo} alt="" className="h-10" onMouseMove={() => SetName("Bootstrap")}/>
            </div>
          </div>

          <div className="flex gap-2 items-center justify-between">
            <h4 className="text-2xl mb-2">Library and Framworks</h4>
            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={React_Logo} alt="" className="h-12" onMouseMove={() => SetName("CSS")}/>
            </div> 

            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={Bootstrap_Logo} alt="" className="h-12" onMouseMove={() => SetName("CSS")}/>
            </div> 
          </div>

        </div>


        <div className="flex flex-col gap-10">

          <div className="flex gap-2 items-center justify-between">
            <h4 className="text-2xl mb-2">Version Control</h4>
            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={Git_Logo} alt="" className="h-12" onMouseMove={() => SetName("HTML")}/>
            </div>

            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={Github_Logo} alt="" className="h-12" onMouseMove={() => SetName("CSS")}/>
            </div> 
          </div>


          <div className="flex gap-2 items-center justify-between">
            <h4 className="text-2xl mb-2">Other tools & Services</h4>

            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={Firebase_Logo} alt="" className="h-12" onMouseMove={() => SetName("Linux")}/>
            </div>

            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={Linux_Logo} alt="" className="h-12" onMouseMove={() => SetName("Linux")}/>
            </div>

            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={VSCode_Logo} alt="" className="h-12" onMouseMove={() => SetName("Visual Studio Code")}/>
            </div>
          </div>

        </div>

        

        {/* <div>
          <h4 className="text-2xl mb-2">Backend Technologies</h4>
          <div className="flex gap-2">
            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={HTML_Logo} alt="" className="h-12" onMouseMove={() => SetName("HTML")}/>
            </div>

            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={CSS_Logo} alt="" className="h-12" onMouseMove={() => SetName("CSS")}/>
            </div> 

            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={Bootstrap_Logo} alt="" className="h-10" onMouseMove={() => SetName("Bootstrap")}/>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-2xl mb-2">Database</h4>
          <div className="flex gap-2">
            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={HTML_Logo} alt="" className="h-12" onMouseMove={() => SetName("HTML")}/>
            </div>

            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={CSS_Logo} alt="" className="h-12" onMouseMove={() => SetName("CSS")}/>
            </div> 

            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
              <img src={Bootstrap_Logo} alt="" className="h-10" onMouseMove={() => SetName("Bootstrap")}/>
            </div>
          </div>
        </div>


        <div>
          <h4 className="text-2xl mb-2">Human Languages</h4>
          <div className="flex gap-2">
            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white text-black rounded-full hover:bg-slate-300 cursor-pointer" onMouseMove={() => SetName("English")}>
              English
            </div>

            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white text-black rounded-full hover:bg-slate-300 cursor-pointer" onMouseMove={() => SetName("Urdu")}>
              Urdu
            </div> 

            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white text-black rounded-full hover:bg-slate-300 cursor-pointer" onMouseMove={() => SetName("Russian")} >
              Russian
            </div>
          </div>
        </div> */}

      </div>
      {/* Mainwrapper Start */}


      
    </div>
  );
}

export default Skills;