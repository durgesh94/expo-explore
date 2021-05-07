import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryHeader } from "../../components/CategoryHeader";
import { CategoryList } from "../../components/CategoryList";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { COLORS } from "../../constants";

export const ExpenseApplication: React.FC = () => {

    const data = { type: "Private", date: "18 Apr, 2021", per: 25 }
    const [viewMode, setViewMode] = useState("list");

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Summary data={data} />
            <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
                <CategoryHeader />
                <CategoryList />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})