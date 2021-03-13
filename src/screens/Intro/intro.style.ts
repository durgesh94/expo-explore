import { StyleSheet, StatusBar } from "react-native";
import Constants from 'expo-constants';

export const introStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#A0CFEC",
        paddingTop: Constants.statusBarHeight,
        // paddingTop: StatusBar.currentHeight,
    },
    btnWrapper: {
        backgroundColor: "#000",
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 30,
        marginTop: 20
    },
    btnText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000"
    }
})