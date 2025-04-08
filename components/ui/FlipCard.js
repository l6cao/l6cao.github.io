import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'react-feather';
import { createPortal } from 'react-dom';

// Browser-specific styles
const browserSpecificStyles = `
  /* Firefox-specific fixes */
  @-moz-document url-prefix() {
    .flip-card-front {
      visibility: hidden !important;
      opacity: 0 !important;
    }
    .flip-card-front.visible {
      visibility: visible !important;
      opacity: 1 !important;
    }
    .flip-card-back {
      visibility: hidden !important;
      opacity: 0 !important;
    }
    .flip-card-back.visible {
      visibility: visible !important;
      opacity: 1 !important;
    }
  }
  
  /* Safari-specific fixes */
  @media not all and (min-resolution:.001dpcm) { 
    @supports (-webkit-appearance:none) {
      .flip-card-front {
        visibility: hidden !important;
        opacity: 0 !important;
      }
      .flip-card-front.visible {
        visibility: visible !important;
        opacity: 1 !important;
      }
      .flip-card-back {
        visibility: hidden !important;
        opacity: 0 !important;
      }
      .flip-card-back.visible {
        visibility: visible !important;
        opacity: 1 !important;
      }
      
      /* Fix for Safari background enlargement */
      .safari-modal {
        transform: none !important;
        transition: opacity 0.3s ease !important;
      }
      
      /* iPad Safari specific fix */
      .ipad-safari-modal {
        position: absolute !important;
        transform: none !important;
        transform-origin: center center !important;
        -webkit-transform: none !important;
        -webkit-transform-origin: center center !important;
        will-change: opacity !important;
      }
    }
  }
`;

