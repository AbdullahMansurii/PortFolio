import React, { createContext, useContext, useState, useEffect } from 'react';
import whymeData from '../data/whyme.json';

const AdaptiveContext = createContext();

export const useAdaptive = () => useContext(AdaptiveContext);

export const AdaptiveProvider = ({ children }) => {
    const [contextData, setContextData] = useState(whymeData.default);
    const [isCompanySpecific, setIsCompanySpecific] = useState(false);
    const [params, setParams] = useState({});

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const intent = queryParams.get('intent');
        const company = queryParams.get('company');
        const role = queryParams.get('role');
        const domain = queryParams.get('domain');
        const focus = queryParams.get('focus');
        const skills = queryParams.get('skills');

        setParams({ intent, company, role, domain, focus, skills });

        if (intent && whymeData.companies[intent.toLowerCase()]) {
            // Pre-defined company intent
            setContextData({
                ...whymeData.companies[intent.toLowerCase()],
                text: whymeData.default.text // Fallback text or specific if available
            });
            setIsCompanySpecific(true);
        } else if (company) {
            // Dynamic template intent
            let template = JSON.parse(JSON.stringify(whymeData.template));

            // Replace placeholders
            const replace = (str) => {
                if (!str) return "";
                return str
                    .replace(/{{Company}}/g, company)
                    .replace(/{{Role}}/g, role || "Engineer")
                    .replace(/{{Domain}}/g, domain || "technology")
                    .replace(/{{Focus}}/g, focus || "innovation")
                    .replace(/{{Skills}}/g, skills || "software development");
            };

            template.title = replace(template.title);
            template.subtitle = replace(template.subtitle);
            template.text = replace(template.text);
            template.points = template.points.map(p => ({
                ...p,
                desc: replace(p.desc)
            }));

            setContextData(template);
            setIsCompanySpecific(true);
        }
    }, []);

    return (
        <AdaptiveContext.Provider value={{ data: contextData, isCompanySpecific, params }}>
            {children}
        </AdaptiveContext.Provider>
    );
};
