import React from "react";
import profile_pic from "./public/profile_pic.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="py-6 md:h-[calc(100vh-80px)] lg:py-20 px-6 sm:px-16 md:px-18 lg:px-32 xl:px-48 grid grid-cols-6 items-center gap-8">
      <div className="col-span-6 md:col-span-4 flex flex-col  md:h-3/4 lg:h-2/3 gap-2 md:gap-10">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white">
          Hi, nice to meet you! 👋
          <br />
          I'm Maks
        </h1>
        <p className="text-xl text-gray-300 w-full md:w-1/2">
          I'm a an aspiring developer and a passionate programmer, who
          loves to create and learn new things. Based in
          <strong>Slovenia </strong>📍
        </p>
        <div className="flex gap-12 md:gap-6 w-full mt-4">
          <a
            href="https://github.com/maksklemencic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} color="white" />
          </a>
          <a
            href="https://www.linkedin.com/in/maks-klemen%C4%8Di%C4%8D-385035185/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} color="white" />
          </a>
          <a
            href="https://www.facebook.com/eden.pac.92/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} color="white" />
          </a>
          <a
            href="https://www.instagram.com/maksklemencic/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} color="white" />
          </a>
        </div>
      </div>
      <div className="col-span-6 md:col-span-2 lg:h-full flex justify-center items-center">
        <img src={profile_pic} alt="hero" className="rounded-full px-12 md:p-0" />
      </div>
    </div>
  );
}

export default HeroSection;
