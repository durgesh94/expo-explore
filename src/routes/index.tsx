import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Intro } from "../screens/Intro";
import { Home } from '../screens/home';
import { Product } from '../screens/product';
import { Profile } from '../screens/profile';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Product" component={Product}/>
            <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    );
}

export default MyStack;