import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  glassEffect = false,
  ...props 
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300';
  
  const glassStyles = glassEffect 
    ? 'glass' 
    : 'bg-white dark:bg-dark-light border border-gray-200 dark:border-gray-700';
  
  const hoverStyles = hoverEffect 
    ? 'card-hover' 
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
