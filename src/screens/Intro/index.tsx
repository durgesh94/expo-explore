import React from 'react';
import { View, Text } from 'react-native';
import { introStyles } from "./intro.style";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../providers';

export const Intro: React.FC = ({ navigation }: any) => {

    const { getStarted } = useAuth();

    return (
        <View style={introStyles.container}>
            <Text>Intro</Text>
            <Text>Onboarding screen : it is show only the first time when user install app</Text>
            <View style={{
                marginTop: 20
            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#000",
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderRadius: 10
                    }}
                    onPress={() => getStarted()}>
                    <Text style={{
                        fontSize: 18,
                        color: "#fff"
                    }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}