import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

interface CardProps {
    type: string;
    count: any;
    date: any;
    desc: any;
    color: any;
}

export const Card: React.FC<CardProps> = ({ ...props }) => {

    return (
        <>
            <View style={{
                backgroundColor: "#FFFFFF",
                width: width / 3.6,
                // paddingHorizontal: 10,
                marginHorizontal: 5,
                borderRadius: 7
            }}>
                <View style={{
                    padding: 10
                }}>
                    <Text style={{
                        color: "#7575A1",
                        fontSize: 16,
                    }}>{props.type}</Text>
                    <Text style={{
                        color: "#212121",
                        paddingTop: 5,
                        fontWeight: "700"
                    }}>{props.count}</Text>
                    <Text style={{
                        color: "#7575A1",
                        paddingTop: 5
                    }}>{props.date}</Text>
                    <Text numberOfLines={3} style={{
                        color: "#212121",
                        paddingTop: 5
                    }}>{props.desc}</Text>
                </View>
                <View style={{
                    // flex: 1,
                    // alignSelf: "flex-end",
                    // justifyContent: "flex-end",
                    // alignSelf: "flex-end",
                    // alignContent: "flex-end",
                    height: 7,
                    borderBottomLeftRadius: 7,
                    borderBottomRightRadius: 7,
                    backgroundColor: props.color
                }} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({

})