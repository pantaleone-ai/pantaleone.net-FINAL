import { Link } from "next-view-transitions";
import { FC } from "react";

const Logo = () => {
  return (
    <Link href="/" className="group mr-4 hidden items-center lg:flex">
      <div className="flex h-7 w-6 items-center justify-center rounded border border-white bg-transparent">
        <span className="text-xl font-bold text-white">P</span>
      </div>
      <span aria-label="logo" className="ml-2">
        pantaleone
      </span>
    </Link>
  );
};

export default Logo;
