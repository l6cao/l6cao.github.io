import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useNonLinearScroll } from '../utils/ScrollProvider';

export default function Section({ 
  children, 
  className = '', 
  id = '',
  fullHeight = false,
  animate = true,
  isCover = false,
  darkBg = false
}) {
  const sectionRef = useRef(null);
  
  const isInView = useInView(sectionRef, { 
    once: false,
    margin: "-45% 0px -45% 0px",
    amount: 0.1
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    smooth: 10
  });

  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.92, 1, 1, 0.92]
  );

  const { scrollYProgress: bgScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "center center", "end center"]
  });

  const bgOpacityProgress = useTransform(
    bgScrollProgress,
    [0, 0.4, 0.6, 1],
    [0, 1, 1, 0]
  );

  const baseClasses = `
    ${fullHeight ? 'min-h-screen' : 'py-24'}
    flex flex-col
    justify-center
    items-center
    px-4 md:px-8 lg:px-16
    relative
    ${className}
  `;

  if (isCover || !animate) {
    return (
      <section
        ref={sectionRef}
        id={id}
        className={baseClasses}
      >
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      initial={{ 
        opacity: 0.9,
        scale: 0.92,
        y: 30
      }}
      animate={isInView ? {
        opacity: 1,
        scale: 1,
        y: 0
      } : {
        opacity: 0.9,
        scale: 0.92,
        y: 0
      }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 1,
        restDelta: 0.001
      }}
      style={{
        scale: scaleProgress
      }}
      className={baseClasses}
    >
      {darkBg && (
        <motion.div 
          className="absolute inset-0 bg-primary/90 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0 }}
          style={{
            opacity: bgOpacityProgress,
          }}
          transition={{
            duration: 0.3
          }}
        />
      )}
      
      <div className="relative z-10 w-full">
        {children}
      </div>
    </motion.section>
  );
}
