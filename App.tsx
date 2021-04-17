import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigations';

const App: React.FC = () => <NavigationContainer><MyStack /></NavigationContainer>

export default App;