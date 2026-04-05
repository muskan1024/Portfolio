import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { PROFICIENCY_LEVELS } from "@/data/skills";

const SkillCard = ({ skill, index }) => {
  // Get icon component dynamically
  const getIcon = (iconName) => {
    const IconComponent = FaIcons[iconName] || SiIcons[iconName];
    return IconComponent ? <IconComponent className="w-12 h-12" /> : null;
  };

  const proficiency = PROFICIENCY_LEVELS[skill.level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="group relative p-6 bg-white dark:bg-dark-light rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <div
          className="transition-transform duration-300 group-hover:scale-110"
          style={{ color: skill.color }}
        >
          {getIcon(skill.icon)}
        </div>

        {/* Skill Name */}
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
          {skill.name}
        </h3>

        {/* Proficiency Bar */}
        <div className="w-full space-y-2">
          <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
            <span>{skill.level}</span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-dark-lighter rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: proficiency.width }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className={`h-full ${proficiency.color} rounded-full`}
            />
          </div>
        </div>

        {/* Category Badge */}
        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
          {skill.category}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
