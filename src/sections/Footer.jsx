import { useTheme } from '../utils/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <footer className="w-full bg-light-primary dark:bg-dark-primary c-space py-4 border-t border-light-text/10 dark:border-dark-text/10 flex justify-between items-center flex-wrap gap-5 transition-colors duration-300">
      <div className="text-light-text/60 dark:text-dark-text/60 flex gap-2 transition-colors duration-300">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon cursor-pointer bg-light-secondary dark:bg-dark-secondary border-light-text/10 dark:border-dark-text/10 hover:bg-light-primary dark:hover:bg-dark-primary transition-colors duration-300">
          <img src="/assets/github.svg" alt="github" className={`w-1/2 h-1/2 ${!isDark ? 'invert' : ''}`} />
        </div>
        <div className="social-icon cursor-pointer bg-light-secondary dark:bg-dark-secondary border-light-text/10 dark:border-dark-text/10 hover:bg-light-primary dark:hover:bg-dark-primary transition-colors duration-300">
          <img src="/assets/twitter.svg" alt="twitter" className={`w-1/2 h-1/2 ${!isDark ? 'invert' : ''}`} />
        </div>
        <div className="social-icon cursor-pointer bg-light-secondary dark:bg-dark-secondary border-light-text/10 dark:border-dark-text/10 hover:bg-light-primary dark:hover:bg-dark-primary transition-colors duration-300">
          <img src="/assets/instagram.svg" alt="instagram" className={`w-1/2 h-1/2 ${!isDark ? 'invert' : ''}`} />
        </div>
      </div>

      <p className="text-light-text/60 dark:text-dark-text/60 transition-colors duration-300">
        © 2024 Raza Awan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