export default function FlipCard({ frontContent, backContent, className = '' }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [cardRect, setCardRect] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  const [isSafari, setIsSafari] = useState(false);
  const [isIPadSafari, setIsIPadSafari] = useState(false);

  // Handle client-side rendering and window resize
  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Safari detection
    const isSafariBrowser = 
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
      (/^((?!chrome|android).)*$/.test(navigator.userAgent) && 
       navigator.vendor === "Apple Computer, Inc.");
    
    // iPad detection
    const isIPad = 
      /iPad/.test(navigator.userAgent) || 
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 && !window.MSStream);
    
    setIsSafari(isSafariBrowser);
    setIsIPadSafari(isSafariBrowser && isIPad);
    
    window.addEventListener('resize', handleResize);
    return () => {
      setMounted(false);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent scrolling when expanded
  useEffect(() => {
    if (isExpanded) {
      // Save the current scroll position
      const scrollY = window.scrollY;
      
      // Add styles to prevent scrolling and maintain position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scrolling when unmounted
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isExpanded]);

  // Handle mouse move for glossy effect
  const handleMouseMove = (e) => {
    if (!cardRef.current || isExpanded) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
  };

  // Card expansion
  const handleCardClick = () => {
    if (isSafari) {
      // For Safari, just expand directly without flip
      if (!isExpanded && cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setCardRect(rect);
        setIsExpanded(true);
      }
    } else {
      // For other browsers, flip then expand on second click
      if (!isExpanded && cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setCardRect(rect);
        setIsExpanded(true);
        setIsFlipped(true);
      }
    }
  };

  // Simple close function
  const handleClose = (e) => {
    if (e) e.stopPropagation();
    setIsExpanded(false);
    setIsFlipped(false);
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isExpanded) {
        handleClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isExpanded]);

  // Calculate animation properties based on original card position
  const getExpandAnimation = () => {
    if (!cardRect || !mounted) {
      return {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 }
      };
    }

    // Special case for iPad Safari
    if (isIPadSafari) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "ipad-safari-modal"
      };
    }

    // For regular Safari
    if (isSafari) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "safari-modal"
      };
    }

    // Target dimensions and position
    const targetWidth = Math.min(windowSize.width * 0.9, 768);
    const targetHeight = Math.min(windowSize.height * 0.8, 600);
    
    const targetX = windowSize.width / 2;
    const targetY = windowSize.height / 2;
    
    // Original position (center of the card)
    const originX = cardRect.left + cardRect.width / 2;
    const originY = cardRect.top + cardRect.height / 2;
    
    // Calculate scale factor from original to target
    const scaleX = cardRect.width / targetWidth;
    const scaleY = cardRect.height / targetHeight;
    const scale = Math.max(scaleX, scaleY);
    
    // Calculate position offset
    const x = originX - targetX;
    const y = originY - targetY;

    return {
      initial: { 
        opacity: 1,
        scale,
        x,
        y,
        width: targetWidth,
        height: targetHeight,
      },
      animate: { 
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        width: targetWidth,
        height: targetHeight,
      },
      exit: {
        opacity: 0,
        scale: 0.4,
        x,
        y,
        width: targetWidth,
        height: targetHeight,
        transition: { duration: 0.4 }
      }
    };
  };

  // Normal card - keep it in DOM even when expanded but make it invisible
  return (
    <>
      {/* Browser-specific styles */}
      <style>{browserSpecificStyles}</style>
      
      <motion.div 
        className={`relative w-full h-full min-h-[300px] ${isExpanded ? 'invisible' : 'visible'}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        style={{ perspective: '1000px' }}
      >
        <div
          className={`
            w-full h-full
            bg-zinc-900 rounded-lg p-6
            border border-accent-green/10
            hover:border-accent-green/30
            transition-colors duration-300
            overflow-hidden
            cursor-pointer
          `}
        >
          {/* Glossy effect overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: isHovered && !isExpanded ? `
                radial-gradient(
                  circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                  rgba(255, 255, 255, 0.1) 0%, 
                  rgba(255, 255, 255, 0) 25%
                )
              ` : '',
              boxShadow: isHovered && !isExpanded ? 'inset 0 0 20px rgba(189, 255, 51, 0.03)' : '',
              borderRadius: '0.5rem'
            }}
          />
          {frontContent}
        </div>
      </motion.div>

      {/* Portal for the expanded card */}
      {mounted && createPortal(
        <AnimatePresence>
          {isExpanded && (
            <div className="fixed inset-0 z-[9999]">
              {/* Backdrop with fade animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }} 
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                onClick={handleClose} 
                style={{ cursor: 'pointer' }}
              />
              
              {/* Special handling for iPad Safari */}
              {isIPadSafari ? (
                <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
                  <div 
                    className="pointer-events-auto bg-zinc-900 rounded-lg p-8 border border-accent-green/20 overflow-auto"
                    style={{ 
                      width: Math.min(windowSize.width * 0.9, 768),
                      maxHeight: Math.min(windowSize.height * 0.8, 600),
                      position: 'relative',
                      zIndex: 10
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative z-20">
                      {backContent}
                    </div>
                    
                    <button
                      className="absolute top-4 right-4 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full
                               text-surface/70 hover:text-surface transition-colors z-30"
                      onClick={handleClose}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                // Regular animation for other browsers
                <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    {...getExpandAnimation()}
                    transition={{
                      type: isSafari ? "tween" : "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.6
                    }}
                    className={`pointer-events-auto rounded-lg overflow-hidden ${isSafari ? 'safari-modal' : ''}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {isSafari ? (
                      // Safari version - Simple card without flip
                      <div 
                        className="w-full h-full bg-zinc-900 rounded-lg p-8 border border-accent-green/20 overflow-auto"
                        style={{ 
                          width: Math.min(windowSize.width * 0.9, 768),
                          maxHeight: Math.min(windowSize.height * 0.8, 600),
                        }}
                      >
                        <div className="relative z-20">
                          {backContent}
                        </div>
                        
                        <button
                          className="absolute top-4 right-4 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full
                                   text-surface/70 hover:text-surface transition-colors z-30"
                          onClick={handleClose}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      // Non-Safari version - Flip card
                      <motion.div
                        className="w-full h-full"
                        style={{ 
                          transformStyle: 'preserve-3d',
                          WebkitTransformStyle: 'preserve-3d',
                          perspective: '1000px',
                          WebkitPerspective: '1000px'
                        }}
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        {/* Front face */}
                        <div 
                          style={{ 
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                          }}
                          className={`bg-zinc-900 rounded-lg p-8 border border-accent-green/20 overflow-auto flip-card-front ${!isFlipped ? 'visible' : ''}`}
                        >
                          <div className="relative z-20">
                            {frontContent}
                          </div>
                          
                          <button
                            className="absolute top-4 right-4 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full
                                     text-surface/70 hover:text-surface transition-colors z-30"
                            onClick={handleClose}
                          >
                            <X size={16} />
                          </button>
                        </div>
                        
                        {/* Back face */}
                        <div 
                          style={{ 
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                            WebkitTransform: 'rotateY(180deg)',
                          }}
                          className={`bg-zinc-900 rounded-lg p-8 border border-accent-green/20 overflow-auto flip-card-back ${isFlipped ? 'visible' : ''}`}
                        >
                          <div className="relative z-20">
                            {backContent}
                          </div>
                          
                          <button
                            className="absolute top-4 right-4 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full
                                     text-surface/70 hover:text-surface transition-colors z-30"
                            onClick={handleClose}
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              )}
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}