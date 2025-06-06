import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222E34] h-[52px] sm:h-[60px] md:h-[52px] text-white px-4 sm:px-6 md:px-8 py-1 text-center mt-auto flex flex-col justify-center gap-0.5 sm:gap-1 md:gap-0">
      <h4 className="text-xs sm:text-sm md:text-base leading-tight">
        © Copyright {new Date().getFullYear()} Bhive Private Limited. All rights reserved.
      </h4>
      <h5 className="text-xs sm:text-sm md:text-base leading-tight">
        Designed by <span style={{ color: "#4caf50" }}>Samiksha Ghugare</span>
      </h5>
    </footer>
  );
};

export default Footer;
