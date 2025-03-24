import Header from "../components/Header";

const ExperiencedData = [
  { name: "HTML", expertise: "Proficient", description: "Can work easily & independently" },
  { name: "CSS", expertise: "Proficient", description: "Can work easily & independently" },
  { name: "JavaScript", expertise: "Intermediate", description: "Can work with some guidance" },
  { name: "React", expertise: "Basic", description: "Knows fundamentals, but limited hands-on experience" },
  { name: "Tailwind", expertise: "Intermediate", description: "Can work with some guidance" },
  { name: "PHP", expertise: "Intermediate", description: "Can work with some guidance" },
  { name: "VB.NET", expertise: "Intermediate", description: "Can work with some guidance" },
  { name: "MySQL", expertise: "Intermediate", description: "Can work with some guidance" },
  { name: "Figma", expertise: "Intermediate", description: "Can work with some guidance" },
  { name: "PC Building & Assembly", expertise: "Intermediate", description: "Can work with some guidance" },
  { name: "Git", expertise: "Basic", description: "Knows fundamentals, but limited hands-on experience" },
  { name: "GitHub", expertise: "Proficient", description: "Can work easily & independently" },
  { name: "TypeScript", expertise: "Basic", description: "Knows fundamentals, but limited hands-on experience" },
  { name: "C#", expertise: "Basic", description: "Knows fundamentals, but limited hands-on experience" },
  { name: "C++", expertise: "Basic", description: "Knows fundamentals, but limited hands-on experience" },
  { name: "Software Development Life Cycle (SDLC)", expertise: "Fundamentals", description: "Understands core concepts" },
];

const Experience = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div
      className={`flex flex-col items-center text-center !overflow-hidden justify-center min-h-[calc(70vh-80px)] w-full ${
        darkMode ? "bg-[#1d1d1d]" : "bg-white"
      }`}
    >
      <Header darkMode={darkMode} title="Explore My" subtitle="Experience" />
      <div className="relative w-full overflow-hidden group">
        <div className="slider">
          <div className="list flex gap-4">
            {[...ExperiencedData, ...ExperiencedData].map((experience, index) => (
              <div
                key={index}
                className={`card relative w-[250px] h-[120px] xl:w-[350px] xl:h-[220px] p-6 border-2 rounded-[23px] shadow-xl transition-all cursor-pointer
                hover:scale-105 flex flex-col justify-center items-center text-center
                ${
                  darkMode
                    ? "bg-[#1d1d1d] border-white text-white"
                    : "bg-white border-black text-black"
                }`}
                style={{ "--position": index + 1 } as React.CSSProperties}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-12 h-12 mb-2 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  <path d="M23 12L19.6 9.2l.7-4.3-4.2-.8L13.9.3 12 3 10.1.3 6.9 4.1l-4.2.8.7 4.3L1 12l3.4 2.8-.7 4.3 4.2.8 3.2 3.8 3.1-3.8 4.2-.8-.7-4.3L23 12zm-13 4.3l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z" />
                </svg>

                <div className="card-header text-2xl font-bold">
                  <span>{experience.name}</span>
                </div>

                <div className="sub-header mt-3 text-lg">
                  <span
                    className={darkMode ? "text-gray-300" : "text-gray-500"}
                  >
                    {experience.expertise}
                  </span>
                </div>

                <div className="sub-header mt-1 text-sm">
                  <span
                    className={darkMode ? "text-gray-400" : "text-gray-600"}
                  >
                    {experience.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
