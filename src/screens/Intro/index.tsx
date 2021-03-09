import React from 'react';
import { View, Text } from 'react-native';
import { introStyles } from "./intro.style";
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Intro: React.FC = ({ navigation }: any) => {

    return (
        <View style={introStyles.container}>
            <Text style={{
                fontSize: 24
            }}>
                Verification Code Examples
            </Text>
            <TouchableOpacity style={{
                backgroundColor: "#ccffcc",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
                marginTop: 20
            }} onPress={() => navigation.navigate("Example1")}>
                <Text style={{
                    fontSize: 16
                }}>Example 1</Text>
            </TouchableOpacity>
        </View>
    )
}