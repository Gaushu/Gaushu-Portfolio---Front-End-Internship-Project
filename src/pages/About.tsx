import { useEffect } from "react";
import me from "../assets/aboutme.jpg";
import educIcon from "../assets/educ.png";
import educWhiteIcon from "../assets/educwhite.png";
import forteIcon from "../assets/Interest.png";
import forteWhiteIcon from "../assets/Interest.png";
import Header from "../components/Header";

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-[#1d1d1d]", "text-white");
      document.body.classList.remove("bg-gray-200", "text-black");
    } else {
      document.body.classList.add("bg-gray-200", "text-black");
      document.body.classList.remove("bg-[#1d1d1d]", "text-white");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col items-center text-center !overflow-hidden justify-center min-h-[calc(70vh-80px)] w-full">
      <Header darkMode={darkMode} title="Get to know more" subtitle="About Me" />

      <div className="flex flex-col md:flex-row items-center justify-center w-full mt-10 sm:mt-30 md:mt-30 lg:mt-[9em] xl:mt-[10em] 2xl:mt-[9em] gap-10 p-4 xl:p-0 xl:mb-0 mb-20">
        <div
          className={`relative w-[240px] w-[240px] md:w-[500px] md:h-[340px] lg:w-[500px] lg:h-[380px] xl:w-[340px] xl:h-[380px] border-[2px] rounded-3xl flex justify-center items-center ${
            darkMode
              ? "bg-[#1d1d1d] border-white shadow-[10px_10px_0_-1.5px_#1d1d1d,10px_10px_0_0_#fff]"
              : "bg-white border-black shadow-[10px_10px_0_-1.5px_#fff,10px_10px_0_0_#000]"
          }`}
        >
          <img src={me} alt="Me" className="w-[352px] h-[246px] md:w-[330px] md:h-[337px] lg:w-[330px] lg:h-[376px] xl:w-[352px] xl:h-[376px] object-cover rounded-3xl" />
        </div>

        <div className="flex flex-col w-full xl:w-[50%] gap-5">
          
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-3">
            <div
              className={`w-full lg:w-1/2 xl:w-1/2 p-4 border-2 rounded-xl flex flex-col items-center gap-2 ${
                darkMode ? "bg-[#1d1d1d] text-white border-white" : "bg-white text-black border-black"
              }`}
            >
              <img src={darkMode ? educWhiteIcon : educIcon} alt="Education Icon" className="w-10 h-10 xl:w-16 xl:h-16" />
              <h3 className="text-lg font-bold xl:text-2xl">Education</h3>
              <p className="text-sm text-center">
                Bachelor of Science in Information Technology, 4th Year at Lyceum of Alabang.
              </p>
            </div>

            <div
              className={`w-full lg:w-1/2 xl:w-1/2 p-4 border-2 rounded-xl flex flex-col items-center gap-2 ${
                darkMode ? "bg-[#1d1d1d] text-white border-white" : "bg-white text-black border-black"
              }`}
            >
              <img src={darkMode ? forteWhiteIcon : forteIcon} alt="Forte Icon" className="w-10 h-10 xl:w-16 xl:h-16" />
              <h3 className="text-lg font-bold xl:text-2xl">Forte</h3>
              <p className="text-sm text-center">
                Passionate about Front-End Development, UI/UX design, and creating seamless user experiences.
              </p>
            </div>
          </div>
            <div className={`relative p-1 text-left ${darkMode ? "text-white" : "text-black"}`}>
              <p className="text-sm md:text-xl lg:text-lg xl:text-xl font-normal text-justify">
    Hi! I'm Xzander,  
    I thrive on challenges, always eager to learn and adapt. Hardworking and dedicated, I do whatever it takes to understand complex IT concepts and improve my skills.
    I’m always exploring new ideas and technologies, never settling for what I know now. Innovation drives me, both in my personal growth and in the work I create.
    I'm excited to gain hands-on experience and continue growing in this ever-evolving field.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
