
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface CardProps {
    image: any;
    fill: any;
}

export const Box: React.FC<CardProps> = ({ ...props }) => {

    return (
        <View style={{ paddingLeft: 15 }}>
            <View style={{
                borderWidth: 0.5,
                borderRadius: 15,
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderColor: "#CED1DF"
            }}>
                <Image source={props.image}
                    style={{ width: 25, height: 25, tintColor: "#CED1DF", resizeMode: "contain" }}
                />
            </View>
            <View style={{
                flexDirection: "row",
                width: "100%",
                height: 7,
                backgroundColor: "#CED1DF",
                marginTop: 10,
                borderRadius: 10,
                overflow: "hidden"
            }}>
                <View style={{
                    width: props.fill,
                    height: 7,
                    borderRadius: 10,
                    backgroundColor: "#0D986A",
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})