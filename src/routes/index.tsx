import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Intro } from "../screens/Intro";
import { Home } from '../screens/home';
import { Product } from '../screens/product';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Product" component={Product} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}

export default MyStack;