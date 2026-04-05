import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="group relative bg-white dark:bg-dark-light rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-2xl"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FiCode className="w-16 h-16 text-primary opacity-50" />
          </div>
        )}

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-3">
            {project.liveLink && (
              <Button
                variant="primary"
                size="sm"
                icon={<FiExternalLink />}
                onClick={() => window.open(project.liveLink, "_blank")}
              >
                Live Demo
              </Button>
            )}
            {project.githubLink && (
              <Button
                variant="outline"
                size="sm"
                icon={<FiGithub />}
                onClick={() => window.open(project.githubLink, "_blank")}
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900"
              >
                Code
              </Button>
            )}
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        {/* Title & Category */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {project.year}
            </span>
          </div>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-dark-lighter text-gray-700 dark:text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-dark-lighter text-gray-700 dark:text-gray-300 rounded">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          onClick={() => navigate(`/project/${project.id}`)}
          className="w-full mt-4 text-primary dark:text-primary-light font-semibold hover:underline text-sm"
        >
          View Details →
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
