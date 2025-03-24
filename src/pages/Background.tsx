import Header from "../components/Header";
import { useEffect } from "react";

interface BackgroundProps {
  darkMode: boolean;
}

const Backgrounds = [
  {
    title: "Front End Developer Intern",
    company: "Monad Solutions Inc.",
    duration: "Mar 2025 - Present",
    responsibilities: [
      "Developed front-end components using React and TailwindCSS.",
      "Optimized UI/UX for a smoother user experience.",
      "Developed reusable React components for future use.",
    ],
  },
  {
    title: "Social Media Manager",
    company: "Magkaisa Creative Space",
    duration: "Apr 2020 - Aug 2024",
    responsibilities: [
      "Managed and grew social media accounts through strategic content planning.",
      "Created engaging posts, graphics, and multimedia content.",
      "Analyzed audience insights and optimized campaigns for better engagement.",
    ],
  },
];

const Background: React.FC<BackgroundProps> = ({ darkMode }) => {
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
    <div
  className={`flex flex-col items-center text-center justify-center min-h-[calc(70vh-80px)] w-full ${
    darkMode ? "bg-[#1d1d1d]" : "bg-white"
  }`}
>
  <Header darkMode={darkMode} title="My Career" subtitle="Background" />

  <div className="flex items-start justify-center flex-wrap gap-4 xl:gap-8 w-full mt-8 lg:mt-10 xl:mt-10 2xl:mt-10">
    {Backgrounds.map((exp, index) => (
      <aside
        key={index}
        className={`relative border-2 py-4 px-5 xl:p-4 rounded-3xl w-[300px] xl:w-[500px] font-mono backdrop-blur-md shadow-lg animate-float
          ${darkMode ? 'border-white bg-[#1d1d1d] text-white shadow-white/20' : 'border-black bg-white text-black shadow-black/20'}`}
      >
        <div className="absolute top-2 left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-6 xl:w-10 xl:h-10 ${darkMode ? "text-white" : "text-black"}`}
          >
            <path d="M23 12L19.6 9.2l.7-4.3-4.2-.8L13.9.3 12 3 10.1.3 6.9 4.1l-4.2.8.7 4.3L1 12l3.4 2.8-.7 4.3 4.2.8 3.2 3.8 3.1-3.8 4.2-.8-.7-4.3L23 12zm-13 4.3l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z" />
          </svg>
        </div>

        <p className={`font-bold text-lg xl:text-2xl ${darkMode ? "text-white" : "text-black"}`}>
          {exp.title}
        </p>
        <p className={`text-base xl:text-xl font-normal ${darkMode ? "text-white" : "text-black"}`}>
          {exp.company}
        </p>
        <p className={`text-black text-sm xl:text-xs ${darkMode ? "text-gray-300" : "text-black"}`}>
          {exp.duration}
        </p>
        <ul className={`text-xs xl:text-sm mt-2 list-disc pl-4 pt-3 xl:pt-6 text-left ${darkMode ? "text-white" : "text-black"}`}>
          {exp.responsibilities.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </aside>
    ))}
  </div>
</div>
  );
};

export default Background;


