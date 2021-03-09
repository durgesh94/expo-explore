import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Intro } from "../screens/Intro";
import { Example1 } from '../screens/Example1';
import { Example12 } from '../screens/Example1.2';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Example1" component={Example1} />
            <Stack.Screen name="Example12" component={Example12} />
        </Stack.Navigator>
    );
}

export default MyStack;