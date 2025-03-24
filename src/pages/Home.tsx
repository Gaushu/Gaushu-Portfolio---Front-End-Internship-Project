import profileImage from "../assets/me.jpg";

import { useNavigate } from "react-router-dom";

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center !overflow-hidden min-h-[calc(85vh-90px)] px-4 md:px-16 lg:px-0 xl:px-0">
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row !overflow-hidden items-center justify-center w-full max-w-screen-lg">
        <div className="flex-1 flex justify-center pt-4">
          <img
            src={profileImage}
            alt="Profile"
            className={`w-[230px] h-[230px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[450px] xl:h-[450px] object-cover rounded-full 
              ${darkMode ? "shadow-[0_0_10px_3px_rgba(255,255,255,0.2)] white" 
              : "shadow-[0_0_10px_3px_rgba(0,0,0,0.5)] 2xl white"}`}
          />
        </div>

        <div className="flex flex-col items-center md:items-center xl:items-start justify-center space-y-4 text-center md:text-center xl:text-center mt-6 lg:mt-0">
        <div className="space-y-2">
          <h2 className="text-xl lg:text-2xl font-semibold">Hello I'm</h2>
          <h2 className="text-3xl lg:text-5xl font-bold">Xzander James Nollora</h2>
          <h2 className="text-xl lg:text-3xl font-semibold">FE Developer Intern</h2>
        </div>

          <div className="flex flex-col md:flex-row xl:flex-row w-full gap-4 md:gap-2 xl:gap-2 md:items-center xl:items-center md:justify-center xl:justify-center">
          <button
            className={`py-2 px-4 font-bold border-2 rounded-full cursor-pointer transition-all duration-300 
              ${darkMode ? "bg-black-200 text-white border-white hover:bg-white hover:text-black" 
                         : "bg-white text-black border-gray-800 hover:bg-black hover:text-white"}`}
            onClick={() => navigate("/Resume")}
          >
            View Resume
          </button>

          <button
            className={`py-2 px-4 font-bold border-2 rounded-full cursor-pointer transition-all duration-300 
              ${darkMode ? "bg-white text-black border-white hover:bg-[#1d1d1d] hover:text-white" 
                         : "bg-black text-white border-black hover:bg-white hover:text-black"}`}
            onClick={() => navigate("/Contact")}
          >
            Contact Info
          </button>
        </div>

<div className="flex items-center justify-center space-x-4 w-full">
  <a href="https://www.facebook.com/xander.nollora" target="_blank" rel="noopener noreferrer">
    <button
      className={`w-8 h-8 rounded-full flex justify-center items-center transition-colors duration-300 
        ${darkMode ? 'bg-white text-black hover:bg-blue-500' : 'bg-black text-white hover:bg-blue-500'}`}
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12a10 10 0 10-11.5 9.9v-7h-3v-3h3V9.5c0-3 1.5-4.5 4.6-4.5 1.3 0 2 .1 2.3.1v2.9h-1.6c-1.3 0-1.7.8-1.7 1.6V12h3l-.5 3h-2.5v7A10 10 0 0022 12z"/>
      </svg>
    </button>
  </a>

  <a href="https://www.instagram.com/sabaoko_o/" target="_blank" rel="noopener noreferrer">
    <button
      className={`w-8 h-8 rounded-lg flex justify-center items-center transition-colors duration-300 
        ${darkMode ? 'bg-white text-black hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600' : 'bg-black text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600'}`}
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm4.5 4a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm6.5-8.5a1.25 1.25 0 11-1.25 1.25A1.25 1.25 0 0118.5 5.5z"/>
      </svg>
    </button>
  </a>

  <a href="https://github.com/Gaushu" target="_blank" rel="noopener noreferrer">
    <button
      className={`w-8 h-8 rounded-full flex justify-center items-center transition-colors duration-300 
        ${darkMode ? 'bg-white text-black hover:bg-gray-500' : 'bg-black text-white hover:bg-gray-500'}`}
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M12 .5A12 12 0 000 12.42a11.9 11.9 0 008.2 11.4c.6.11.82-.26.82-.58v-2c-3.34.72-4-1.6-4-1.6a3.1 3.1 0 00-1.35-1.73c-1.1-.75.08-.73.08-.73a2.5 2.5 0 011.83 1.3 2.5 2.5 0 003.4 1 2.5 2.5 0 01.75-1.6c-2.67-.3-5.47-1.33-5.47-6A4.7 4.7 0 016 7.27a4.4 4.4 0 01.12-3.18s1-.3 3.3 1.27a11.3 11.3 0 016 0c2.3-1.58 3.3-1.27 3.3-1.27a4.4 4.4 0 01.12 3.18A4.7 4.7 0 0118 12c0 4.67-2.8 5.7-5.48 6a2.5 2.5 0 01.77 1.9v2.8c0 .32.22.7.83.58A11.9 11.9 0 0024 12.42 12 12 0 0012 .5z"/>
      </svg>
    </button>
  </a>

  <a href="https://www.linkedin.com/in/xzander-james-nollora-50995a338/" target="_blank" rel="noopener noreferrer">
    <button
      className={`w-8 h-8 rounded-sm flex justify-center items-center transition-colors duration-300 
        ${darkMode ? 'bg-white text-black hover:bg-blue-600' : 'bg-black text-white hover:bg-blue-600'}`}
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.362c0-1.278-.025-2.922-1.78-2.922-1.782 0-2.055 1.392-2.055 2.832v5.452H9.505V9h3.414v1.561h.049c.477-.9 1.638-1.846 3.372-1.846 3.603 0 4.267 2.37 4.267 5.455v6.282zM5.337 7.433c-1.14 0-2.062-.925-2.062-2.066 0-1.14.922-2.065 2.062-2.065 1.141 0 2.063.925 2.063 2.065 0 1.14-.922 2.066-2.063 2.066zM7.106 20.452H3.564V9h3.542v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729V22.27C0 23.227.792 24 1.771 24h20.454C23.208 24 24 23.227 24 22.271V1.73C24 .774 23.208 0 22.225 0z"/>
      </svg>
    </button>
  </a>
</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
