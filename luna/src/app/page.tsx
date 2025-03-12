'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';
import CustomCursor from '../components/cursor';
import IntroScreen from '../components/intro';

export default function Page() {
    const [showIntro, setShowIntro] = useState(true);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };


    const handleIntroComplete = () => {
        setShowIntro(false);
    };

    return (
        <div>
            {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <h1>Bem-vindo ao meu portfólio</h1>
            </motion.div>
            <CustomCursor />
        </div>
    );
}
