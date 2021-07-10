import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

interface CardProps {
    item: any;
}

export const Card: React.FC<CardProps> = ({ item }) => {

    return (
        <>
            <ImageBackground
                source={item.image}
                style={{
                    width: 100,
                    height: 120,
                    marginLeft: 20,
                    marginTop: 15,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 10,
                    overflow: "hidden"
                }}
                imageStyle={{ resizeMode: "contain" }}
            >
                <View style={{
                    marginTop: 70,
                    marginLeft: 40,
                    backgroundColor: "#0D986A",
                    borderTopLeftRadius: 7,
                    borderBottomStartRadius: 7,
                    padding: 5,
                    alignItems: "center",
                }}>
                    <Text style={{
                        color: "#FFFFFF",
                    }}>
                        {item.name}
                    </Text>
                </View>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({

})