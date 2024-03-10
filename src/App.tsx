import HeroSection from "./components/hero_section";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App bg-gray-900 font-link flex flex-col ">
      <header className="">
        <Navbar />
      </header>
      <div className="flex flex-col pt-20"> 
        <section className="">
          <HeroSection />
        </section>
        <section className="">
          <Projects />
        </section>
      </div>
    </div>
  );
}

export default App;
