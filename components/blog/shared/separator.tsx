import { cn } from "@/utils/helpers";
import { Separator as RadixSeparator } from "@radix-ui/react-separator";
import React, { FC } from "react";

interface Props {
  orientation: "horizontal" | "vertical";
  className?: string;
}

const Separator: FC<Props> = ({ orientation, className }) => {
  return orientation === "horizontal" ? (
    <RadixSeparator
      orientation="horizontal"
      className={cn(
        "h-[1px] w-full bg-gray-200 dark:bg-zinc-700/60",
        className,
      )}
    />
  ) : (
    <RadixSeparator
      orientation="vertical"
      className={cn("h-4 w-[1px] bg-gray-200 dark:bg-zinc-700/60", className)}
    />
  );
};

export default Separator;
