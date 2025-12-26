import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const AdaptiveContext = createContext();

export const AdaptiveProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const [intent, setIntent] = useState('default');
    const [companyName, setCompanyName] = useState(null);

    useEffect(() => {
        const forParam = searchParams.get('for');
        if (forParam) {
            const normalized = forParam.toLowerCase();
            setIntent(normalized);
            setCompanyName(forParam); // Keep original casing for display
        } else {
            setIntent('default');
            setCompanyName(null);
        }
    }, [searchParams]);

    const value = {
        intent,
        companyName,
        isTargeted: intent !== 'default'
    };

    return (
        <AdaptiveContext.Provider value={value}>
            {children}
        </AdaptiveContext.Provider>
    );
};

export const useAdaptive = () => {
    const context = useContext(AdaptiveContext);
    if (!context) {
        throw new Error('useAdaptive must be used within an AdaptiveProvider');
    }
    return context;
};
