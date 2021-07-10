import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Intro } from "../screens/Intro";
import { ExpenseApplication } from '../screens/ExpenseApplication';
import { Covid19 } from '../screens/Covid19';
import { PlantApp } from '../screens/PlantApp';
import { PlantDetails } from '../screens/PlantApp/PlantDetails';
import { AnimationExample } from '../screens/Animation';

const Stack = createStackNavigator();

const MyStackScreens = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="ui-expense" component={ExpenseApplication} />
            <Stack.Screen name="covid19" component={Covid19} />
            <Stack.Screen name="ui-plant" component={PlantApp} />
            <Stack.Screen name="ui-plantDetails" component={PlantDetails} />
            <Stack.Screen name="animation" component={AnimationExample} />
        </Stack.Navigator>
    );
}

export const MyStack = () => (
    <NavigationContainer>
        <MyStackScreens />
    </NavigationContainer>
);