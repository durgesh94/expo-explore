import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../providers';

export const Home: React.FC = ({ navigation }: any) => {

    const { onLogout, user } = useAuth();

    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "#fff"
        }}>
            <Text>Home Screen</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Welcome: {user}</Text>
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
                    onPress={() => onLogout()}>
                    <Text style={{
                        fontSize: 18,
                        color: "#fff"
                    }}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}