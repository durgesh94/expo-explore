import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export interface ButtonProps {
    title: string;
    id: number;
    onClick(id: number): any;
}

export const Button: React.FC<ButtonProps> = ({ ...props }) => {

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={() => props.onClick(props.id)} >
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#99ff55",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginBottom: 20
    },
    text: {
        fontSize: 16,
        color: "#000000",
        fontWeight: "700"
    }
})