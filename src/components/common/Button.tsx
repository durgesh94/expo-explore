import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width: w, height: h } = Dimensions.get("window");

export interface ButtonProps {
    title: string;
    onClick(): any;
}

export const Button: React.FC<ButtonProps> = ({ ...props }) => {

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={() => props.onClick()} >
                <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#07D1D3",
        borderRadius: 10,
        justifyContent: "center",
        marginBottom: 20,
        width: w - 100,
        height:  50,
    },
    text: {
        alignSelf: "center",
        fontSize: 16,
        color: "#FFFFFF",
        fontWeight: "700",
        lineHeight: 18
    }
})