import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LanguageContext = createContext(false);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("tr");

    useEffect(() => {
        const getLanguage = async () => {
            const jsonValue = await AsyncStorage.getItem('language');
            const language = jsonValue != null ? JSON.parse(jsonValue) : null;
            setLanguage(language); // JSON formatında kaydettiğimizi varsayalım
        };

        getLanguage();
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a ThemeProvider');
    }
    return context;
};