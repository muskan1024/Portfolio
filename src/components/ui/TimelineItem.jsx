import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaLaptopCode,
} from "react-icons/fa";

const TimelineItem = ({ experience, index, isLeft }) => {
  const icons = {
    education: <FaGraduationCap className="w-6 h-6" />,
    work: <FaBriefcase className="w-6 h-6" />,
    learning: <FaRocket className="w-6 h-6" />,
    internship: <FaLaptopCode className="w-6 h-6" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative flex ${isLeft ? "md:flex-row-reverse" : "md:flex-row"} items-center mb-8`}
    >
      {/* Timeline Line & Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
        <div
          className={`w-12 h-12 ${experience.color} rounded-full flex items-center justify-center text-white shadow-lg z-10`}
        >
          {icons[experience.type]}
        </div>
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300"
        >
          {/* Duration & Type */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`md:hidden w-10 h-10 ${experience.color} rounded-full flex items-center justify-center text-white`}
            >
              {icons[experience.type]}
            </div>
            <span className="text-sm font-semibold text-primary dark:text-primary-light">
              {experience.duration}
            </span>
          </div>

          {/* Title & Organization */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {experience.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {experience.organization} • {experience.location}
          </p>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            {experience.description}
          </p>

          {/* Highlights */}
          {experience.highlights && (
            <ul className="space-y-2 mb-4">
              {experience.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {experience.skills.slice(0, 5).map((skill, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
};

export default TimelineItem;
