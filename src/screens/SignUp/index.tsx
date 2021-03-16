import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const SignUp: React.FC = ({ navigation }: any) => {

    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "#fff"
        }}>
            <Text>Sign Up Screen</Text>
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
                    onPress={() => navigation.navigate("Login")}>
                    <Text style={{
                        fontSize: 18,
                        color: "#fff"
                    }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}