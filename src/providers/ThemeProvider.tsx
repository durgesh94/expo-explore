import React, { createContext, useContext, useEffect, useState } from "react";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const customFonts = {
    'Roboto-Black': require('../../assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf')
}

export interface IUseTheme {

}

const ThemeContext = createContext({});

export const useTheme = () => useContext<IUseTheme>(ThemeContext as any);

export const ThemeProvider: React.FC = ({ children }) => {


    const [fontsLoaded, setFontsLoaded] = useState(false);

    const _loadFontsAsync = async () => {
        await Font.loadAsync(customFonts);
        setFontsLoaded(true);
        console.log("true");
    }

    useEffect(() => {
        (async () => {
            await _loadFontsAsync();
        })();
    }, []);

    if (!fontsLoaded) return <AppLoading />

    return (
        <ThemeContext.Provider value={{

        }}>
            {children}
        </ThemeContext.Provider>
    )
}