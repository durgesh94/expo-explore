
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScreenA } from './ScreenA';
import { ScreenB } from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { IconButton, Button } from "react-native-paper";

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();

export const Apps: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // tabBarOptions={{
        //   activeTintColor: '#f0f',
        //   inactiveTintColor: '#555',
        //   activeBackgroundColor: '#fff',
        //   inactiveBackgroundColor: '#999',
        //   showLabel: true,
        //   labelStyle: { fontSize: 14 },
        //   showIcon: true,
        // }}
        activeColor='orange'
        inactiveColor='grey'
        barStyle={{
          backgroundColor: '#fff',
          borderColor: "grey",
          borderTopWidth: 0.5,
        }}
        labeled={true}
        shifting={false}
      >
        <Tab.Screen
          name="Screen_A"
          component={ScreenA}
          options={{ tabBarBadge: 3,  tabBarLabel: "test", tabBarIcon: "home" }}
        />
        <Tab.Screen
          name="Screen_B"
          component={ScreenB}
          options={{tabBarLabel: "durgesh", tabBarIcon: "cart"}}
        />
      </Tab.Navigator>

    </NavigationContainer>
  )
}