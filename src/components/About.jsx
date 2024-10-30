import React from "react";
import coding_gif from "../assets/images/coding.gif"

function About() {
  return (
    <div className="mx-auto h-auto my-36 max-xl:my-20" id="about">
      <div className="flex gap-6 justify-between items-center max-md:flex-wrap max-xl:justify-center">
        <div className="w-1/2 max-xl:w-full text-left max-md:text-center">
          <h1 className="text-5xl max-md:text-4xl mb-5">Hi, I'm Mohammadreza 👋</h1>
          <p className="text-3xl max-md:text-base mb-5 font-light">
          I'm an Electrical Engineer and AI researcher specializing in deep learning, video processing, and multimodal data systems.
          I graduated in M.Sc. at the Iran University of Science and Technology in Sep. 2024. I hold a B.Sc. in Electrical Engineering from Shiraz University of Technology.
          I have contributed to industry collaborations and surpassed state-of-the-art benchmarks in my research.
          </p>
          <div className="space-x-4 space-y-4 items-center " >
          <a href="https://drive.google.com/file/d/11j-ypT5udjfGnt8I85flJ-Sth8FOLWux/view?usp=sharing" className="p-2 space-x-4 px-4 rounded-md text-base bg-white text-purple-500 hover:bg-purple-500 hover:text-white transition-all inline-block w-auto">Resume</a>
          <a href="#contact" className="p-2 px-4 rounded-md text-base bg-white text-purple-500 hover:bg-purple-500 hover:text-white transition-all inline-block w-auto">GET IN TOUCH</a>
          </div>
          </div>
        <img
          className="h-80 max-xl:h-64 rounded max-[426px]:h-auto max-[426px]:w-full max-[426px]:mb-5"
          src={coding_gif}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
