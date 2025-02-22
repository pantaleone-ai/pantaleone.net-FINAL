import { mdxComponents } from "@/components/mdx/mdx-components";
import Card from "@/components/ui/card";
import { EarthIcon, YoutubeIcon } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import { ProjectType } from "types";
import Category from "./category";
import Description from "./description";
import LinkButton from "./link-button";
import Screenshots from "./screenshots";
import Title from "./title";

interface Props {
  project: ProjectType;
}

const ProjectItem: FC<Props> = ({ project }) => (
  <Card>
    <div className="mx-auto px-2 pb-3 pt-4 text-center sm:px-10 sm:pb-0 sm:pt-4">
      <Category
        category={project.data.category}
        className="text-md font-semibold text-gray-600 dark:text-zinc-400"
      />
      <Title
        title={project.data.title}
        className="mt-2 text-3xl text-black dark:text-zinc-300 sm:text-4xl"
      />
      <div className="mx-auto mb-2 mt-2 flex max-w-xs flex-col items-center justify-center gap-x-2 gap-y-2 text-center sm:flex sm:flex-row">
        {project.data.webUrl && (
          <LinkButton
            title="Live Preview"
            className="mt-4 mb-4"
            Icon={EarthIcon}
            url={project.data.webUrl || ""}
          />
        )}
        {project.data.webUrl && project.data.youtubeUrl && (
          <span className="hidden sm:flex">|</span>
        )}
        {project.data.youtubeUrl && (
          <LinkButton
            title="Watch on Youtube"
            Icon={YoutubeIcon}
            url={project.data.youtubeUrl || ""}
          />
        )}
      </div>

      <MDXRemote source={project.content} components={mdxComponents} />
      <Description
        description={project.data.description}
        className="mt-6 mb-6 text-gray-600 dark:text-zinc-400"
      />
      {/* {project.data.githubUrl && project.data.slug && (
        <div className="mx-auto flex justify-center">
          <GithubButton
            title="Stars on Github"
            url={project.data.githubUrl}
            repo={project.data.slug}
          />
        </div>
      )} */}
    </div>
    <Screenshots className="mt-6" screenshots={project.data.screenshots} />
  </Card>
);

export default ProjectItem;
