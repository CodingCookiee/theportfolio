import { motion } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';
import { skills } from '../constants';

const SkillCard = ({ title, icon, points, iconColors }) => {
  const { isDark } = useTheme();
  
  const getIconColor = (iconName) => {
    const invertedIcons = {
      "Three Js": true,
      "Github": true,
      "Express Js": true,
      "Aws": true,
      "RESTful": true
    };

    if (invertedIcons[iconName]) {
      return isDark ? "#FFFFFF" : "#000000";
    }
    return iconColors[iconName];
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-6 rounded-2xl bg-light-secondary dark:bg-dark-secondary border border-light-text/10 dark:border-dark-text/10 transition-colors duration-300 hover:shadow-xl"
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-light-primary dark:bg-dark-primary transition-colors duration-300">
          <img src={icon} alt={title} className="w-1/2 h-1/2 object-contain" />
        </div>
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text transition-colors duration-300">{title}</h3>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        {points.images.map((Icon, index) => (
          <motion.div
            key={points.names[index]}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-lg bg-light-primary dark:bg-dark-primary flex items-center justify-center transition-all duration-300 group-hover:shadow-lg">
              <Icon 
                className="w-6 h-6 transition-colors duration-300" 
                style={{ color: getIconColor(points.names[index]) }}
              />
            </div>
            <p className="text-sm text-center text-light-text/80 dark:text-dark-text/80 transition-colors duration-300">
              {points.names[index]}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const iconColors = {
  "HTML5": "#E34F26",
  "CSS3": "#1572B6",
  "JavaScript": "#F7DF1E",
  "React js": "#61DAFB",
  "Tailwind CSS": "#06B6D4",
  "Three Js": "#000000",
  "Node Js": "#339933",
  "Express Js": "#000000",
  "MongoDB": "#47A248",
  "Sql": "#4479A1",
  "Firebase": "#FFCA28",
  "Vs Code": "#007ACC",
  "Github": "#181717",
  "Git": "#F05032",
  "Vite Js": "#646CFF",
  "Webpack": "#8DD6F9",
  "RESTful": "#000000",
  "Jest": "#C21325",
  "Stripe": "#008CDD",
  "Docker": "#2496ED",
  "Aws": "#232F3E",
  "Figma": "#F24E1E",
  "Postman": "#FF6C37",
  "Domain Integration": "#4CAF50"
};

const Skills = () => {
  return (
    <section className="c-space my-20" id="skills">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="head-text text-light-text dark:text-dark-text transition-colors duration-300">
            Technical Proficiency
          </h2>
          <p className="mt-4 text-lg text-light-text/60 dark:text-dark-text/60 transition-colors duration-300">
            Crafting digital experiences with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} iconColors={iconColors} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
