
  interface FooterProps {
    darkMode: boolean;
  }
  
  const Footer: React.FC<FooterProps> = ({ darkMode }) => {
    return (
      <footer
        className={`sticky bottom-0 left-0 w-full text-center py-3 
          ${darkMode ? 'bg-black-200 text-white' : 'bg-white text-black'}`}
      >
        <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[11px]">
          &copy; {new Date().getFullYear()} Xzander Nollora. All rights reserved.
        </p>
        <p className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[10px] italic">
          "Even the best programs start with errors. Keep compiling your dreams."
        </p>
      </footer>
    );
  };
  
  export default Footer;
  