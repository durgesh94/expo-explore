import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/routes';
import { Apps } from "./src/screens/App";

const App: React.FC = () => <Apps />
{/* <NavigationContainer><MyStack /></NavigationContainer> */ }

export default App;