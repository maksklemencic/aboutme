import React, { useState } from "react";
// Import useEffect from React if not already imported
import { useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState("");

  useEffect(() => {
    if (isOpen) {
      setMenuAnimation("menu-enter-active");
    } else if (!isOpen && menuAnimation) {
      setMenuAnimation("menu-exit-active");
    }
  }, [isOpen, menuAnimation]);

  return (
    <div className="relative">
      <div className="h-16 bg-white shadow-sm border-b md:px-8 lg:px-16 z-20 fixed w-full">
        <div className="flex items-center justify-between h-full px-4">
          <div className="text-xl font-bold">Maks Klemenčič</div>
          <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden z-30">
            {/* Toggle button with dynamic icon */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-white z-10 flex items-center justify-center ${menuAnimation}`} style={{ display: isOpen ? "flex" : "none" }}>
        <div className="flex flex-col items-center space-y-8">
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8">
          <svg className="h-8 w-8" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
