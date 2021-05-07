import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { introStyles } from "./intro.style";

export const Intro: React.FC = ({ navigation }: any) => {

    const onClick = (id: number) => {
        switch (id) {
            case 1:
                navigation.navigate("ui-expense");
                break;

            default:
                alert("Button id was not found.");
                break;
        }
    }

    return (
        <SafeAreaView style={introStyles.container}>
            <Button title="Expense Application" id={1} onClick={(id) => onClick(id)} />
        </SafeAreaView>
    )
}