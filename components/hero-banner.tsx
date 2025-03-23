"use client";
import Link from "next/link";
import { Icons } from "./Icons";
import { useState } from "react";

const HeroBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleBannerClose = () => {
    setIsBannerVisible(false);
  };

  return (
    <div
      className={`bg-[#1264A3] px-10 py-7 mt-20 text-white lg:rounded-[100vh] max-w-[1300px] mx-auto ${
        isBannerVisible ? "" : "hidden"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm md:text-lg">
            Turn agents into teammates with Agentforce in Slack.
            <Link
              href="https://slack.com/intl/en-in/ai-agents"
              className="ml-2 inline-flex items-center font-bold text-base hover:underline"
            >
              Learn more
              <Icons.ArrowRight className="h-5 w-5 ml-1" />
            </Link>
          </p>
        </div>
        <button
          className="ml-4 text-white hover:text-gray-200 cursor-pointer"
          onClick={handleBannerClose}
        >
          <Icons.X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
