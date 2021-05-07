import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, icons, SIZES } from '../constants';
import { IconButton } from "./IconButton";

export interface HeaderProps {
    title?: string;
}

export const Header: React.FC<HeaderProps> = ({ ...props }) => {

    return (
        <>
            <View style={styles.conatiner}>
                <IconButton icon={icons.back_arrow} alignItems="flex-start" />
                <Text>{props.title}</Text>
                <IconButton icon={icons.more} alignItems="flex-end" />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
    }
})