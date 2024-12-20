import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

function Contact(){
  return (
      <div className="text-center flex flex-col gap-5 max-[426px]:mt-44 h-auto my-20" id="contact">
        <div className="text-5xl mb-10 max-[500px]:text-3xl max-[500px]:mb-5">Contact Me ☎️</div>
        <p className="text-gray-400 text-base">
          DISCUSS AN IDEA OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </p>
        <a href="tel:+989333903990" className="text-gray-400 text-2xl hover:text-white">+98-9333903990</a>
        <a href="mailto:mr.zarenejad1997@gmail.com" className="text-gray-400 text-2xl hover:text-white">mr.zarenejad1997@gmail.com</a>
        <div className="flex justify-center gap-5 mt-10">
          <a href="https://github.com/mrzarenejad" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mohammadreza-zarenejad-2762bb175" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaLinkedin />
          </a>
          <a href="https://scholar.google.com/citations?user=EAwDcFgAAAAJ&hl=en" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <SiGooglescholar />
          </a>
        </div>
      </div>
  )
}

export default Contact;