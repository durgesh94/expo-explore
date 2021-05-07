import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { VictoryPie } from "victory-native";
import { Svg } from "react-native-svg";
import { COLORS, FONTS, SIZES } from "../../constants";

interface ChartProps {
    categories?: any;
    category?: any;
    onClick(category: any): any;
}


export const Chart: React.FC<ChartProps> = ({ ...props }) => {

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

    const setSelectCategoryByName = (name: any) => {
        props.onClick(name);
    }

    let chartData = processCategoryDataToDisplay()
    let colorScales = chartData.map((item: any) => item.color)
    let totalExpenseCount = chartData.reduce((a: any, b: any) => a + (b.expenseCount || 0), 0)

    console.log("Check Chart")
    console.log(chartData)

    if (Platform.OS == 'ios') {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <VictoryPie

                    data={chartData}
                    labels={(datum) => `${datum.y}`}
                    radius={({ datum }) => (props.category && props.category.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                    innerRadius={70}
                    labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
                    style={{
                        labels: { fill: "white", ...FONTS.body3 },
                        parent: {
                            ...styles.shadow
                        },
                    }}
                    width={SIZES.width * 0.8}
                    height={SIZES.width * 0.8}
                    colorScale={colorScales}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onPress: () => {
                                return [{
                                    target: "labels",
                                    mutation: (props) => {
                                        let categoryName = chartData[props.index].name
                                        setSelectCategoryByName(categoryName)
                                    }
                                }]
                            }
                        }
                    }]}

                />

                <View style={{ position: 'absolute', top: '42%', left: "42%" }}>
                    <Text style={{ ...FONTS.h1, textAlign: 'center' }}>{totalExpenseCount}</Text>
                    <Text style={{ ...FONTS.body3, textAlign: 'center' }}>Expenses</Text>
                </View>
            </View>

        )
    }
    else {
        // Android workaround by wrapping VictoryPie with SVG
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Svg width={SIZES.width} height={SIZES.width} style={{ width: "100%", height: "auto" }}>

                    <VictoryPie
                        standalone={false} // Android workaround
                        data={chartData}
                        labels={(datum) => `${datum.y}`}
                        radius={({ datum }) => (props.category && props.category.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                        innerRadius={70}
                        labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
                        style={{
                            labels: { fill: "white", ...FONTS.body3 },
                            parent: {
                                ...styles.shadow
                            },
                        }}
                        width={SIZES.width}
                        height={SIZES.width}
                        colorScale={colorScales}
                        events={[{
                            target: "data",
                            eventHandlers: {
                                onPress: () => {
                                    return [{
                                        target: "labels",
                                        mutation: (props) => {
                                            let categoryName = chartData[props.index].name
                                            setSelectCategoryByName(categoryName)
                                        }
                                    }]
                                }
                            }
                        }]}

                    />
                </Svg>
                <View style={{ position: 'absolute', top: '42%', left: "42%" }}>
                    <Text style={{ ...FONTS.h1, textAlign: 'center' }}>{totalExpenseCount}</Text>
                    <Text style={{ ...FONTS.body3, textAlign: 'center' }}>Expenses</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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