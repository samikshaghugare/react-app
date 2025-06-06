import React from "react";
import googlePlayStore from "../Assets/googlePlayStore.png";
import appleStore from "../Assets/appleStore.png";
import logo from "../Assets/logo.png";
import background from "../Assets/background.png";
import Phone from "./Phone";

const DownloadAppSection: React.FC = () => {
  return (
<section className="pl-10 pr-4 sm:pl-6 sm:pr-6 md:pl-[85px] md:pr-[60px] mt-[50px]">
  {/* Title with yellow arrow and smaller font on mobile/tab */}
  <h2
  className="
    font-inter font-bold
    flex items-center
    text-left
    text-[20px] leading-[24px]
    md:text-[36px] md:leading-[28px]
    text-gray-900 md:text-gray-800
  "
>
  Download our app now
    {/* Yellow arrow – visible on mobile and tablet only */}
    <span className="text-yellow-500 text-[28px] ml-20 font-bold md:hidden">
      →
    </span>
  </h2>

      <div className="relative flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between p-6 md:p-10 overflow-hidden min-h-[400px]">
        {/* Background White for Desktop */}
        <div className="hidden md:block absolute inset-x-0 mx-auto w-full h-[220px] bg-white rounded-3xl z-0" />

        {/* ✅ Mobile/Tab View Phones + Store Buttons */}
        <div
  className="flex flex-col items-center gap-6 bg-white rounded-3xl p-6 md:hidden z-10"
  style={{ width: "calc(100% + 30px)" }}
>
  {/* Phones */}
  <div className="flex items-start justify-center gap-[-20px]">
    {/* Left Phone with crop */}
    <div className="overflow-hidden h-[224px]"> {/* 80% of 280px */}
      <div className="w-[140px] h-[280px] bg-white border-4 border-black rounded-[30px] shadow-xl overflow-hidden relative z-20 mr-0">
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 rounded-full" />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-center bg-cover mix-blend-multiply opacity-70"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
          <img src={logo} alt="BHIVE Logo" className="h-10" />
        </div>
      </div>
    </div>

    {/* Right Phone with crop */}
    <div className="overflow-hidden h-[224px] -ml-5">
      <Phone />
    </div>
  </div>

  {/* Store Buttons */}
  <div className="flex gap-4 justify-center">
    <img
      src={googlePlayStore}
      alt="Google Play"
      className="h-10 sm:h-11 cursor-pointer"
    />
    <img
      src={appleStore}
      alt="App Store"
      className="h-10 sm:h-11 cursor-pointer"
    />
  </div>
</div>


        {/* ✅ Desktop View Only - Phones + Text + Store */}
        <div className="hidden md:flex relative min-w-[400px] h-[310px] overflow-hidden items-start z-20">
          {/* Left Phone */}
          <div className="w-[180px] h-[360px] bg-white border-4 border-black rounded-[30px] shadow-xl overflow-hidden relative z-20 mr-[-48px]">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full" />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-center bg-cover mix-blend-multiply opacity-70"
              style={{ backgroundImage: `url(${background})` }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
              <img src={logo} alt="BHIVE Logo" className="h-10" />
            </div>
          </div>
          <Phone />
        </div>

        <div className="hidden md:block mb-5 md:max-w-md text-left md:mt-auto z-10">
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Boost your productivity with the BHIVE Workspace app. <br />
            Elevate your workspace, collaborate efficiently, and unlock
            exclusive perks.
          </p>
          <div className="flex gap-4 justify-start">
            <img
              src={googlePlayStore}
              alt="Google Play"
              className="h-12 cursor-pointer"
            />
            <img
              src={appleStore}
              alt="App Store"
              className="h-12 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
