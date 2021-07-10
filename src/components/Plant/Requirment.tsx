
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface CardProps {
    image: any;
    type: any;
    value: any;
}

export const Requirment: React.FC<CardProps> = ({ ...props }) => {

    return (
        <View style={{
            flexDirection: "row",
            paddingBottom: 30,
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <View style={{ flexDirection: "row" }}>
                <Image source={props.image}
                    style={{ width: 25, height: 25, tintColor: "#CED1DF", resizeMode: "contain" }}
                />
                <Text style={{
                    marginLeft: 15,
                    fontWeight: "700",
                    color: "#3C4A6B"
                }}>{props.type}</Text>
            </View>
            <Text style={{
                color: "#9BA0C3"
            }}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})