import React from "react";
import logo from "../Assets/logo.png";
import cuate from "../Assets/cuate.png";
import WhiteBase from "../Assets/WhiteBase.png";

export default function Index() {
  return (
    <div className="flex items-center justify-center pt-[40px]">
      <div className="w-[210px] h-[360px] bg-white border-4 border-black rounded-[30px] shadow-xl overflow-hidden relative z-10">
        <div className="flex justify-end">
          <img
            src={WhiteBase}
            alt="white base Logo"
            className="h-[30px] w-auto object-contain"
          />
        </div>

        <div className="flex flex-col">
          {/* Upper Section - White Background */}
          <div className="flex-1 px-6 pb-3 rounded-br-[100px]">
            {/* Logo Section */}
            <div className="flex justify justify-center w-[180px] mt-3 mb-6">
              <img
                src={logo}
                alt="BHIVE Logo"
                className="h-[20px] w-auto object-contain"
              />
            </div>

            <div className="flex justify justify-end w-[150px] radius-5 mt-2">
              <img
                src={cuate}
                alt="cuate Logo"
                className="h-[100px] w-auto object-contain"
              />
            </div>
          </div>

          {/* Bottom Section - Dark Background */}
          <div className="w-[220px] bg-gray-800 text-white px-6 py-4">
            {/* Navigation Dots */}
            <div className="flex justify-end w-[100px] gap-1 mb-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            </div>

            {/* Main Text */}
            <div className="text-center">
              <span className="text-white font-normal text-[0.85rem] leading-[1.25rem]">
                Let's get started!
              </span>
              <p className="text-xs text-gray-400">
                Gain access to unlimited freedom, put in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
