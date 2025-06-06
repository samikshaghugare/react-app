import React from "react";
import {
  faUsers,
  faDumbbell,
  faWifi,
  faCoffee,
  faCouch,
  faClock,
  faBasketballBall,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Benefit {
  icon: any;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: faUsers,
    title: "Community Events",
    description: "Engage in networking & social meetups.",
  },
  {
    icon: faDumbbell,
    title: "Gym Facilities",
    description: "Stay active with modern spaces.",
  },
  {
    icon: faWifi,
    title: "High-Speed WiFi",
    description: "Reliable internet for seamless work.",
  },
  {
    icon: faCoffee,
    title: "Cafe & Tea Bar",
    description: "Fuel up with coffee and refreshments.",
  },
  {
    icon: faTags,
    title: "Affordable Pricing",
    description: "Workspaces that fit your budget.",
  },
  {
    icon: faCouch,
    title: "Comfort Lounges",
    description: "Relax in cozy, well-designed lounges.",
  },
  {
    icon: faClock,
    title: "Quick Booking",
    description: "Book your workspace in seconds.",
  },
  {
    icon: faBasketballBall,
    title: "Sports Area",
    description: "Unwind with fun and fitness options.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
 <section className="pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-[80px] md:pr-[60px] px-4 py-10">
  {/* Heading and Arrow */}
  <div className="flex items-center justify-between mb-8">
    <h2 className="font-inter font-bold text-[24px] sm:text-[28px] md:text-[32px] tracking-[0.3px] leading-tight text-left flex-1">
      Why Choose Us?
    </h2>
    <span className="text-yellow-500 text-[44px] sm:text-[28px] md:text-[32px] font-bold ml-4 lg:hidden">
      →
    </span>
  </div>

  {/* Grid Section */}
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto gap-x-5 gap-y-5 lg:gap-x-2 lg:gap-y-2">
    {benefits.map(({ icon, title, description }) => (
      <div
        key={title}
        className="p-3 row shadow-md flex items-center gap-4 transition-all duration-300 hover:bg-white hover:rounded-[20px] hover:shadow-lg group flex-col sm:flex-col md:flex-row rounded-xl sm:rounded-2xl w-full sm:w-[95%] mx-auto"
      >
        <FontAwesomeIcon
          icon={icon}
          className="w-[31px] h-[32px] text-yellow-500 text-3xl shrink-0"
        />
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h5 className="font-inter font-medium text-[16px] sm:text-[18px] leading-[100%] tracking-[0%] transition-transform duration-300 group-hover:-translate-y-2">
            {title}
          </h5>
          <p className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 text-sm hidden md:block">
            {description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default WhyChooseUs;
