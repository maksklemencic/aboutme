import { useRef } from "react";

import HeroSection from "./components/hero_section";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  
  const home = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const stack = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const scrollToHome = () => {
    home.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projects.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToStack = () => {
    stack.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contact.current?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <div className="App bg-gray-900 font-link flex flex-col ">
      <header className="">
        <Navbar scrollToHome={scrollToHome} scrollToProjects={scrollToProjects} scrollToStack={scrollToStack} scrollToContact={scrollToContact}/>
      </header>
      <div className="flex flex-col pt-20" >
        <div ref={home} className=" scroll-m-14">
          <HeroSection />
        </div>
        <div ref={projects} className=" scroll-m-14 md:scroll-m-0">
          <Projects />
        </div>
        <div ref={stack} className=" scroll-m-14 md:scroll-m-0">
          <Skills />
        </div>
        <div ref={contact} className=" scroll-m-14 md:scroll-m-0">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
