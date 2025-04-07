import { motion } from 'framer-motion';

export default function IconButton({
  icon,
  label,
  className = '',
  onClick,
  ...props
}) {
  return (
    <motion.span
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center justify-center
        w-10 h-10 rounded-full
        bg-surface/10 hover:bg-surface/20
        text-accent-green
        transition-colors duration-300
        cursor-pointer
        ${className}
      `}
      aria-label={label}
      {...props}
    >
      {icon}
    </motion.span>
  );
} 