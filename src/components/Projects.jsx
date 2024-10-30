import React, { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { thermovisor,plate_detection,brain,cansat } from "../assets/images/index.js"

function Projects() {
  const [visible,setVisible] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const projects = [
    {
      id: 1,
      image: thermovisor,
      imageAlt: "Positional and Environmental System Dashboard",
      name: "Positional-and-Environmental-System-Dashboard",
      description: "The site offers data visualization, live monitoring, and alerting features, making it ideal for managing and understanding data trends over time..",
      links: {
        gitHub: "https://github.com/mrzarenejad/Positional-and-Environmental-System-Dashboard",
       
      },
      tags: [
        "html", "C", "Altium Designer", "Embedded System","SQL","ASP.NET","JavaScript"
      ]
    },
    {
      id: 2,
      image: plate_detection,
      imageAlt: "Iranian Car Plate Recognition",
      name: "Iranian Car Plate Recognition",
      description: "Ianian Car Plate Number Detection Based on YOLO-5.",
      links: {
        gitHub: "https://github.com/mrzarenejad/Deep-Learning-IUST/tree/main/Project",
       
      },
      tags: [
        "Python", "Pytorch", "Deep Learning"
      ]
    },
    // {
    //   id: 3,
    //   image: Portfolio,
    //   imageAlt: "Portfolio",
    //   name: "Portfolio",
    //   description: "Personal Portfolio built with React.js & Tailwind CSS",
    //   links: {
    //     gitHub: "https://github.com/talhashah-dev/portfolio",
    //     hosted: "https://talhashah.vercel.app/"
    //   },
    //   tags: [
    //     "react", "tailwind", "javascript"
    //   ]
    // },
    {
      id: 3,
      image: cansat,
      imageAlt: "CanSat Competition",
      name: "CanSat Competition",
      description: "Design and Implement real time data monitoring System for CANSAT Competition ",
      links: {
        gitHub: "https://github.com/mrzarenejad/Data-Receiver-LABVIEW",
      },
      tags: [
        "LABVIEW", "HardWare Design", "Real Time"
      ]
    },
    {
      id: 4,
      image: brain,
      imageAlt: "Brain Segmentation",
      name: "Brain Segmentation",
      description: "segmenting MRI brain images using the Markov Random Field (MRF) method in MATLAB",
      links: {
        gitHub: "https://github.com/mrzarenejad/Segmentation-of-MRI-brain-images",
      },
      tags: [
        "MATLAB", "Segmentation"
      ]
    },
    
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHover = (index) => {
    if (isLargeScreen) {
      setVisible(index);
    }
  };

  return (
    <div className="pb-5 h-auto my-20" id="projects">

      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">Projects</h1>

      <div className="flex max-md:flex-wrap flex-wrap justify-between gap-y-5 gap-x-2">
        {projects.map(cards => {
          return (
            <div className="max-md:w-[49%] w-[49%] max-sm:w-full h-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative" key={cards.id} onMouseOver={() => handleHover(cards.id)} onMouseLeave={() => setVisible(0)}>
              <img className="w-full h-full object-contain" src={cards.image} alt={cards.imageAlt} />
              <div className={`${visible === cards.id || !isLargeScreen ? 'absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent' : 'hidden'} max-md:from-transparent max-md:static max-md:bg-white w-full`}>
              <div className="px-4">
                <div className="flex items-center gap-5">
                  <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
                  {cards.name}
                  </h1>
                  <a href={cards.links.gitHub} className="font-bold text-xl mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Github Repo" rel="noreferrer">
                    <FaGithub /> 
                  </a>
                  {/* <a href={cards.links.hosted} className="font-bold text-base mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Live Preview" rel="noreferrer">
                    <FaExternalLinkAlt /> 
                  </a> */}
                </div>
                  <p className="text-gray-200 max-md:text-gray-600 text-base">
                    {cards.description}
                  </p>
              </div>

              <div className="px-4 pt-4 pb-2">
                {
                 cards.tags.map((element,index) => {
                  return (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={index}>{element}</span>
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
  )
}

export default Projects;