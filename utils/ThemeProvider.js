import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext("false");

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState("false");

    useEffect(() => {
        const getTheme = async () => {
            const jsonValue = await AsyncStorage.getItem('theme');
            const theme = jsonValue != null ? JSON.parse(jsonValue) : null;
            setIsDarkMode(theme); // JSON formatında kaydettiğimizi varsayalım
        };

        getTheme();
    }, []);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};