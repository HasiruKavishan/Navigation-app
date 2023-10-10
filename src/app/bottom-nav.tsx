"use client";
import { useState } from "react";
import {
  CameraIcon,
  ChatBubbleOvalLeftIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const BottomNav = () => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`fixed grid grid-cols-2 gap-16 right-12 bottom-12 h-14 w-0 duration-500 bg-gray-100 rounded-md ${
        active &&
        "right-[50%] translate-x-[50%] w-96 transition-[width,right] delay-[1s,0s] duration-500"
      }`}
    >
      <div className="text-2xl flex items-center gap-6 justify-center">
        <HomeIcon className="w-6 h-6 cursor-pointer hover:-translate-y-1 scale-110" />
        <UserIcon className="w-6 h-6 cursor-pointer hover:-translate-y-1 scale-110" />
        <ChatBubbleOvalLeftIcon className="w-6 h-6 cursor-pointer hover:-translate-y-1 scale-110" />
      </div>
      <div className="text-2xl flex items-center gap-6 justify-center">
        <CameraIcon className="w-6 h-6 cursor-pointer hover:-translate-y-1 scale-110" />
        <Cog6ToothIcon className="w-6 h-6 cursor-pointer hover:-translate-y-1 scale-110" />
        <EnvelopeIcon className="w-6 h-6 cursor-pointer hover:-translate-y-1 scale-110" />
      </div>
      <div
        onClick={() => setActive(!active)}
        className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-16 w-16 cursor-pointer bg-cyan-600 flex items-center justify-center rounded-full"
      >
        <input
          className="appearance-none"
          type="checkbox"
          name="check"
          id="check"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-6 h-6 ${
            active && "duration-300 rotate-[135deg] delay-[1s]"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
    </div>
  );
};

export default BottomNav;
