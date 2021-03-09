import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

export const Example1: React.FC = ({ navigation }: any) => {

    const [phone, setPhone] = useState<any>();

    return (
        <View style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{
                flex: 1,
                alignItems: "center",
                padding: 10
            }}
                keyboardVerticalOffset={50}
                behavior={"padding"}>
                <Text style={{
                    marginVertical: 50,
                    fontSize: 15
                }}>Please enter phone number</Text>
                <View style={{
                    flexDirection: "row",
                    paddingHorizontal: 12,
                    borderRadius: 10,
                    backgroundColor: "#fff",
                    borderBottomWidth: 1
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: 'center'
                    }}>
                        <Text>{"+91 |"}</Text>
                    </View>
                    <TextInput
                        placeholder="000 000 0000"
                        keyboardType="phone-pad"
                        value={phone}
                        onChange={(value) => setPhone(value)}
                        style={{
                            flex: 1,
                            marginLeft: 5,
                            height: 50,
                        }}
                    />
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    marginBottom: 50,
                    alignItems: "center"
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Example12")}
                        style={{
                            width: 150,
                            height: 50,
                            borderRadius: 10,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: phone ? "#248DB7" : "grey"
                        }}>
                        <Text style={{
                            alignItems: "center",
                            color: "#fff"
                        }}>Send OTP</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}