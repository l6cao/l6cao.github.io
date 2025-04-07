import { motion } from 'framer-motion';

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Primary gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary via-[#141414] to-black"
        style={{ mixBlendMode: 'normal' }}
      />
      
      {/* Subtle accent gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(189, 255, 51, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(189, 255, 51, 0.05) 0%, transparent 50%)
          `
        }}
      />
    </div>
  );
} 