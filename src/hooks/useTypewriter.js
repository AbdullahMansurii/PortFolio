import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 50, delay = 1000) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            let index = 0;
            const interval = setInterval(() => {
                if (index < text.length) {
                    setDisplayedText((prev) => prev + text.charAt(index));
                    index++;
                } else {
                    clearInterval(interval);
                    setIsComplete(true);
                }
            }, speed);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, speed, delay]);

    return { displayedText, isComplete };
};
