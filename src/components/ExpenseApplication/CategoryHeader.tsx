import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import { IconButton } from "./IconButton";

export interface CategoryHeaderProps {
    mode?: string;
    onClick(mode: string): any;
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
                <View style={styles.btnWrapper}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: props.mode === "chart" ? COLORS.secondary : COLORS.white,
                            ...styles.btn
                        }}
                        onPress={() => props.onClick("chart")}
                    >
                        <IconButton icon={icons.chart} onClick={() => console.log()}
                            width={props.mode === "chart" ? 25 : 30}
                            height={props.mode === "chart" ? 25 : 30}
                            color={props.mode === "chart" ? COLORS.white : COLORS.darkgray}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: props.mode === "list" ? COLORS.secondary : COLORS.white,
                            ...styles.btn
                        }}
                        onPress={() => props.onClick("list")}
                    >
                        <IconButton icon={icons.menu} onClick={() => console.log()}
                            width={props.mode === "list" ? 25 : 30}
                            height={props.mode === "list" ? 25 : 30}
                            color={props.mode === "list" ? COLORS.white : COLORS.darkgray}
                        />
                    </TouchableOpacity>
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
    },
    btnWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    btn: {
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 25,
        marginLeft: SIZES.base
    }
})