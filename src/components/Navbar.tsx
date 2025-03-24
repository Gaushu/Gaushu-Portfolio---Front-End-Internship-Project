import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import menu from "../assets/menu.png";
import menuOpen from "../assets/menuopen.png";
import menuWhite from "../assets/menuwhite.png";
import menuOpenWhite from "../assets/menuopenwhite.png";

interface NavbarProps {
  darkMode: boolean;
  onThemeChange: () => void;
}


const Navbar: React.FC<NavbarProps> = ({ darkMode, onThemeChange }) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpenState(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={` sticky flex justify-between items-center w-full px-[3%] lg:px-[2%] xl:px-[2%] 2xl:px-[13%] py-[15px] sm:pt-[20px] md:pt-[60px] lg:pt-[80px] xl:pt-[90px] ${darkMode ? 'bg-black-200' : 'bg-white'}`}>
      <h3 className={`text-${darkMode ? 'white' : 'black'} transition-all ease-in-out duration-300 font-bold text-4xl lg:mr-[6em] xl:mr-[8em] 2xl:mr-[10em]`}>PORTFOLIO</h3>

      <button 
  className={`lg:hidden z-[100] absolute ${menuOpenState ? 'right-4' : 'right-4'}`} 
  onClick={() => setMenuOpenState(!menuOpenState)}
>
  <img 
    src={darkMode ? (menuOpenState ? menuOpenWhite : menuWhite) : (menuOpenState ? menuOpen : menu)} 
    alt="Menu Toggle" 
    className="w-10 h-10 transition-transform duration-300"
  />
</button>

      
      <div className={`fixed top-0 right-0 h-full ${menuOpenState ? `sm:w[50%] md:w-[30%] p-6 ${darkMode ? 'bg-neutral-900' : 'bg-gray-200'} shadow-lg shadow-gray-800 z-[52]` : 'w-0'} overflow-hidden lg:relative lg:w-auto lg:h-auto lg:flex`}>
      <ul className={`flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-0 xl:space-x-6 font-md text-2xl ${menuOpenState ? 'text-center mt-[7em]' : 'mt-12'} text-${darkMode ? 'white' : 'black'} lg:mt-0`}>
      {["Home","Background", "Experience", "About"].map((item) => (
            <NavLink
              key={item}
              to={`/${item === "Home" ? "" : item}`}
              className={({ isActive }) => `
                px-4 py-2 transition-all ease-in-out duration-300 
                ${isActive 
                  ? darkMode 
                    ? 'text-[#5EEAD4] border-b-2 border-[#5EEAD4] mb-[4px] font-semibold' 
                    : 'text-[#0F766E] border-b-2 border-[#0F766E] mb-[4px] font-semibold'
                  : darkMode 
                    ? 'text-white hover:text-gray-400 hover:mb-[5px] hover:border-b-2 hover:border-light-gray hover:font-semibold' 
                    : 'text-black hover:text-gray-400 hover:mb-[5px] hover:border-b-2 hover:border-light-gray hover:font-semibold'
                }
              `}
            >
              {item}
            </NavLink>
          ))}
        </ul>
        
        <div className={`mt-8 ${menuOpenState ? 'block' : 'hidden'} lg:hidden flex justify-center`}>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={onThemeChange}  
            />
            <div className="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
          </label>
        </div>
      </div>
      
      <div className="hidden lg:block">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            onChange={onThemeChange}  
          />
          <div className="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
