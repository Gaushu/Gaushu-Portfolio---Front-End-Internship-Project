import React from "react";

interface HeaderProps {
  darkMode: boolean;
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ darkMode, title, subtitle }) => {
  return (
<div
  className={`fixed xl:top-[11em] top-[4em] sm:top-[4em] md:top-[7em] lg:top-[9em] border left-0 w-full py-1 text-center space-y-[-10px] xl:space-y-[-17px] z-50 ${
    darkMode ? "bg-[#1d1d1d]" : "bg-white"
  }`}>
      <h2 className={`xl:mt-0 sm:mt-0 md:mt-0 lg:mt-0 text-sm sm:text-lg md:text-lg xl:text-xl font-light text-center ${darkMode ? "text-white" : "text-black"}`}>
        {title}
      </h2>
      <h3
        className={`text-[30px] sm:text-[35px] md:text-[45px] lg:text-[50px] xl:text-[60px] font-bold text-center xl:mb-[2em] ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {subtitle}
      </h3>
    </div>
  );
};

export default Header;
