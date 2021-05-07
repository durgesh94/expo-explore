import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Intro } from "../screens/Intro";
import { ExpenseApplication } from '../screens/ExpenseApplication';

const Stack = createStackNavigator();

const MyStackScreens = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
            <Stack.Screen name="ui-expense" component={ExpenseApplication} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export const MyStack = () => (
    <NavigationContainer>
        <MyStackScreens />
    </NavigationContainer>
);