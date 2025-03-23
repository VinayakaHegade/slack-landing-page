"use client";

import { useState } from "react";
import { Icons } from "./Icons";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-xs rounded-lg bg-white p-6 shadow-lg">
      <button className="block absolute cursor-pointer top-3 right-4 ml-auto w-4 h-4" onClick={() => setIsVisible(false)}>
        <Icons.X className="text-gray-500 h-4 w-4" />
      </button>
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-sm text-black">
            This website uses cookies to enhance your browsing experience,
            analyze site traffic, and serve personalized content. You can change
            information about your use of our site with our social media,
            advertising and analytics partners.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setIsVisible(false)}
            className="w-full rounded-md bg-slack-purple px-4 py-2 text-sm font-medium text-white hover:bg-purple-900 cursor-pointer"
          >
            ACCEPT ALL COOKIES
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
