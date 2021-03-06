import React from 'react';
import { View, Text } from 'react-native';
import { introStyles } from "./intro.style";
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Intro: React.FC = ({ navigation }: any) => {

    return (
        <View style={introStyles.container}>
            <TouchableOpacity
                style={{
                    paddingHorizontal: 40,
                    paddingVertical: 20,
                    backgroundColor: "orange",
                    marginTop: 20
                }}
                onPress={() => navigation.navigate("Slider-1")}>
                <Text>Slider 1</Text>
            </TouchableOpacity>
        </View>
    )
}