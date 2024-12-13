import { useTheme } from '../utils/ThemeContext';
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <footer className="w-full -mt-5 bg-light-primary dark:bg-dark-primary c-space py-4 border-t border-light-text/10 dark:border-dark-text/10 flex justify-between items-center flex-wrap gap-5 transition-colors duration-300">
      <div className="text-light-text/60 dark:text-dark-text/60 flex gap-2 transition-colors duration-300">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
  <a href="https://github.com/CodingCookiee" target="_blank" rel="noopener noreferrer">
    <div className="social-icon cursor-pointer bg-light-secondary dark:bg-dark-secondary border-light-text/10 dark:border-dark-text/10 hover:bg-light-primary dark:hover:bg-dark-primary transition-colors duration-300">
      <img src="/assets/github.svg" alt="github" className={`w-1/2 h-1/2 ${!isDark ? 'invert' : ''}`} />
    </div>
  </a>
  <a href="https://www.linkedin.com/in/raza-awan-1a82551b2/" target="_blank" rel="noopener noreferrer">
    <div className="social-icon cursor-pointer bg-light-secondary dark:bg-dark-secondary border-light-text/10 dark:border-dark-text/10 hover:bg-light-primary dark:hover:bg-dark-primary transition-colors duration-300">
      <FaLinkedin className={`w-1/2 h-1/2 ${!isDark ? 'text-light-text' : 'text-dark-text'}`} />
    </div>
  </a>
</div>


      <p className="text-light-text/60 dark:text-dark-text/60 transition-colors duration-300">
        © 2024 raza awan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
