import React, { useEffect } from 'react';

interface IntroProps {
    onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
    useEffect(() => {
        // Simula a conclusão da introdução após 3 segundos
        const timer = setTimeout(onComplete, 3000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div>
            {/* Conteúdo da introdução */}
            <h1>Introdução</h1>
        </div>
    );
};

export default Intro;