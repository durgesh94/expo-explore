import React from 'react';
import { View, Text } from 'react-native';
import { introStyles } from "./intro.style";

export const Intro: React.FC = () => {

    return (
        <View style={introStyles.container}>
            <Text>Intro</Text>
        </View>
    )
}