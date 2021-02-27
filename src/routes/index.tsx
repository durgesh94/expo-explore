import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Intro } from "../screens/Intro";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Intro" component={Intro} />
            {/* Add screens here */}
        </Stack.Navigator>
    );
}

export default MyStack;