import React, { useState, useRef, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

export const Example12: React.FC = ({ navigation }: any) => {

    const lenghtInput = 6;
    let textInput = useRef(null)
    const [internalVal, setInterVal] = useState("");

    const onChangeText = (val: any) => {
        setInterVal(val)
    }

    useEffect(() => {
        textInput.focus()
    }, [])

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
                }}>Please enter your OTP code sent via SMS</Text>
                <View>
                    <TextInput
                        ref={(input) => textInput = input}
                        keyboardType="phone-pad"
                        value={internalVal}
                        onChange={onChangeText}
                        maxLength={lenghtInput}
                        returnKeyType={"done"}
                        style={{
                            height: 10,
                            width: 10,
                            backgroundColor: "red"
                        }}
                    />
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        {
                            Array(lenghtInput).fill().map((data, index) => (
                                <View key={index}
                                    style={{
                                        paddingVertical: 10,
                                        width: 40,
                                        margin: 5,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderBottomWidth: 1,
                                        borderBottomColor: index === internalVal.length ? "#FB6C6A" : "#234DB7"
                                    }}>
                                    <Text
                                        onPress={() => textInput.focus()}
                                        style={{
                                            textAlign: "center",
                                            fontSize: 16
                                        }}>
                                        {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                                    </Text>
                                </View>
                            ))
                        }
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    marginBottom: 50,
                    alignItems: "center"
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("")}
                        style={{
                            width: 150,
                            height: 50,
                            borderRadius: 10,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: internalVal ? "#248DB7" : "grey"
                        }}>
                        <Text style={{
                            alignItems: "center",
                            color: "#fff"
                        }}>Verify OTP</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}