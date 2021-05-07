import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

export interface IncomingExpensesProps {
    category?: any;
}

export const IncomingExpenses: React.FC<IncomingExpensesProps> = ({ ...props }) => {

    let allExpenses = props.category ? props.category.expenses : []
    let incomingExpenses = allExpenses.filter((item: any) => item.status == "P")

    const renderItem = ({ item, index }: any) => (
        <View style={{
            width: 300,
            marginRight: SIZES.padding,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginVertical: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...styles.shadow
        }}>
            {/* Title */}
            <View style={{ flexDirection: 'row', padding: SIZES.padding, alignItems: 'center' }}>
                <View
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.lightGray,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: SIZES.base
                    }}
                >
                    <Image
                        source={props.category.icon}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: props.category.color
                        }}
                    />
                </View>

                <Text style={{ ...FONTS.h3, color: props.category.color, }}>{props.category.name}</Text>
            </View>

            {/* Expense Description */}
            <View style={{ paddingHorizontal: SIZES.padding }}>
                {/* Title and description */}
                <Text style={{ ...FONTS.h2, }}>{item.title}</Text>
                <Text style={{ ...FONTS.body3, flexWrap: 'wrap', color: COLORS.darkgray }}>
                    {item.description}
                </Text>

                {/* Location */}
                <Text style={{ marginTop: SIZES.padding, ...FONTS.h4, }}>Location</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={icons.pin}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.darkgray,
                            marginRight: 5
                        }}
                    />
                    <Text style={{ marginBottom: SIZES.base, color: COLORS.darkgray, ...FONTS.body4 }}>{item.location}</Text>
                </View>
            </View>

            {/* Price */}
            <View
                style={{
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomStartRadius: SIZES.radius,
                    borderBottomEndRadius: SIZES.radius,
                    backgroundColor: props.category.color,
                }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>CONFIRM {item.total.toFixed(2)} USD</Text>
            </View>
        </View>
    )

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.heading}>INCOMING EXPENSES</Text>
                <Text style={styles.subheading}>12 Total</Text>
            </View>
            {
                incomingExpenses.length > 0 &&
                <FlatList
                    data={incomingExpenses}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            }
            {
                incomingExpenses.length == 0 &&
                <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>No Record</Text>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: COLORS.lightGray2,
        padding: SIZES.padding
    },
    heading: {
        ...FONTS.h3,
        color: COLORS.primary
    },
    subheading: {
        ...FONTS.body4,
        color: COLORS.darkgray
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
})