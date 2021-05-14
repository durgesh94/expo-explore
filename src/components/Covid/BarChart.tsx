import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { Svg } from "react-native-svg";

const { width, height } = Dimensions.get("window");

interface BarChartProps {
    data: any;
}

export const BarChart: React.FC<BarChartProps> = ({ ...props }) => {

    return (
        <View style={styles.container}>
            <Svg width={width} height={width} style={{ width: "100%", height: "auto" }}>
                <VictoryChart
                    domainPadding={{ x: 70 }}
                    theme={VictoryTheme.material}>
                    <VictoryBar
                        alignment={"middle"}
                        barRatio={0.7}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        style={{
                            data: {
                                fill: ({ datum }) => datum._x === 1 ? "#7F7FFF" : datum._x === 2 ? "#7FFF7F" : "#FF7F7F"
                            },
                        }}
                        data={props.data} x="cases" y="total" />
                </VictoryChart>
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});