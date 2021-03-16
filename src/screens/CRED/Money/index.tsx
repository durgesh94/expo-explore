import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Entypo } from "@expo/vector-icons";

export const CredMoney: React.FC = () => {

    return (
        <View style={{ flex: 1, backgroundColor: "#000" }}>
            <View style={{
                // backgroundColor: "red",
                paddingVertical: 20,
                flexDirection: "row",
                paddingHorizontal: 20
            }}>
                <View>
                    <Text style={{
                        color: "#FFF"
                    }}>all your accounts</Text>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: "flex-end"
                }}>
                    <TouchableOpacity style={{
                        borderRadius: 20,
                        borderColor: "#FFF",
                        borderWidth: 0.8,
                        paddingHorizontal: 10,
                        paddingVertical: 5
                    }}>
                        <Text style={{
                            color: "#FFF"
                        }}>Add account</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                backgroundColor: "#FFF",
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                padding: 20
            }}>
                <View style={{
                    flexDirection: "row"
                }}>
                    <View>
                        <AntDesign name="bank" size={24} color="black" />
                    </View>
                    <View>
                        <Text>Kotak Mahindra Bank</Text>
                    </View>
                    <View>
                        <Entypo name="dots-three-horizontal" size={24} color="black" />
                    </View>
                </View>
            </View>
        </View>
    )
}