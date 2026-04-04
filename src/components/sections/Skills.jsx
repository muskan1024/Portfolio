import { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES, getSkillsByCategory } from '@/data/skills';
import SkillCard from '../ui/SkillCard';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const skills = getSkillsByCategory(activeCategory);

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-light">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across DevOps, Full Stack Development, and AI/ML
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-dark text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-lighter border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Always learning and expanding my skill set. Currently focusing on cloud-native technologies and DevOps best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
