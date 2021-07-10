import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/common/Button';
import { introStyles } from "./intro.style";
import LottieView from 'lottie-react-native';

export const Intro: React.FC = ({ navigation }: any) => {

    return (
        <SafeAreaView style={introStyles.container}>
            <LottieView
                source={require("../../../assets/lottie/stay-safe-stay-home.json")}
                autoPlay
                loop={true}
                style={{ height: 200 }}
            />
            {/* <Button title="Animation" onClick={() => navigation.navigate("animation")} /> */}
            <Button title="Plant Application : UI" onClick={() => navigation.navigate("ui-plant")} />
            <Button title="COVID-19 Application : UI + API" onClick={() => navigation.navigate("covid19")} />
            <Button title="Expense Application : UI" onClick={() => navigation.navigate("ui-expense")} />
        </SafeAreaView>
    )
}