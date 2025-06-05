import React from "react";
import hexagaon from "../Assets/hexagaon.png";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full col-span-12 md:py-20 overflow-hidden gap-5">
      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-10">
        {/* 🔹 Left Text: 8/12 Columns */}
        <div className="md:col-span-7 text-left">
          <div
            className="absolute w-[860px] h-[754px] -top-[150px] opacity-70 mix-blend-multiply bg-center bg-cover z-10"
            style={{ backgroundImage: "url('/Video/background.png')" }}
          >
            <div
            className="ml-[325px] mt-[67px] w-[900px] h-[900px] bg-no-repeat z-20"
            style={{ backgroundImage: "url('/Video/small_vector.png')" }}
          ></div>
          </div>
          
          <h1 className="font-inter font-bold text-[32px] ml-[60px] md:text-[58px] leading-[100%] tracking-[-1px] align-middle block">
            Host your meeting with <br className="hidden md:block" />
            world-class amenities. <br className="hidden md:block" />
            Starting at <span className="text-yellow-500">₹199/-!</span>
          </h1>
        </div>

        {/* 🔹 Right Block: 5/12 Columns */}
        <div className="md:col-span-5 h-[400px] flex">
          {/* Hexagon background image aligned right inside right block */}
          <div
            className="absolute inset-0 w-full h-full bg-no-repeat bg-right bg-contain z-20"
            style={{ backgroundImage: "url('/Video/hexagaon.png')" }}
          ></div>

          {/* Foreground video */}
          <video
            src="/Video/coworking_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="relative ml-[130px] mt-[50px] w-[350px] h-[400px] object-cover z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
