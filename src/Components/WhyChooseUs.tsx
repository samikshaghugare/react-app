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
    <section className="pl-[60px] pr-[60px] px-4 py-10">
      <h2 className="mb-8 font-inter font-bold text-[36px] leading-[45px] tracking-[0.3px]">
        Why Choose Us?
      </h2>

     <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
  {benefits.map(({ icon, title, description }) => (
    <div
      key={title}
      className="p-3 row shadow-md flex items-center gap-4 transition-all duration-300 hover:bg-white hover:rounded-[20px] hover:shadow-lg group"
    >
      <FontAwesomeIcon
        icon={icon}
        className="w-[31px] h-[32px] text-yellow-500 text-3xl shrink-0"
      />
      <div className="flex flex-col">
        <h5 className="font-inter font-medium text-[18px] leading-[100%] tracking-[0%] transition-transform duration-300 group-hover:-translate-y-2">
  {title}
</h5>

        <p className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 text-sm">
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
