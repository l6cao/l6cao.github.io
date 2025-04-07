import { motion } from 'framer-motion';

export default function Card({ children, className = '', animate = true }) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 20 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        bg-surface
        rounded-lg
        shadow-sm
        hover:shadow-md
        transition-shadow
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
