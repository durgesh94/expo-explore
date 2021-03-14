import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Intro } from "../screens/Intro";
import { Home } from '../screens/home';
import { Product } from '../screens/product';
import { Profile } from '../screens/profile';
import { Flat } from '../screens/flat';
import { FlatDetails } from '../screens/flat-details';
import { CredHome } from '../screens/CRED/Home';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Flat" component={Flat} />
            <Stack.Screen name="Flat-Details" component={FlatDetails} />
            <Stack.Screen name="Cred-Home" component={CredHome} />
        </Stack.Navigator>
    );
}

export default MyStack;