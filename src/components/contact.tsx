import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="lg:h-[calc(100vh-80px)] py-6 lg:py-12 px-6 sm:px-20 md:px-32 lg:px-48 xl:px-64 ">
      <p className="text-2xl sm:text-4xl md:text-3xl font-bold text-white text-center">
        Contact
      </p>
      <div className="h-[calc(70%)] w-full  flex flex-col justify-center">
        <p className="font-semibold text-white text-xl block sm:hidden text-center py-4">
          maks.klemencic6@gmail.com
        </p>

        <div className="flex justify-around w-full mb-20 sm:mb-4 pb-4 mt-4 border-b-2 border-indigo-400 rounded-lg">
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
          <p className="font-semibold text-white text-xl hidden sm:block">
            maks.klemencic6@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
