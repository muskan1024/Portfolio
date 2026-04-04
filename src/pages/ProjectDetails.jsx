import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import { getProjectById } from '@/data/projects';
import Button from '@/components/common/Button';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <Button onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark pt-24 pb-16">
      <div className="container-custom">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-primary dark:text-primary-light hover:underline mb-8"
        >
          <FiArrowLeft /> Back to Projects
        </motion.button>

        {/* Project Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-dark-light rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700"
        >
          {/* Project Image */}
          <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <div className="text-6xl gradient-text font-bold">{project.title.charAt(0)}</div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-gray-600 dark:text-gray-400">{project.year}</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                {project.liveLink && (
                  <Button
                    variant="primary"
                    icon={<FiExternalLink />}
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    Live Demo
                  </Button>
                )}
                {project.githubLink && (
                  <Button
                    variant="outline"
                    icon={<FiGithub />}
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    View Code
                  </Button>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About the Project</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-300 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            {project.challenges && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Challenges & Solutions</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
