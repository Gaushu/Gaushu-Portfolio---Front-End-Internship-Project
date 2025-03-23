import Header from "../components/Header";
import { useRef, useState } from "react";
import emailIcon from "../assets/email.png";
import emailIconWhite from "../assets/emailwhite.png";

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {

  const email = "xzanderjamesnollora@gmail.com";
  const emailRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    if (emailRef.current) {
      emailRef.current.select();
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col items-center text-center justify-center min-h-[calc(70vh-80px)] w-full">
      <Header darkMode={darkMode} title="Get in Touch" subtitle="Contact Me" />

      <div className="flex flex-col items-center mt-1 space-y-1 mx-2">
        <p className="text-xl font-normal tracking-wide">
          Hire me!
        </p>

        <div
      className={`flex items-center w-full xl:max-w-[380px] w-full xl:p-4 p-2 xl:rounded-3xl rounded-2xl border-2 ${
        darkMode
          ? "border-white bg-[#1d1d1d] text-white"
          : "border-black bg-white text-black"
      }`}>
      <img
        src={darkMode ? emailIconWhite : emailIcon}
        alt="Email Icon"
        className="w-8 h-8 mr-4"
      />
      <input
        ref={emailRef}
        value={email}
        readOnly
        className="absolute opacity-0 pointer-events-none"
      />

      <p className="text-lg font-semibold">{email}</p>

      <span
        onClick={copyToClipboard}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="ml-auto cursor-pointer text-xl hover:opacity-100 transition ml-2 relative"
      >
        {copied ? "✔️" : "🔗"}

        {showTooltip && (
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 font-semibold text-xs rounded-md 
                      bg-gray-800 text-white whitespace-nowrap opacity-100 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </span>
        )}
      </span>
    </div>
      </div>
    </div>
  );
};

export default Contact;
