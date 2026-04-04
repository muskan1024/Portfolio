import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { STATS } from '@/utils/constants';
import { animateValue } from '@/utils/helpers';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [animatedStats, setAnimatedStats] = useState(
    STATS.map(stat => ({ ...stat, currentValue: 0 }))
  );

  useEffect(() => {
    if (isVisible) {
      animatedStats.forEach((stat, index) => {
        animateValue(0, stat.value, 2000, (value) => {
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = { ...newStats[index], currentValue: value };
            return newStats;
          });
        });
      });
    }
  }, [isVisible]);

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm currently pursuing my <strong className="text-primary dark:text-primary-light">MCA in AI & ML</strong> (final semester) 
                and am an aspiring <strong className="text-primary dark:text-primary-light">DevOps Engineer</strong> with a strong foundation 
                in full-stack web development.
              </p>
              
              <p className="text-lg leading-relaxed">
                My journey began with building full-stack applications using the <strong>MERN stack</strong>, 
                where I developed and deployed over 5+ production-ready websites including e-commerce platforms, 
                blogging systems, and complex web applications.
              </p>

              <p className="text-lg leading-relaxed">
                Currently, I'm diving deep into <strong className="text-secondary dark:text-secondary-light">DevOps practices</strong>, 
                learning containerization with Docker and Kubernetes, implementing CI/CD pipelines with Jenkins and GitHub Actions, 
                and exploring Infrastructure as Code with Terraform.
              </p>

              <p className="text-lg leading-relaxed">
                I'm passionate about <strong className="text-accent dark:text-accent-light">automation</strong>, 
                cloud infrastructure, and building scalable systems. My goal is to bridge the gap between development 
                and operations, creating efficient deployment pipelines and robust infrastructure.
              </p>
            </div>

            {/* What I'm Learning */}
            <div className="mt-8 p-6 bg-gray-50 dark:bg-dark-light rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Currently Learning
              </h3>
              <ul className="space-y-2">
                {[
                  'Kubernetes & Container Orchestration',
                  'AWS Cloud Services & Architecture',
                  'Terraform & Infrastructure as Code',
                  'CI/CD Pipeline Optimization',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary">▸</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Stats & Terminal Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {animatedStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl border border-primary/20 dark:border-primary/30 text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.currentValue}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Terminal Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark p-6 rounded-xl border border-gray-700 font-mono text-sm"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-gray-400">terminal</span>
              </div>

              {/* Terminal Content */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300">whoami</span>
                </div>
                <div className="pl-4 text-blue-400">
                  aspiring-devops-engineer
                </div>

                <div className="flex items-start gap-2 mt-4">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300">cat skills.txt</span>
                </div>
                <div className="pl-4 text-gray-400 space-y-1">
                  <div>• Full Stack Development (MERN)</div>
                  <div>• DevOps & Cloud (Docker, K8s, AWS)</div>
                  <div>• CI/CD Pipelines (Jenkins, GitHub Actions)</div>
                  <div>• Infrastructure as Code (Terraform)</div>
                </div>

                <div className="flex items-start gap-2 mt-4">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300">echo $PASSION</span>
                </div>
                <div className="pl-4 text-purple-400">
                  "Automation & Building Scalable Systems"
                </div>

                <div className="flex items-start gap-2 mt-4">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300 animate-pulse">_</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
