import React from "react";
import coworkingVideo from "../Assets/coworking_video.mp4";
import background from "../Assets/background.png";
import small_vector from "../Assets/small_vector.png";
import vector from "../Assets/vector.png";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full overflow-hidden py-10 md:py-20">
  <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-10">
    {/* Right Block */}
    <div className="order-1 md:order-2 md:col-span-5 h-[300px] md:h-[400px] flex relative">
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-right bg-contain z-20 pointer-events-none"
        style={{ backgroundImage: `url(${vector})` }}
      ></div>
      <video
        src={coworkingVideo}
        autoPlay
        loop
        muted
        playsInline
        className="relative mx-auto mt-6 md:mt-[50px] w-[280px] md:w-[350px] h-full object-cover z-10"
      />
    </div>

    {/* Left Block */}
    <div className="order-2 md:order-1 md:col-span-7 text-left relative">
      {/* Hide background image on mobile */}
      <div
        className="hidden md:block absolute w-[860px] h-[754px] -top-[150px] opacity-70 mix-blend-multiply bg-center bg-cover z-0"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div
          className="ml-[325px] mt-[67px] w-[900px] h-[900px] bg-no-repeat z-10"
          style={{ backgroundImage: `url(${small_vector})` }}
        ></div>
      </div>

      <h1 className="relative font-inter font-bold text-[22px] leading-[32px] tracking-tight ml-1 md:ml-[60px] md:text-[58px] md:leading-[100%] md:tracking-[-1px] z-20">
        Host your meeting with <br className="hidden md:block" />
        world-class amenities. <br className="hidden md:block" />
        Starting at <span className="text-yellow-500">₹199/-!</span>
      </h1>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
