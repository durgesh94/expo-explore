import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

export interface SummaryProps {
    data: any;
}

export const Summary: React.FC<SummaryProps> = ({ ...props }) => {

    return (
        <>
            <View style={styles.conatiner}>
                <Text style={styles.expenses}>My Expenses</Text>
                <Text style={styles.summary}>Summary ({props.data.type})</Text>
                <View style={{
                    marginTop: SIZES.padding
                }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.image}>
                            <Image source={icons.calendar} style={styles.img} />
                        </View>
                        <View style={{ marginLeft: SIZES.padding }}>
                            <Text style={styles.date}>{props.data.date}</Text>
                            <Text style={styles.percentage}>{props.data.per}% more than last month</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        paddingHorizontal: SIZES.padding,
        paddingBottom: SIZES.padding
    },
    expenses: {
        ...FONTS.h2,
        color: COLORS.primary,
    },
    summary: {
        ...FONTS.h4,
        color: COLORS.primary,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.lightGray,
    },
    img: {
        width: 20,
        height: 20,
        tintColor: COLORS.lightBlue
    },
    date: {
        color: COLORS.primary,
        ...FONTS.h3
    },
    percentage: {
        color: COLORS.darkgray,
        ...FONTS.body3
    }
})