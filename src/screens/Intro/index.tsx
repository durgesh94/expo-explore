import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/common/Button';
import { introStyles } from "./intro.style";

export const Intro: React.FC = ({ navigation }: any) => {

    return (
        <SafeAreaView style={introStyles.container}>
            <Button title="Expense Application" onClick={() => navigation.navigate("ui-expense")} />
        </SafeAreaView>
    )
}