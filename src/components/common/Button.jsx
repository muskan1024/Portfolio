import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  className = '',
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:scale-105',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark hover:shadow-lg hover:scale-105',
    outline: 'border-2 border-primary text-primary dark:text-primary-light hover:bg-primary hover:text-white',
    ghost: 'text-primary dark:text-primary-light hover:bg-primary/10',
    accent: 'bg-accent text-white hover:bg-accent-dark hover:shadow-lg hover:scale-105',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;
