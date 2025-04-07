import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

export default function Button({
  children,
  variant = 'primary', // primary, outline, text
  size = 'md', // sm, md, lg
  className = '',
  onClick,
  href,
  to, // New prop for scroll links
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 relative";
  
  const variants = {
    primary: `
      bg-accent-green text-primary
      hover:bg-accent-hover
      active:scale-[0.98]
      disabled:bg-muted disabled:text-text-secondary
    `,
    outline: `
      border-2 border-accent-green text-accent-green
      hover:bg-accent-green/10
      active:scale-[0.98]
      disabled:border-muted disabled:text-muted
    `,
    text: `
      text-accent-green hover:bg-accent-green/10
      active:scale-[0.98]
      disabled:text-muted
    `
  };

  const sizes = {
    sm: 'text-sm px-4 py-1.5',
    md: 'text-base px-6 py-2',
    lg: 'text-lg px-8 py-3'
  };

  // Add hover glow effect
  const hoverAnimation = {
    initial: { boxShadow: '0 0 0 rgba(0, 245, 142, 0)' },
    hover: { 
      boxShadow: '0 0 20px rgba(0, 245, 142, 0.3)',
      transition: { duration: 0.3 }
    }
  };

  const Component = href ? 'a' : 'button';

  // If 'to' prop exists, use ScrollLink
  if (to) {
    return (
      <ScrollLink
        to={to}
        smooth={true}
        duration={1200}
        offset={-80}
        spy={true}
        hashSpy={true}
        spyThrottle={500}
        className={`
          ${baseStyles}
          ${variants[variant]}
          ${sizes[size]}
          ${className}
          cursor-pointer
        `}
        {...props}
      >
        {children}
      </ScrollLink>
    );
  }

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      <Component
        href={href}
        onClick={onClick}
        className={`
          ${baseStyles}
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `}
        {...props}
      >
        <motion.span
          variants={hoverAnimation}
          className="absolute inset-0 rounded-lg"
        />
        <span className="relative">{children}</span>
      </Component>
    </motion.div>
  );
}
