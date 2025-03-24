import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Background from "./pages/Background";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import NotFound from "./components/NotFound";
import Contact from "./pages/Contact";

const AppContent = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const location = useLocation(); 
  const isResumePage = location.pathname === "/Resume"; 

  // Toggle theme based on darkMode state
  const handleThemeChange = () => {
    setDarkMode((prev) => !prev);
  };

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
    <div className={`h-screen ${darkMode ? "bg-[#1d1d1d]" : "bg-white"} flex flex-col`}>
    {/* Navbar remains fixed at the top */}
    {!isResumePage && <Navbar darkMode={darkMode} onThemeChange={handleThemeChange} />}
  
    {/* Scrollable main content */}
    <main className={`flex-grow overflow-hidden ${isResumePage ? "pt-16" : ""}`}>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/Background" element={<Background darkMode={darkMode} />} />
        <Route path="/About" element={<About darkMode={darkMode}/>} />
        <Route path="/Experience" element={<Experience darkMode={darkMode} />} />
        <Route path="/Resume" element={<Resume darkMode={darkMode} />} />
        <Route path="*" element={<NotFound darkMode={darkMode}/>} />
        <Route path="/Contact" element={<Contact darkMode={darkMode} />} />
      </Routes>
    </main>
  
    {/* Footer remains at the bottom */}
    <Footer darkMode={darkMode} />
  </div>
  
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

