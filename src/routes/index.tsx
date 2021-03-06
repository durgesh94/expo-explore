import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Intro } from "../screens/Intro";
import { Slider1 } from '../screens/Slider1';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Slider-1" component={Slider1} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}

export default MyStack;