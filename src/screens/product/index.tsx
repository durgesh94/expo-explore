import React from 'react';
import { View, Text } from 'react-native';
import { introStyles } from "./intro.style";

export const Product: React.FC = ({ navigation }: any) => {

    return (
        <View style={introStyles.container}>
            <Text>Product</Text>
        </View>
    )
}