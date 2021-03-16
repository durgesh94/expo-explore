import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Intro } from "../screens/Intro";
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { SignUp } from '../screens/SignUp';

const Stack = createStackNavigator();

const AuthScreens = () => (
    <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen name="Intro" component={Intro} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
)

const HomeScreens = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        {/* Add screens here */}
    </Stack.Navigator>
);

export const AuthStack = () => <NavigationContainer><AuthScreens /></NavigationContainer>
export const HomeStack = () => <NavigationContainer><HomeScreens /></NavigationContainer>