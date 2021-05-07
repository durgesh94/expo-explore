import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryHeader } from "../../components/ExpenseApplication/CategoryHeader";
import { CategoryList } from "../../components/ExpenseApplication/CategoryList";
import { Chart } from "../../components/ExpenseApplication/Chart";
import { ExpenesSummary } from "../../components/ExpenseApplication/ExpenseSummary";
import { Header } from "../../components/ExpenseApplication/Header";
import { IncomingExpenses } from "../../components/ExpenseApplication/IncomingExpenses";
import { Summary } from "../../components/ExpenseApplication/Summary";
import { COLORS } from "../../constants";
import { categoriesData } from "../../data/ExpenseApplication";

export const ExpenseApplication: React.FC = ({ navigation }: any) => {

    const data = { type: "Private", date: "18 Apr, 2021", per: 25 }
    const [viewMode, setViewMode] = useState("chart");
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [categories, setCategories] = React.useState(categoriesData)

    function setSelectCategoryByName(name: any) {
        let category: any = categories.filter(a => a.name == name);
        setSelectedCategory(category[0]);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header onLeftClick={() => navigation.goBack()} onRightClick={() => alert("Coming Soon!")} />
            <Summary data={data} />
            <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
                <CategoryHeader mode={viewMode} onClick={(mode) => setViewMode(mode)} />
                <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                    {
                        viewMode == "list" &&
                        <>
                            <CategoryList categories={categories} onClick={(category) => setSelectedCategory(category)} />
                            <IncomingExpenses category={selectedCategory} />
                        </>
                    }
                    {
                        viewMode == "chart" &&
                        <>
                            <Chart categories={categories} category={selectedCategory} onClick={(name) => setSelectCategoryByName(name)} />
                            <ExpenesSummary categories={categories} category={selectedCategory} onClick={(name) => setSelectCategoryByName(name)} />
                        </>
                    }
                </ScrollView>
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