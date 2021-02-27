import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Intro } from "../screens/Intro";
import { Home } from '../screens/home';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false
            }} />
            {/* Add screens here */}
        </Stack.Navigator>
    );
}

export default MyStack;