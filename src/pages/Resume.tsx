import { useNavigate } from "react-router-dom";

const Resume = ({ darkMode }: { darkMode: boolean }) => {
  const navigate = useNavigate();

  const handleDownload = async () => {
    try {
      const response = await fetch("/resume.png", { method: "HEAD" });

      if (!response.ok) {
        alert("Resume file not found!");
        return;
      }

      const link = document.createElement("a");
      link.href = "/resume.png";
      link.download = "NOLLORA-XZANDER-RESUME.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      alert("Error fetching the resume file.");
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[calc(70vh-90px)] 
        ${darkMode ? "bg-[#1d1d1d] text-white" : "bg-white text-black"}`}
    >
      {/* Resume Image */}
      <img src="/resume.png" alt="Resume" className={`w-3/4 max-w-lg rounded-lg transition-all 
    ${darkMode ? "shadow-[0px_5px_10px_rgba(255,255,255,0.5)]" : "shadow-[0px_5px_20px_rgba(0,0,0,2)]"}`} />

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          className={`px-4 py-2 border-2 font-normal rounded-lg transition 
            ${
              darkMode
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
          onClick={() => navigate("/")}
        >
          Go Back to Home
        </button>
        <button
          className={`px-4 py-2 border-2 font-normal rounded-lg transition 
            ${
              darkMode
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Resume;
