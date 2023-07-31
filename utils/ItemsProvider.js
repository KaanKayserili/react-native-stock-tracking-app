import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ItemsContext = createContext([]);

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            try {
                const value = await AsyncStorage.getItem('items');
                if (value !== null) {
                    // If data exists in AsyncStorage, parse it to convert back to an array
                    setItems(JSON.parse(value));
                } else {
                    // If no data exists in AsyncStorage, initialize items as an empty array
                    setItems([]);
                }
            } catch (error) {
                console.log('Hata:', error);
            }
        };

        getItems();
    }, []);

    return (
        <ItemsContext.Provider value={{ items, setItems }}>
            {children}
        </ItemsContext.Provider>
    );
};

export const useItems = () => {
    const context = useContext(ItemsContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a ItemsProvider');
    }
    return context;
};