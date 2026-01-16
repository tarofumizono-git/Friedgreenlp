import { Hero } from "./components/Hero";
import { Concept } from "./components/Concept";
import { Experience } from "./components/Experience";
import { Performance } from "./components/Performance";
import { Ecosystem } from "./components/Ecosystem";
import { TechSpecs } from "./components/TechSpecs";
import { CallToAction } from "./components/CallToAction";

export default function App() {
  return (
    <div className="dark bg-[#000000] overflow-x-hidden">
      <Hero />
      <Concept />
      <Experience />
      <Performance />
      <Ecosystem />
      <TechSpecs />
      <CallToAction />
    </div>
  );
}