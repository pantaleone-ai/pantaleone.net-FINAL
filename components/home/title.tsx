import { cn } from "@/utils/helpers";
import { FC } from "react";

interface Props {
  title: string;
  className?: string;
}

const Title: FC<Props> = ({ title, className }) => {
  return (
    <h1
      className={cn(
        "mb-6 text-pretty text-5xl font-semibold tracking-tight text-gray-900 dark:text-zinc-300",
        className,
      )}
    >
      {title}
    </h1>
  );
};

export default Title;
