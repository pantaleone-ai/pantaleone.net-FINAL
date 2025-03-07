"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/utils/helpers";
import Image from "next/image";
import React, { FC, useCallback, useEffect, useState } from "react";

interface Props {
  screenshots: string[];
  className?: string;
}

const Screenshots: FC<Props> = ({ screenshots = [], className }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [updateState, setUpdateState] = useState(false);

  const toggleUpdateState = useCallback(
    () => setUpdateState((prevState) => !prevState),
    [],
  );

  useEffect(() => {
    if (!api) return;

    setCount(screenshots.length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api, screenshots.length]);

  useEffect(() => {
    if (!api) return;

    api.on("select", toggleUpdateState);
    api.on("reInit", toggleUpdateState);

    return () => {
      api.off("select", toggleUpdateState);
      api.off("reInit", toggleUpdateState);
    };
  }, [api, toggleUpdateState]);

  const numberOfSlides = api?.scrollSnapList().length || 0;
  const currentSlide = api?.selectedScrollSnap() || 0;

  const renderImage = (image: string, index: number, ratio: number) => (
    <AspectRatio key={index} ratio={ratio}>
      <Image
        src={image}
        alt={`Screenshot ${index + 1}`}
        className="object-cover"
        fill={true}
      />
    </AspectRatio>
  );

  return (
    <div className={cn("relative pr-20 pl-20 items-center justify-center", className)}>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {screenshots.map((image, index) => (
            <CarouselItem key={index}>
              {renderImage(image, index, 8 / 16)}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 hidden size-10 sm:flex" />
        <CarouselNext className="absolute right-4 top-1/2 hidden size-10 sm:flex" />
      </Carousel>
      {numberOfSlides > 1 && (
        <div className="absolute bottom-1 mx-auto w-3/5 items-center justify-center text-center sm:bottom-5">
          {Array.from({ length: numberOfSlides }, (_, i) => (
            <Button
              key={i}
              className={`mx-1 mt-5 h-1.5 w-1.5 rounded-full p-1 items-center text-center ${
                i === currentSlide
                  ? "scale-125 transform bg-gray-800 dark:bg-white"
                  : "bg-white dark:bg-zinc-900"
              }`}
              aria-label={`Go to screenshot ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Screenshots;
