import React from "react";
import rezervacije from "./public/rezervacije.png";
import social_media_1 from "./public/realtime_1.png";
import social_media_2 from "./public/realtime_2.png";
import zdravilko1 from "./public/zdravilko/IMG_4740.jpg";
import zdravilko2 from "./public/zdravilko/IMG_4741.jpg";
import zdravilko4 from "./public/zdravilko/IMG_4743.jpg";
import zdravilko5 from "./public/zdravilko/IMG_4744.jpg";
import zdravilko6 from "./public/zdravilko/IMG_4745.jpg";
import zdravilko7 from "./public/zdravilko/IMG_4746.jpg";

import {
  SiMongodb,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";

export default function Projects() {
  return (
    <div className=" py-6  lg:py-20 px-6 sm:px-12 md:px-32 lg:px-48 xl:px-72 ">
      <p className="text-2xl sm:text-4xl md:text-3xl font-bold text-white text-center">
        Projects
      </p>
      <div className="grid grid-cols-1  gap-8 mt-8">
        <div className="bg-gray-800 border border-gray-700 shadow-md shadow-black rounded-lg p-4 sm:p-12 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <h2 className="text-2xl font-bold text-white">
                Rezervacije opreme (Kemijski inštitut)
              </h2>
              <a
                href="https://rezervacije-ki-opreme.onrender.com/"
                target="blank_"
                className="bg-indigo-500 rounded-md px-3 py-2 text-white hover:cursor-pointer hover:bg-indigo-400 h-fit w-fit"
              >
                Try a demo
              </a>
            </div>

            <p className="text-gray-300">
              A web application for reserving laboratory equipment at the
              National Institute of Chemistry. Complete with user authentication
              and responsive design.
            </p>
            <div className="flex gap-4 items-center py-4">
              <p className="text-white uppercase font-bold">Tech stack</p>
              <div className="border h-12" />
              <div className="flex w-full gap-1 sm:gap-8 ">
                <img src="https://skillicons.dev/icons?i=mongo" />
                <img src="https://skillicons.dev/icons?i=express" />
                <img src="https://skillicons.dev/icons?i=angular" />
                <img src="https://skillicons.dev/icons?i=nodejs" />
              </div>
            </div>
            <img src={rezervacije} alt="project" className=" mt-4 w-full" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 sm:p-12 flex flex-col justify-between border border-gray-700 shadow-md shadow-black">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <h2 className="text-2xl font-bold text-white">
                Social media web app - Work in progress
              </h2>
              <a
                href="https://github.com/maksklemencic/realtime"
                target="blank_"
                className="bg-indigo-500 rounded-md px-3 py-2 text-white hover:cursor-pointer hover:bg-indigo-400 h-fit w-fit"
              >
                Github
              </a>
            </div>

            <p className="text-gray-300">
              A web application for interacting with other users. Users can post
              messages, like and comment on other posts. Users can also be a
              part of multiple groups and chat with other users in real-time.
              The app uses modern responsive design with optional dark mode.
            </p>
            <div className="flex gap-4 items-center py-4">
              <p className="text-white uppercase font-bold">Tech stack</p>
              <div className="border h-12" />
              <div className="flex w-full gap-1 sm:gap-8 ">
                <img src="https://skillicons.dev/icons?i=mongo" />
                <img src="https://skillicons.dev/icons?i=prisma" />
                <img src="https://skillicons.dev/icons?i=nextjs" />
                <img src="https://skillicons.dev/icons?i=tailwind" />
              </div>
            </div>
            <img src={social_media_1} alt="project" className=" mt-4 w-full" />
            <img src={social_media_2} alt="project" className=" mt-4 w-full" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 sm:p-12 flex flex-col justify-between border border-gray-700 shadow-md shadow-black">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <h2 className="text-2xl font-bold text-white">
                Zdravilko - Mobile App
              </h2>
              <div className="flex gap-2">
                <a
                  href="https://youtu.be/4qY0FYnUeg8"
                  target="blank_"
                  className="bg-indigo-500 rounded-md px-3 py-2 text-white hover:cursor-pointer hover:bg-indigo-400 h-fit"
                >
                  Youtube demo
                </a>
                <a
                  href="https://zdravilko-3c7t.onrender.com/"
                  target="blank_"
                  className="bg-indigo-500 rounded-md px-3 py-2 text-white hover:cursor-pointer hover:bg-indigo-400 h-fit "
                >
                  Website demo
                </a>
              </div>
            </div>

            <p className="text-gray-300">
              An application for managing medication. The app is designed to help
              users keep track of their medication and to remind them when to
              take it. It also has a feature to see the closest pharmaciy,
              information about medication, automatically notify a doctor
              when medication is running out, and much more. The main
              challange was to design an app for the elderly. Thats why there
              are multiple account roles, which allow the children to set the
              application up for their parents.
            </p>
            <div className="flex gap-4 items-center">
              <p className="text-white uppercase font-bold py-4">Tech stack</p>
              <div className="border h-12" />
              <div className="flex w-full gap-1 sm:gap-8 ">
                <img src="https://skillicons.dev/icons?i=mongo" />
                <img src="https://skillicons.dev/icons?i=react" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <img src={zdravilko7} alt="project" className=" mt-4 " />
              <img src={zdravilko2} alt="project" className=" mt-4 " />
              <img src={zdravilko4} alt="project" className=" mt-4" />
              <img src={zdravilko6} alt="project" className=" mt-4" />
              <img src={zdravilko1} alt="project" className=" mt-4" />
              <img src={zdravilko5} alt="project" className=" mt-4" />
            </div>
          </div>

        </div>
        <div className="bg-gray-800 rounded-lg p-4 sm:p-12 flex flex-col justify-between border border-gray-700 shadow-md shadow-black ">
          <h2 className="sm:text-xl text-md font-bold text-white">
            More projects coming soon ...
          </h2>
        </div>
      </div>
    </div>
  );
}
