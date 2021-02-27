import React from 'react';
import { View, Text } from 'react-native';
import { introStyles } from "./intro.style";
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Intro: React.FC = ({ navigation }: any) => {

    return (
        <View style={introStyles.container}>
            <TouchableOpacity style={{
                backgroundColor: "orange",
                paddingVertical: 15,
                paddingHorizontal: 50,
                borderRadius: 30,
                marginTop: 20
            }}
                onPress={() => navigation.navigate("Home")}>
                <Text>Open Food Delivery UI</Text>
            </TouchableOpacity>
        </View>
    )
}