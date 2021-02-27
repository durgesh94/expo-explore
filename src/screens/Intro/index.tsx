import React from 'react';
import { View, Text } from 'react-native';
import { introStyles } from "./intro.style";
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Intro: React.FC = ({ navigation }: any) => {

    return (
        <View style={introStyles.container}>
            <Text>Intro</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}