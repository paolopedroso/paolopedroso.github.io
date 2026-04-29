import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./Hero";
import Interests from "./Interests";
import Publications from "./Publications";
import Projects from "./Projects";
import Education from "./Education";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location]);

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6">
      <Hero />
      <Interests />
      <Publications />
      <Projects />
      <Education />
    </main>
  );
};

export default Home;
