import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, FileText } from 'lucide-react';

interface IntroScreenProps {
  onComplete: () => void;
}

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
  color: string;
}

const intro: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const socialLinks: SocialLink[] = [
    { 
      icon: FileText, 
      href: "#", 
      label: "Resume",
      color: "#FF6B6B"
    },
    { 
      icon: Github, 
      href: "https://github.com", 
      label: "GitHub",
      color: "#4ECDC4"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com", 
      label: "LinkedIn",
      color: "#1DA1F2"
    }
  ];

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 bg-[#0F0F0F] flex flex-col items-center justify-center z-50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Portfolio de <span className="gradient-text">Luna</span>
          </motion.h1>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8"
            variants={itemVariants}
          >
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 hover-element"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* CORREÇÃO: Removemos o fixed e ajustamos o tamanho */}
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: color }}
                  whileHover={{ boxShadow: `0 0 20px ${color}80` }}
                >
                  <Icon size={28} color="#FFFFFF" />
                </motion.div>
                <span className="text-gray-300">{label}</span>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.button
            className="mt-16 px-6 py-2 bg-[#1A1A1A] hover:bg-[#242424] text-white rounded-full cursor-pointer"
            onClick={handleSkip}
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: "#242424" }}
            whileTap={{ scale: 0.95 }}
          >
            Ir para o portfólio
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default intro;
