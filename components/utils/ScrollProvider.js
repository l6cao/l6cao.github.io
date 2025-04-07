import { useEffect } from 'react';
import { useSpring, useScroll, useTransform } from 'framer-motion';

export function useNonLinearScroll(targetRef) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Create a non-linear scroll effect using spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return smoothProgress;
} 