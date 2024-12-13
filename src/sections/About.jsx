import { useState } from 'react';
import Globe from 'react-globe.gl';
import { useTheme } from '../utils/ThemeContext';
import Button from '../components/Button.jsx';
import { scrollToSection } from '../utils/Scroll';


const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const { isDark } = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText(' razaawanpersonal@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
       <p className="head-text mb-10 text-light-text dark:text-dark-text transition-colors duration-300">
         About Me
        </p> 
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container bg-light-secondary dark:bg-dark-secondary">
            <img src="assets/grid1.png" alt="grid-1" className="shadow-lg rounded-md w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext text-light-text dark:text-dark-text">Hi, I'm Raza Awan</p>
              <p className="grid-subtext text-light-text dark:text-dark-text">
                I have honed my skills in both frontend and backend development, creating dynamic
                and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container bg-light-secondary dark:bg-dark-secondary">
            <img src={isDark ? 'assets/Illustration-dark.png' : 'assets/Illustration-light.png'} alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain shadow-lg" />
            <div>
              <p className="grid-headtext text-light-text dark:text-dark-text">Tech Stack</p>
              <p className="grid-subtext text-light-text dark:text-dark-text">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container bg-light-secondary dark:bg-dark-secondary">
            <div className="shadow-lg rounded-md w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rawalpindi, Pakistan', color: isDark ? '#FFFFFF' : '#1A1A1A', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext text-light-text dark:text-dark-text">
                I'm  flexible with different time zone communications & locations
              </p>
              <p className="grid-subtext text-light-text dark:text-dark-text">
                I&apos;m based in Rawalpindi, Pakistan and open to remote work worldwide.
              </p>
              <Button 
  name="Contact Me" 
  isBeam 
  containerClass="w-full mt-10"
  onClick={() => scrollToSection('contact')}
/>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container bg-light-secondary dark:bg-dark-secondary">
            <img src={isDark ? "assets/grid3.png" : "assets/grid-code.png"} alt="grid-3" className=" rounded-md shadow-lg w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext text-light-text dark:text-dark-text">Creativity and Minimalism</p>
              <p className="grid-subtext text-light-text dark:text-dark-text">
                I priortize creativity and minimalism . I enjoy exploring designing and developing websites with exquisite and minmalistic design..
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container bg-light-secondary dark:bg-dark-secondary">
            <img
              src={isDark ? 'assets/grid4.png' : "assets/grid-contact.png"}
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center text-light-text dark:text-dark-text">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className={`${isDark ? '' : 'invert'}`} />
                <p className="lg:text-2xl md:text-xl font-medium text-light-text dark:text-dark-text">
                razaawanpersonal@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
