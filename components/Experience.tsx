import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-10">
      <h3 className="absolute top-24 uppercase tracking-wider text-white text-2xl">
        Experience
      </h3>

      <div>
        <ExperienceCard/>
        <ExperienceCard/>
      </div>
    </div>
  );
}
