import SingleProjectItem from "@/components/pages/projects/single-project-item/main";
import HandDrawnArrow from "@/components/ui/hand-drawn-arrow";
import projectConfig from "@/config/pages/projects";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {projectConfig.map((project, index) => (
        <Fragment key={index}>
          <SingleProjectItem project={project} />
          {index !== projectConfig.length - 1 && (
            <HandDrawnArrow className="mx-auto size-20 text-center text-gray-300 dark:text-zinc-400" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
