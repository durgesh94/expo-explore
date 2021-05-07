import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigations';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const customFonts = {
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf')
}

const App: React.FC = () => {

    const [fontsLoaded, setFontsLoaded] = useState(false);

    const _loadFontsAsync = async () => {
        await Font.loadAsync(customFonts);
        setFontsLoaded(true);
    }

    useEffect(() => {
        (async () => {
            await _loadFontsAsync();
        })();
    }, []);

    if (!fontsLoaded) return <AppLoading />

    return <NavigationContainer><MyStack /></NavigationContainer>
}

export default App;