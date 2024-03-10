import React from "react";
import rezervacije from "./public/rezervacije.png";
import social_media_1 from "./public/realtime_1.png";
import social_media_2 from "./public/realtime_2.png";
import zdravilko1 from "./zdravilko/IMG_4740.jpg";
import zdravilko2 from "./zdravilko/IMG_4741.jpg";
import zdravilko4 from "./zdravilko/IMG_4743.jpg";
import zdravilko5 from "./zdravilko/IMG_4744.jpg";
import zdravilko6 from "./zdravilko/IMG_4745.jpg";
import zdravilko7 from "./zdravilko/IMG_4746.jpg";

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
    <div className=" py-6  lg:py-20 px-6 sm:px-20 md:px-32 lg:px-48 xl:px-64 ">
      <p className="text-4xl md:text-3xl font-bold text-white text-center">
        Projects
      </p>
      <div className="grid grid-cols-1  gap-8 mt-8">
        <div className="bg-gray-800 rounded-lg p-12 flex flex-col justify-between">
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
            <img src={rezervacije} alt="project" className=" mt-4 w-full" />
          </div>
          <div className="flex justify-evenly gap-1 mt-6">
            <div className="text-indigo-500 font-semibold flex flex-col items-center">
              <SiMongodb size={30} color="green" />
              MongoDb
            </div>
            <div className="text-indigo-500 font-semibold flex flex-col items-center">
              <SiAngular size={30} color="red" />
              Angular
            </div>
            <div className="text-indigo-500 font-semibold flex flex-col items-center">
              <SiNodedotjs size={30} color="green" />
              Node.js
            </div>
            <div className="text-indigo-500 font-semibold flex flex-col items-center">
              <SiExpress size={30} color="white" />
              Express
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-12 flex flex-col justify-between">
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
              a message, like, and comment on other posts. Users can also be a
              part of multiple groups and chat with other users in real-time.
              The app uses modern responsive design with optional dark mode.
            </p>
            <img src={social_media_1} alt="project" className=" mt-4 w-full" />
            <img src={social_media_2} alt="project" className=" mt-4 w-full" />
          </div>
          <div className="flex justify-evenly items-center  gap-1 mt-6">
            <div className="text-indigo-500 font-semibold flex flex-col items-center">
              <SiMongodb size={30} color="green" />
              MongoDb
            </div>
            <div className="text-indigo-500 font-semibold flex flex-col items-center">
              <SiPrisma size={30} color="prisma" />
              Prisma
            </div>
            <div className="text-indigo-500 font-semibold flex flex-col items-center">
              <SiNextdotjs size={30} color="white" />
              Next.js
            </div>
            <div>
              <p className="text-white font-bold text-sm">shadcn/ui</p>
              <p className="text-white text-xs">UI Library</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-12 flex flex-col justify-between">
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
              A web application managing medication. The app is designed to help
              users keep track of their medication and to remind them when to
              take it. It also has a feature to see the closest pharmacies, see
              information about the medication, automatically notify the doctor
              when the medication is running out, and much more. The main
              challange was to design an app for the elderly. Thats why there
              are multiple account roles, which allows the children to set the
              application up for their parents.
            </p>
            <div className="grid grid-cols-3 gap-2">
              <img src={zdravilko7} alt="project" className=" mt-4 " />
              <img src={zdravilko2} alt="project" className=" mt-4 " />
              <img src={zdravilko4} alt="project" className=" mt-4" />
              <img src={zdravilko6} alt="project" className=" mt-4" />
              <img src={zdravilko1} alt="project" className=" mt-4" />
              <img src={zdravilko5} alt="project" className=" mt-4" />
            </div>
          </div>
          <div className="flex justify-evenly items-center  gap-1 mt-6">
            <div className="text-indigo-500 font-semibold flex flex-col items-center">
              <SiMongodb size={30} color="green" />
              MongoDb
            </div>

            <div className="text-indigo-500 font-semibold flex flex-col items-center">
              <SiReact size={30} color="lightblue" />
              React Native
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
