import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../providers';

export const Login: React.FC = ({ navigation }: any) => {

    const { onLogin } = useAuth();

    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "#fff"
        }}>
            <Text>Login Screen</Text>
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
                    onPress={() => onLogin()}>
                    <Text style={{
                        fontSize: 18,
                        color: "#fff"
                    }}>Login</Text>
                </TouchableOpacity>
            </View>
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
                    onPress={() => navigation.navigate("SignUp")}>
                    <Text style={{
                        fontSize: 18,
                        color: "#fff"
                    }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}