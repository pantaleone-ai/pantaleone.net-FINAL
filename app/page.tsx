import Home from "@/components/pages/home/main";
import SingleProjectItem from "@/components/pages/projects/single-project-item/main";
import HandDrawnArrow from "@/components/ui/hand-drawn-arrow";
import profileConfig from "@/config/pages/profile";
import projectConfig from "@/config/pages/projects";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: "Tim | Home",
};

export default async function HomePage() {
  const length = projectConfig.length;
  return (
    <Fragment>
      <Home profile={profileConfig} />
      <section id="selected-projects" className="relative mb-8 sm:mb-10">
        {projectConfig.map((project, index) => (
          <Fragment key={index}>
            <SingleProjectItem project={project} />
            {length !== index + 1 && (
              <HandDrawnArrow className="mx-auto my-6 size-20 text-center text-gray-400 dark:text-zinc-400" />
            )}
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
}
