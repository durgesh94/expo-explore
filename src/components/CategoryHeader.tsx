import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { IconButton } from "./IconButton";

export interface CategoryHeaderProps {
    title?: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ ...props }) => {

    return (
        <>
            <View style={styles.conatiner}>
                <View>
                    <Text style={{
                        ...FONTS.h3,
                        color: COLORS.primary
                    }}>CATEGORIES</Text>
                    <Text style={{
                        ...FONTS.body4,
                        color: COLORS.darkgray
                    }}>7 Total</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <IconButton icon={icons.chart} alignItems="flex-end" width={20} height={20} color={COLORS.darkgray} />
                    <IconButton icon={icons.menu} alignItems="flex-end" />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
    }
})