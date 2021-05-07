import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

interface ExpenesSummaryProps {
    categories?: any;
    category?: any;
    onClick(category: any): any;
}

export const ExpenesSummary: React.FC<ExpenesSummaryProps> = ({ ...props }) => {

    const processCategoryDataToDisplay = () => {
        // Filter expenses with "Confirmed" status
        let chartData = props.categories.map((item: any) => {
            let confirmExpenses = item.expenses.filter((a: any) => a.status == "C")
            var total = confirmExpenses.reduce((a: any, b: any) => a + (b.total || 0), 0)

            return {
                name: item.name,
                y: total,
                expenseCount: confirmExpenses.length,
                color: item.color,
                id: item.id
            }
        })

        // filter out categories with no data/expenses
        let filterChartData = chartData.filter((a: any) => a.y > 0)

        // Calculate the total expenses
        let totalExpense = filterChartData.reduce((a: any, b: any) => a + (b.y || 0), 0)

        // Calculate percentage and repopulate chart data
        let finalChartData = filterChartData.map((item: any) => {
            let percentage = (item.y / totalExpense * 100).toFixed(0)
            return {
                label: `${percentage}%`,
                y: Number(item.y),
                expenseCount: item.expenseCount,
                color: item.color,
                name: item.name,
                id: item.id
            }
        })

        return finalChartData
    }

    let data = processCategoryDataToDisplay()

    const setSelectCategoryByName = (name: any) => {
        props.onClick(name);
    }

    const renderItem = ({ item }: any) => (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 40,
                paddingHorizontal: SIZES.radius,
                borderRadius: 10,
                backgroundColor: (props.category && props.category.name == item.name) ? item.color : COLORS.white
            }}
            onPress={() => {
                let categoryName = item.name
                setSelectCategoryByName(categoryName)
            }}
        >
            {/* Name/Category */}
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View
                    style={{
                        width: 20,
                        height: 20,
                        backgroundColor: (props.category && props.category.name == item.name) ? COLORS.white : item.color,
                        borderRadius: 5
                    }}
                />

                <Text style={{ marginLeft: SIZES.base, color: (props.category && props.category.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{item.name}</Text>
            </View>

            {/* Expenses */}
            <View style={{ justifyContent: 'center' }}>
                <Text style={{ color: (props.category && props.category.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{item.y} USD - {item.label}</Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={{ padding: SIZES.padding }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    )
}