import React, { useState } from "react";

interface NavbarProps {
  scrollToHome: () => void;
  scrollToProjects: () => void;
  scrollToStack: () => void;
  scrollToContact: () => void;
}


function Navbar(props: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {!isOpen && (
        <div className="h-20 bg-gray-900 md:px-16 lg:px-32 z-20 fixed w-full text-white">
          <div className="flex items-center justify-between h-full px-4">
            <div className="text-xl font-bold hover:cursor-pointer hover:text-indigo-500">Maks Klemenčič</div>
            <div className="hidden sm:flex items-center space-x-8 font-semibold">
              <div className="hover:text-indigo-500 hover:cursor-pointer hover:font-bold" onClick={props.scrollToHome}>Home</div>
              <div className="hover:text-indigo-500 hover:cursor-pointer hover:font-bold" onClick={props.scrollToProjects}>Projects</div>
              <div className="hover:text-indigo-500 hover:cursor-pointer hover:font-bold" onClick={props.scrollToStack}>Skills</div>
              <div className="hover:text-indigo-500 hover:cursor-pointer hover:font-bold" onClick={props.scrollToContact}>Contact</div>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden z-30 hover:text-indigo-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 z-10 flex items-center justify-center text-white">
          <div className="flex flex-col items-center space-y-12 font-semibold text-2xl">
            <div className="hover:text-indigo-500 hover:cursor-pointer hover:font-bold" onClick={() => {props.scrollToHome(); setIsOpen(false)}}>Home</div>
            <div className="hover:text-indigo-500 hover:cursor-pointer hover:font-bold" onClick={() => {props.scrollToProjects(); setIsOpen(false)}}>Projects</div>
            <div className="hover:text-indigo-500 hover:cursor-pointer hover:font-bold" onClick={() => {props.scrollToStack(); setIsOpen(false)}}>Skills</div>
            <div className="hover:text-indigo-500 hover:cursor-pointer hover:font-bold" onClick={() => {props.scrollToContact(); setIsOpen(false)}}>Contact</div>
          </div>
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 hover:text-indigo-500">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
