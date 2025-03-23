import { useEffect } from "react";
import sadCat from "../assets/sad-cat.png";

const NotFound = ({ darkMode }: { darkMode: boolean }) => {
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
    <div className="flex flex-col md:flex-row lg:flex-row 2xl:flex-row items-center justify-between min-h-[70vh] w-full sm:px-0 md:px-0 lg:px-0 2xl:px-0 text-center md:text-left">
      <div className="w-full md:w-1/2 justify-center items-center sm:pl-[1em] md:pl-[1em] 2xl:pl-[20rem]">
        <h1 className="text-5xl mt-[1em] sm:mt-[1em] md:mt-[1em] lg:mt-0 xl:mt-0 font-bold text-red-600 dark:text-red-400">So Sorry!</h1>
        <ul className={`mt-2 list-disc list-inside ${darkMode ? "text-gray-300" : "text-black"}`}>
          <p>The page you are looking for doesn't exist or has been moved.</p>
          <li>You may have typed the URL incorrectly.</li>
          <li>The link may be broken or outdated.</li>
        </ul>

        <a
          href="/"
          className={`mt-6 inline-block px-6 py-3 border-2 font-semibold rounded-lg shadow-lg transition duration-300 ${
            darkMode
              ? "border-red-400 text-red-400 hover:bg-gray-800"
              : "border-red-500 text-red-500 hover:bg-red-100"
          }`}
        >
          Proceed
        </a>
      </div>

      <div className="w-full md:w-1/2 flex justify-center sm:pr-[1em] md:pr-[1em] 2xl:pr-[15rem]">
        <img src={sadCat} alt="Sad Cat" className="w-80 md:w-[700px]" />
      </div>
    </div>
  );
};

export default NotFound;
